import axios from 'axios'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import cheerio, { Root } from 'cheerio'

import { ColorOptions, ImageOptions, LanguagePattern, ParsedRequest } from '../typings/types'
import { css } from './getCss'
import { mergeProps, randomEnum, toFormatString } from './commons'
import { CONFIG } from './config'

type WordData = {
    word: string
    link: string | undefined
    partOfSpeech: Record<string, string>
    example: Record<string, string>
    description: Record<string, string>
}

export async function wotdRenderer(parsedRequest: ParsedRequest): Promise<string> {
    const { language, width, height, ...rest } = parsedRequest

    const colorOptions: ColorOptions = mergeProps(CONFIG.colorOptions, rest)
    const imageOptions: ImageOptions = mergeProps(CONFIG.imageOptions, { width, height })

    console.log(
        `
        >>> Generating Word of the Day with parameters:
        language=${language},
        colorOptions=${toFormatString(colorOptions)}
        imageOptions=${toFormatString(imageOptions)}
        `
    )

    const lang = language === undefined ? randomEnum(LanguagePattern) : language
    const wordData: WordData = await getWordByLang(lang)

    return `
    <svg
        width="${imageOptions.width}"
        height="${imageOptions.height}"
        xmlns="http://www.w3.org/2000/svg">
        <foreignObject x="0" y="0" width="${imageOptions.width}" height="${imageOptions.height}">
            <div xmlns="http://www.w3.org/1999/xhtml">
              <div class="word-wrapper">
                <div class="word-wrapper-desc">
                  <p class="font-monserrat700">
                    <a href="${wordData.link}" target="_blank">${wordData.word}</a>
                  </p>
                  <div class="line"></div>
                  <p class="font-monserratRegular">
                    <span>${wordData.partOfSpeech.name}</span>
                    <span>${wordData.partOfSpeech.value}</span>
                  </p>
                  <p class="font-monserratRegular">
                    <span>${wordData.example.name}</span>
                    <span>${wordData.example.value}</span>
                  </p>
                  <p class="font-monserratRegular">
                    <span>${wordData.description.name}</span>
                    <span>${wordData.description.value}</span>
                  </p>
                </div>
              </div>
            </div>
        </foreignObject>
        <style>${css(colorOptions)}</style>
      </svg>
  `
}

const getWordByLang = async (lang: LanguagePattern): Promise<WordData> => {
    const url = `${CONFIG.routeOptions.url}${lang}`

    // Fetching the HTML using axios
    const data = await axios.get(url)

    // Using cheerio to load the HTML fetched
    const html: Root = cheerio.load(data)

    //Gets the quote
    const word = html('table > h3 > a').text()?.trim()
    const link = html('table > h3 > a').attr('href')?.trim()

    const partOfSpeech = getRecord(html, 'table > table > tr[0]')
    const example = getRecord(html, 'table > table > tr[1]')
    const description = getRecord(html, 'table > table > tr[2]')

    return {
        description,
        example,
        partOfSpeech,
        link,
        word,
    }
}

const getRecord = (html: Root, selector: string): Record<string, string> => {
    const name = html(`${selector} > th`).text()?.trim()
    const value = html(`${selector} > td`).text()?.trim()

    return { name, value }
}

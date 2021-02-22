import axios from 'axios'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import cheerio, { Cheerio, Root } from 'cheerio'

import { ColorOptions, ImageOptions, LanguagePattern, ParsedRequest } from '../typings/types'
import { css } from './getCss'
import { mergeProps, randomEnum, toFormatString } from './commons'
import { CONFIG } from './config'

// eslint-disable-next-line @typescript-eslint/no-require-imports,@typescript-eslint/no-var-requires
require('https').globalAgent.options.rejectUnauthorized = false

type WordData = {
    language: string
    title: string
    link: string | undefined
    partOfSpeech: Record<string, string>
    example: Record<string, string>
    description: Record<string, string>
}

export async function wotdRenderer(parsedRequest: ParsedRequest): Promise<string> {
    const { language, width, height, ...rest } = parsedRequest

    const colorOptions: ColorOptions = mergeProps(CONFIG.colorOptions, rest)
    const imageOptions: ImageOptions = mergeProps(CONFIG.imageOptions, { width, height })

    const pattern = language === undefined ? randomEnum(LanguagePattern) : language

    console.log(
        `
        >>> Generating Word of the Day with parameters:
        pattern=${pattern},
        colorOptions=${toFormatString(colorOptions)}
        imageOptions=${toFormatString(imageOptions)}
        `
    )

    const wordData: WordData = await getWordByPattern(pattern)

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
                    <div class="_name">${wordData.language}</div>
                    <div class="_value"><a href="${wordData.link}" target="_blank">${wordData.title}</a></div>
                  </p>
                  <div class="line"></div>
                  <p class="font-monserratRegular">
                    <div class="_name">${wordData.partOfSpeech.name}</div>
                    <div class="_value">${wordData.partOfSpeech.value}</div>
                  </p>
                  <p class="font-monserratRegular">
                    <div class="_name">${wordData.example.name}</div>
                    <div class="_value">${wordData.example.value}</div>
                  </p>
                  <p class="font-monserratRegular">
                    <div class="_name">${wordData.description.name}</div>
                    <div class="_value">${wordData.description.value}</div>
                  </p>
                </div>
              </div>
            </div>
        </foreignObject>
        <style>${css(colorOptions)}</style>
      </svg>
  `
}

const getWordByPattern = async (pattern: LanguagePattern): Promise<WordData> => {
    const url = `${CONFIG.routeOptions.url}${pattern}`

    // Fetching html using axios
    const response = await axios.get(url)

    if (response.status !== 200) {
        throw new Error(`Cannot request resource by url=${url}, message=${response.statusText}`)
    }

    // Parsing html data
    const html = cheerio.load(response.data, { xmlMode: true })

    // Selecting data from html
    const language = getText(html('title:first'))
    const title = getText(html('item title'))
    const link = getText(html('item guid'))
    const content = getText(html('item description'))

    // Selecting data from description
    const table = cheerio.load(content)
    const partOfSpeech = getRecord(table, 1)
    const example = getRecord(table, 2)
    const description = getRecord(table, 3)

    return {
        language,
        title,
        link,
        partOfSpeech,
        example,
        description,
    }
}

const getRecord = (html: Root, selector: number): Record<string, string> => {
    const name = getText(html(`tr:nth-child(${selector}) th`))
    const value = getText(html(`tr:nth-child(${selector}) td`))

    return { name, value }
}

const getText = (str: Cheerio): string => {
    return str && str.text()?.trim()
}

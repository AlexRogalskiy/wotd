// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line import/named
import cheerio, { Cheerio, Root } from 'cheerio'

import { StringNameValue } from '../../typings/standard-types'
import { QueryOptions, TemplateOptions } from '../../typings/domain-types'

import { fetchAsText, getApiUrl } from '../utils/requests'
import { boxenLogs } from '../utils/loggers'
import { serialize } from '../utils/serializers'

// eslint-disable-next-line @typescript-eslint/no-require-imports,@typescript-eslint/no-var-requires
require('https').globalAgent.options.rejectUnauthorized = false

const getRecord = (html: Root, selector: number): StringNameValue => {
    const name = getText(html(`tr:nth-child(${selector}) th`))
    const value = getText(html(`tr:nth-child(${selector}) td`))

    return { name, value }
}

const getText = (str: Cheerio): string => {
    return str && str.text()?.trim()
}

export async function getWordsDataByQuery(query: Required<QueryOptions>): Promise<TemplateOptions> {
    boxenLogs(`Fetching word data by query=${serialize(query)}`)

    const url = getApiUrl(query.baseUrl, query.query)
    const response = await fetchAsText(url)

    // Parsing html data
    const html = cheerio.load(response, { xmlMode: true })

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

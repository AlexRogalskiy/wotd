import { NowRequest, NowResponse, VercelResponse } from '@vercel/node'

import { wotdRenderer } from '../utils/wotd'
import { toString } from '../utils/commons'

import { HeroPattern, LanguagePattern } from '../typings/types'

export default async function render(req: NowRequest, res: NowResponse): Promise<VercelResponse> {
    try {
        const {
            language,
            pattern,
            width,
            height,
            backgroundColor,
            fontColor,
            opacity,
            colorPattern,
        } = req.query

        const wotd = await wotdRenderer({
            language: LanguagePattern[toString(language)] as LanguagePattern,
            pattern: HeroPattern[toString(pattern)] as HeroPattern,
            width: toString(width),
            height: toString(height),
            backgroundColor,
            fontColor,
            opacity,
            colorPattern,
        })

        res.setHeader('Cache-Control', 'no-cache,max-age=0,no-store,s-maxage=0,proxy-revalidate')
        res.setHeader('Pragma', 'no-cache')
        res.setHeader('Expires', '-1')
        res.setHeader('Content-type', 'image/svg+xml')
        res.setHeader('X-Powered-By', 'Vercel')

        return res.send(wotd)
    } catch (error) {
        return res.send({
            status: 'Error',
            name: error.name,
            message: error.message,
        })
    }
}

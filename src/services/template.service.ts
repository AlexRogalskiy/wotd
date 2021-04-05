import {
    AnimationOptions,
    FontOptions,
    ImageOptions,
    LayoutOptions,
    ParsedRequestData,
    QueryOptions,
    ThemeOptions,
} from '../../typings/domain-types'
import { LanguagePattern } from '../../typings/enum-types'

import { mergeProps, randomEnum } from '../utils/commons'
import { serialize } from '../utils/serializers'
import { profile } from '../utils/profiles'
import { boxenLogs } from '../utils/loggers'

import { getTheme } from '../themes/themes'
import { getLayout } from '../layouts/layouts'
import { getFont } from '../fonts/fonts'
import { getAnimation } from '../animations/animations'
import { getSvgTemplate } from '../models/template'

import * as wordsClient from '../clients/words.client'

export async function templateRenderer(requestData: ParsedRequestData): Promise<string> {
    const {
        fontPattern,
        themePattern,
        animationPattern,
        layoutPattern,
        languagePattern,
        imageOptions,
        themeOptions,
    } = requestData

    const language = languagePattern ? languagePattern : randomEnum(LanguagePattern)

    const query = mergeProps<QueryOptions>(profile.queryOptions, { query: language })
    const layout = mergeProps<LayoutOptions>(profile.layoutOptions, getLayout(layoutPattern))
    const font = mergeProps<FontOptions>(profile.styleOptions?.font, getFont(fontPattern))
    const theme = mergeProps<ThemeOptions>(profile.styleOptions?.theme, getTheme(themePattern), themeOptions)
    const animation = mergeProps<AnimationOptions>(
        profile.styleOptions?.animation,
        getAnimation(animationPattern)
    )
    const style = { font, theme, animation }
    const image = mergeProps<ImageOptions>(profile.imageOptions, imageOptions)

    const template = await wordsClient.getWordsDataByQuery(query)

    boxenLogs(
        `
        Generating image view with parameters:
        image options=${serialize(image)},
        theme options=${serialize(theme)}
        `
    )

    return template ? await getSvgTemplate({ layout, style, image, template }) : ''
}

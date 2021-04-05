import boxen from 'boxen'

import { Optional } from './standard-types'
import {
    AnimationPattern,
    FontPattern,
    HeroPattern,
    LanguagePattern,
    LayoutPattern,
    ThemePattern,
} from './enum-types'

/**
 * FontOptions
 * @desc Type representing font options
 */
export type FontOptions = {
    /**
     * Font family
     */
    readonly fontFamily: string
    /**
     * Font data
     */
    readonly fontSrc: string
}
//--------------------------------------------------------------------------------------------------
/**
 * AnimationOptions
 * @desc Type representing animation options
 */
export type AnimationOptions = {
    /**
     * Animation type
     */
    readonly animation: string
    /**
     * Animation keyframes
     */
    readonly keyframes: string
}
//--------------------------------------------------------------------------------------------------
/**
 * ThemeOptions
 * @desc Type representing theme options
 */
export type ThemeOptions = {
    /**
     * Theme primary text color
     */
    readonly primaryColor?: string
    /**
     * Theme secondary text color
     */
    readonly secondaryColor?: string
    /**
     * Theme background color
     */
    readonly bgColor?: string
    /**
     * Theme color pattern
     */
    readonly colorPattern?: string
    /**
     * Theme background opacity
     */
    readonly opacity?: Optional<number>
    /**
     * Template background pattern
     */
    readonly pattern?: Optional<HeroPattern>
}
//--------------------------------------------------------------------------------------------------
/**
 * StyleOptions
 * @desc Type representing style options
 */
export type StyleOptions = {
    /**
     * Style font options
     */
    readonly font: FontOptions
    /**
     * Style theme options
     */
    readonly theme: ThemeOptions
    /**
     * Style animation options
     */
    readonly animation: AnimationOptions
}
//--------------------------------------------------------------------------------------------------
/**
 * TemplateOptions
 * @desc Type representing template options
 */
export type TemplateOptions = {
    /**
     * Words language
     */
    language: string
    /**
     * Words title
     */
    title: string
    /**
     * Words link
     */
    link: Optional<string>
    /**
     * Words part of speech
     */
    partOfSpeech: Record<string, string>
    /**
     * Words example
     */
    example: Record<string, string>
    /**
     * Words description
     */
    description: Record<string, string>
}
//--------------------------------------------------------------------------------------------------
/**
 * LayoutOptions
 * @desc Type representing layout options
 */
export type LayoutOptions = {
    /**
     * Creates style by input {@link StyleOptions}
     * @param options initial input {@link StyleOptions}
     */
    readonly style: (options: StyleOptions) => string
    /**
     * Creates template by input {@link TemplateOptions}
     * @param options initial input {@link TemplateOptions}
     */
    readonly template: (options: TemplateOptions) => string
}
//--------------------------------------------------------------------------------------------------
/**
 * ImageOptions
 * @desc Type representing image options
 */
export type ImageOptions = {
    /**
     * Image width
     */
    readonly width: string
    /**
     * Image height
     */
    readonly height: string
}
//--------------------------------------------------------------------------------------------------
/**
 * QueryOptions
 * @desc Type representing query options
 */
export type QueryOptions = {
    /**
     * Query base url
     */
    readonly baseUrl: string
    /**
     * Query label
     */
    readonly query: string
}
//--------------------------------------------------------------------------------------------------
/**
 * ProfileOptions
 * @desc Type representing profile options
 */
export type ProfileOptions = {
    /**
     * Route query options
     */
    readonly queryOptions: Partial<QueryOptions>
    /**
     * Image configuration options
     */
    readonly imageOptions: Partial<ImageOptions>
    /**
     * Style configuration options
     */
    readonly styleOptions?: Partial<StyleOptions>
    /**
     * Layout configuration options
     */
    readonly layoutOptions?: Partial<LayoutOptions>
    /**
     * Output configuration options
     */
    readonly outputOptions?: Partial<boxen.Options>
}
//--------------------------------------------------------------------------------------------------
/**
 * TemplateData
 * @desc Type representing template data
 */
export type TemplateData = {
    /**
     * Template layout options
     */
    readonly layout: LayoutOptions
    /**
     * Template style options
     */
    readonly style: StyleOptions
    /**
     * Template image options
     */
    readonly image: ImageOptions
    /**
     * Template data options
     */
    readonly template: TemplateOptions
}
//--------------------------------------------------------------------------------------------------
/**
 * ParsedRequestData
 * @desc Type representing parsed request data
 */
export type ParsedRequestData = {
    /**
     * Request image options
     */
    readonly imageOptions: Partial<ImageOptions>
    /**
     * Request theme options
     */
    readonly themeOptions: Partial<ThemeOptions>
    /**
     * Request theme pattern
     */
    readonly themePattern?: Optional<ThemePattern>
    /**
     * Request layout pattern
     */
    readonly layoutPattern?: Optional<LayoutPattern>
    /**
     * Request animation pattern
     */
    readonly animationPattern?: Optional<AnimationPattern>
    /**
     * Request language pattern
     */
    readonly languagePattern?: Optional<LanguagePattern>
    /**
     * Request font pattern
     */
    readonly fontPattern?: Optional<FontPattern>
}
//--------------------------------------------------------------------------------------------------

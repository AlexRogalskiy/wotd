import { LayoutOptions, StyleOptions, TemplateOptions } from '../../typings/domain-types'
import { FontPattern, LayoutPattern } from '../../typings/enum-types'

import { getFont } from '../fonts/fonts'
import { getHeroPattern } from '../patterns/patterns'

const defaultLayout: Record<LayoutPattern.default, LayoutOptions> = {
    default: {
        style: (options: StyleOptions) => {
            const { primaryColor, secondaryColor, bgColor, pattern, opacity, colorPattern } = options.theme

            const fontPrimary = getFont(FontPattern.monserrat)
            const fontSecondary = getFont(FontPattern.monserrat_700)

            const backgroundPattern = getHeroPattern(pattern, String(opacity), String(colorPattern))

            return `
                    * {
                        padding: 0;
                        margin: 0;
                        box-sizing: border-box;
                    }
                    @font-face{
                        font-family: ${fontPrimary.fontFamily};
                        font-style: normal;
                        font-weight: normal;
                        src: url(data:font/woff2;charset=utf-8;base64,${fontPrimary.fontSrc}) format('woff2');
                    }
                    @font-face {
                        font-family: ${fontSecondary.fontFamily};
                        font-style: normal;
                        font-weight: bold;
                        src: url(data:font/woff2;charset=utf-8;base64,${fontSecondary.fontSrc}) format('woff2');
                    }

                    .header {
                        font-family: ${fontSecondary.fontFamily}, sans-serif;
                        font-weight: bold;
                        font-size: 1.5rem;
                        color: #${primaryColor};
                        text-align: left;
                        margin: 0% 4% 3% 4%;
                    }
                    .content {
                        font-family: ${fontSecondary.fontFamily}, sans-serif;
                        font-style: normal;
                        color: #${secondaryColor};
                    }

                    .name {
                        font-style: italic;
                        font-weight: bold;
                        padding: 1% 2%;
                    }
                    .value {
                        font-style: normal;
                        font-weight: normal;
                        padding: 0% 4%;
                    }

                    .word-wrapper {
                        background: #${bgColor};
                        background-image: ${backgroundPattern};
                        margin: 0;
                        box-sizing: border-box;
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                        padding: 2% 2%;
                    }

                    p {
                        font-size: 1.0rem;
                        margin: 2% 4%;
                    }
                    p.site {
                        margin-top: 10px;
                    }

                    .word-wrapper-desc {
                        display: flex;
                        flex-direction: column;
                        width: 100%;
                    }

                    div.line {
                        width: 0%;
                        min-width: 100%;
                        max-width: 100%;
                        margin: 0 auto;
                        border: none;
                        border-bottom: 2px dotted rgba(0,0,0, 0.5);
                    }
                `
        },
        template: (options: TemplateOptions) => {
            return `
                    <div class="word-wrapper">
                        <div class="word-wrapper-desc">
                            <p class="header">
                                <div class="name">${options.language}</div>
                                <div class="value"><a href="${options.link}" target="_blank">${options.title}</a></div>
                            </p>

                            <div class="line"></div>

                            <p class="content">
                                <div class="name">${options.partOfSpeech.name}</div>
                                <div class="value">${options.partOfSpeech.value}</div>
                            </p>
                            <p class="content">
                                <div class="name">${options.example.name}</div>
                                <div class="value">${options.example.value}</div>
                            </p>
                            <p class="content">
                                <div class="name">${options.description.name}</div>
                                <div class="value">${options.description.value}</div>
                            </p>
                        </div>
                    </div>
                `
        },
    },
}

export default defaultLayout

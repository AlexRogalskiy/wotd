import getPattern from './bg-hero'
import { ColorOptions } from '../typings/types'
import { monserrat700, monserratRegular } from './font'

export const css = (colorOptions: ColorOptions): string => {
    const { fontColor, backgroundColor, pattern, opacity, colorPattern } = colorOptions
    const backgroundPattern = getPattern(
        `${pattern === undefined ? '' : pattern}`,
        `${opacity}`,
        `${colorPattern}`
    )

    return `
      @font-face{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: normal;
        src: url(data:font/woff2;charset=utf-8;base64,${monserratRegular}) format('woff2');
      }
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: bold;
        src: url(data:font/woff2;charset=utf-8;base64,${monserrat700}) format('woff2');
      }
      .font-monserrat700 {
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
        color: ${fontColor};
        text-align: left;
        margin: 3% 3% 3% 3%;
      }
      .font-monserratRegular {
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        color: ${fontColor};
      }
      .font-monserratRegular ._name {
        font-style: italic;
        font-weight: bold;
        padding: 2% 2%;
      }
      .word-wrapper {
        background: ${backgroundColor};
        background-image: ${backgroundPattern};
        margin: 0;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 5% 5%;
      }
      p{
        font-size: 1.0rem;
        margin: 5% 5%;
      }
      p.site {
        margin-top: 10px;
      }
      .word-wrapper-desc {
        display: flex;
        flex-direction: column;
        width: 100%;
      }
      div.line{
        width: 0%;
        min-width: 100%;
        max-width: 100%;
        margin: 0 auto;
        border: none;
        border-bottom: 1px solid #666;
      }
    `
}

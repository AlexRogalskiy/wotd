# _Styled wotd_

> Generate SVG [styled wotd](https://en.wiktionary.org/wiki/Wiktionary:Word_of_the_day)

![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/AlexRogalskiy/wotd)
![GitHub Release Date](https://img.shields.io/github/release-date/AlexRogalskiy/wotd)
![Lines of code](https://tokei.rs/b1/github/AlexRogalskiy/wotd?category=lines)
![GitHub closed issues](https://img.shields.io/github/issues-closed/AlexRogalskiy/wotd)
![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed/AlexRogalskiy/wotd)
![GitHub repo size](https://img.shields.io/github/repo-size/AlexRogalskiy/wotd)
![GitHub last commit](https://img.shields.io/github/last-commit/AlexRogalskiy/wotd)
![GitHub](https://img.shields.io/github/license/AlexRogalskiy/wotd)
![GitHub language count](https://img.shields.io/github/languages/count/AlexRogalskiy/wotd)
![GitHub search hit counter](https://img.shields.io/github/search/AlexRogalskiy/wotd/goto)
![GitHub Repository branches](https://badgen.net/github/branches/AlexRogalskiy/wotd)
![GitHub Repository dependents](https://badgen.net/github/dependents-repo/AlexRogalskiy/wotd)
[![Tokei](https://tokei.rs/b1/github/AlexRogalskiy/wotd?category=lines)](https://github.com/XAMPPRocky/tokei)
![Mergify Status](https://img.shields.io/endpoint.svg?url=https://gh.mergify.io/badges/AlexRogalskiy/wotd)
[![Reviewed by Hound](https://img.shields.io/badge/Reviewed_by-Hound-8E64B0.svg)](https://houndci.com)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://raw.githubusercontent.com/alexrogalskiy/wotd/master/LICENSE?token=AH44ZFH7IF2KSEDK7LSIW3C7YOFYC)
[![Issue](https://img.shields.io/github/issues/alexrogalskiy/wotd)](https://img.shields.io/github/issues/alexrogalskiy/wotd)
[![Forks](https://img.shields.io/github/forks/alexrogalskiy/wotd)](https://img.shields.io/github/forks/alexrogalskiy/wotd)
[![Stars](https://img.shields.io/github/stars/alexrogalskiy/wotd)](https://img.shields.io/github/stars/alexrogalskiy/wotd)
![code style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)
[![Maintainability](https://api.codeclimate.com/v1/badges/ed7702f8cf28917829fa/maintainability)](https://codeclimate.com/github/AlexRogalskiy/wotd/maintainability)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/AlexRogalskiy/wotd.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/AlexRogalskiy/wotd/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/AlexRogalskiy/wotd.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/AlexRogalskiy/wotd/context:javascript)

[![Renovatebot](https://badgen.net/badge/renovate/enabled/green?cache=300)](https://renovatebot.com/)
[![Dependabot](https://img.shields.io/badge/dependabot-enabled-1f8ceb.svg?style=flat-square)](https://dependabot.com/)
[![NewReleases](https://newreleases.io/badge.svg)](https://newreleases.io/github/AlexRogalskiy/wotd)
[![Hits-of-Code](https://hitsofcode.com/github/AlexRogalskiy/wotd)](https://hitsofcode.com/github/AlexRogalskiy/wotd/view)
[![ComVer](https://img.shields.io/badge/ComVer-compliant-brightgreen.svg)][tags]
[![GitHub Super-Linter](https://github.com/AlexRogalskiy/wotd/workflows/Lint%20Code%20Base/badge.svg)](https://github.com/marketplace/actions/super-linter)

## _Table of contents_

<!--ts-->
   * [<em>Styled wotd</em>](#styled-wotd)
      * [<em>Table of contents</em>](#table-of-contents)
      * [<em>Description</em>](#description)
      * [<em>How to use</em>](#how-to-use)
      * [<em>Example</em>](#example)
      * [<em>Visitor stats</em>](#visitor-stats)
      * [<em>Licensing</em>](#licensing)
      * [<em>Authors</em>](#authors)
      * [<em>Versioning</em>](#versioning)
      * [<em>Contribution</em>](#contribution)
      * [<em>Acknowledgement</em>](#acknowledgement)
      * [<em>Forks</em>](#forks)
      * [<em>Development Support</em>](#development-support)
<!--te-->

## _Description_

<p align="center" style="text-align:center;">
    <a href="https://www.typescriptlang.org/">
        <img src="https://img.shields.io/badge/typescript%20-%23007ACC.svg?&logo=typescript&logoColor=white" alt="TypeScript" />
    </a>
    <a href="https://www.repostatus.org/#active">
        <img src="https://img.shields.io/badge/Project%20Status-Active-brightgreen" alt="Project Status: Active – The project has reached a stable, usable state and is being actively developed." />
    </a>
    <a href="https://badges.pufler.dev">
        <img src="https://badges.pufler.dev/created/AlexRogalskiy/wotd" alt="Project created status" />
    </a>
    <a href="https://badges.pufler.dev">
        <img src="https://badges.pufler.dev/updated/AlexRogalskiy/wotd" alt="Project updated status" />
    </a>
</p>

_**Styled wotd**_ is a serverless function that generates dynamically styled quote images based on SVG (Scalable Vector Graphics).
For the tech stack, _**Styled wotd**_ using Typescript and serverless function from Vercel stack.

## _How to use_

It's simple, you can copy paste this markdown content, like this one:

```
![Styled wotd](https://styled-wotd.vercel.app/api?backgroundColor=[value]&opacity=[value]&colorPattern=[value]&fontColor=[value]&pattern=[pattern]&language=[value]&width=[width]&height=[height])
```

There are several options you can use from the list:

|  **Options**         | **Description**                          |   **Type**                     | **Example**   | **Query Params**               | 
| -------------------- | ---------------------------------------- | ------------------------------ | ------------- | ------------------------------ |
| **[Background Color]** | Background color for the quote image   | <code>Hex string</code>        | %23ffffff     | ```?backgroundColor=[value]``` |
| **[Opacity Pattern]**  | Background opacity of the pattern      | <code>Float</code>             | 0 - 1         | ```&opacity=[value]```         |
| **[Color Pattern]**    | Color pattern for the signage          | <code>Hex string</code>        | %231abc9c     | ```&colorPattern=[value]```    |
| **[Font Color]**       | Font color for the quote text          | <code>Hex string</code>        | %23000000     | ```&fontColor=[value]```       |
| **[Pattern]**          | Pattern for the background             | <code>String constant</code>   | plus          | ```&pattern=[value]```         |
| **[Language]**         | Wotd language                          | <code>String constant</code>   | arabic        | ```&language=[value]```        |
| **[Width]**            | Wotd image width                       | <code>String</code>            | 100%          | ```&width=[value]```           |
| **[Height]**           | Wotd image height                      | <code>String</code>            | 100%          | ```&height=[value]```          |

Here is a list of Languages supported by Quotes API:

| **Name**                          | **Value**             | 
| --------------------------------- | --------------------- |
| **Arabic**                        | arabic                |
| **Balinese**                      | balinese              |
| **Chinese (mandarin)**            | mandarin_chinese      |
| **Dari**                          | dari                  |
| **Dutch**                         | dutch                 |
| **English (portuguese)**          | portuguese_english    |
| **English (spanish)**             | spanish_english       |
| **Esperanto**                     | esperanto             |
| **French**                        | french                |
| **German**                        | german                |
| **Hebrew**                        | hebrew                |
| **Hindi**                         | hindi                 |
| **Indonesian**                    | indonesian            |
| **Irish**                         | irish                 |
| **Italian**                       | italian               |
| **Japanese**                      | japanese              |
| **Korean**                        | korean                |
| **Latin**                         | latin                 |
| **Norwegian**                     | norwegian             |
| **Pashto**                        | pashto                |
| **Polish**                        | polish                |
| **Brazilian**                     | brazilian             |
| **Russian**                       | russian               |
| **Spanish**                       | spanish               |
| **Swedish**                       | swedish               |
| **Turkish**                       | turkish               |
| **Urdu**                          | urdu                  |

Patters in Wotd are provided by [Hero Pattern](https://github.com/lowmess/hero-patterns) package which is developed by [Lowmess](https://github.com/lowmess/): 

| **Name**                          | **Value**                     | 
| --------------------------------- | ----------------------------- |
| **Jigsaw**                        | jigsaw                        |
| **Overcast**                      | overcast                      |
| **Formal Invitation**             | formalInvitation              |
| **Topography**                    | topography                    |
| **Texture**                       | texture                       |
| **Jupiter**                       | jupiter                       |
| **Architect**                     | architect                     |
| **Cutout**                        | cutout                        |
| **Hideout**                       | hideout                       |
| **Graph Paper**                   | graphPaper                    |
| **Yyy**                           | yyy                           |
| **Squares**                       | squares                       |
| **Falling Triangles**             | fallingTriangles              |
| **Piano Man**                     | pianoMan                      |
| **Pie Factory**                   | pieFactory                    |
| **Dominos**                       | dominos                       |
| **Hexagons**                      | hexagons                      |
| **Charlie Brown**                 | charlieBrown                  |
| **Autumn**                        | autumn                        |
| **Temple**                        | temple                        |
| **Stamp Collection**              | stampCollection               |
| **Death Star**                    | deathStar                     |
| **Church on Sunday**              | churchOnSunday                |
| **I Like Food**                   | iLikeFood                     |
| **Overlapping Hexagons**          | overlappingHexagons           |
| **Four Point Stars**              | fourPointStars                |
| **Bamboo**                        | bamboo                        |
| **Bathroom Floor**                | bathroomFloor                 |
| **CorkScrew**                     | corkScrew                     | 
| **Happy Intersection**            | happyIntersection             |
| **Kiwi**                          | kiwi                          |
| **Lisbon**                        | lisbon                        |
| **Random Shapes**                 | randomShapes                  |
| **Steel Beams**                   | steelBeams                    |
| **Tiny Checkers**                 | tinyCheckers                  |
| **X Equals**                      | xEquals                       |
| **Anchors Away**                  | anchorsAway                   |
| **Bevel Circle**                  | bevelCircle                   |
| **Brick Wall**                    | brickWall                     |
| **Fancy Rectangles**              | fancyRectangles               |
| **Heavy Rain**                    | heavyRain                     |
| **Overlapping Circles**           | overlappingCircles            |
| **Plus**                          | plus                          |
| **Rounded Plus Connected**        | roundedPlusConnected          |
| **Volcano Lamp**                  | volcanoLamp                   |
| **Wiggle**                        | wiggle                        |
| **Bubbles**                       | bubbles                       |
| **Cage**                          | cage                          |
| **Connections**                   | connections                   |
| **Current**                       | current                       |
| **Diagonal Stripes**              | diagonalStripes               |
| **Flipped Diamonds**              | flippedDiamonds               |
| **Floating Cogs**                 | floatingCogs                  |
| **Glamorous**                     | glamorous                     |
| **Hounds tooth**                  | houndstooth                   |
| **Leaf**                          | leaf                          |
| **Lines In Motion**               | linesInMotion                 |
| **Moroccan**                      | moroccan                      |
| **Morphing Diamonds**             | morphingDiamonds              |
| **Rails**                         | rails                         |
| **Rain**                          | rain                          |
| **Skulls**                        | skulls                        |
| **Squares In Squares**            | squaresInSquares              |
| **Stripes**                       | stripes                       |
| **Tic Tac Toe**                   | ticTacToe                     |
| **ZigZag**                        | zigZag                        |
| **Aztec**                         | aztec                         |
| **BankNote**                      | bankNote                      |
| **Boxes**                         | boxes                         |
| **Circles And Squares**           | circlesAndSquares             |
| **CircuitBoard**                  | circuitBoard                  |
| **Curtain**                       | curtain                       |
| **Diagonal Lines**                | diagonalLines                 |
| **Endless Clouds**                | endlessClouds                 |
| **Eyes**                          | eyes                          |
| **Floor Tile**                    | floorTile                     |
| **Groovy**                        | groovy                        |
| **Intersecting Circles**          | intersectingCircles           |
| **Melt**                          | melt                          |
| **Overlapping Diamonds**          | overlappingDiamonds           |
| **Parkay Floor**                  | parkayFloor                   |
| **Pixel Dots**                    | pixelDots                     |
| **Polka Dots**                    | polkaDots                     |
| **Signal**                        | signal                        |
| **Slanted** Stars                 | slantedStars                  |
| **Wallpaper**                     | wallpaper                     |

## _Example_

This is example of using _**Styled Wotd**_:

```
![Styled wotd](https://styled-wotd.vercel.app/api?backgroundColor=%23FFFFFF&fontColor=%230A83DC&opacity=0.3&colorPattern=%23FFE0E9)
```

Result:

<div align="center" style="align-content: center">
    <img width="100%" height="400px" src="https://styled-wotd.vercel.app/api?backgroundColor=%23FFFFFF&fontColor=%230A83DC&opacity=0.3&colorPattern=%23FFE0E9" alt="Word of the Day" />
</div>

## _Visitor stats_

[![GitHub page hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FAlexRogalskiy%2Fwotd&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=true)](https://hits.seeyoufarm.com)

![GitHub stars](https://img.shields.io/github/stars/AlexRogalskiy/wotd?style=social)
![GitHub forks](https://img.shields.io/github/forks/AlexRogalskiy/wotd?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/AlexRogalskiy/wotd?style=social)

## _Licensing_

_**Styled Wotd**_ is distributed under LGPL version 3 or later, [[License](https://github.com/AlexRogalskiy/wotd/blob/master/LICENSE)].
LGPLv3 is additional permissions on top of GPLv3.

![license](https://user-images.githubusercontent.com/19885116/48661948-6cf97e80-ea7a-11e8-97e7-b45332a13e49.png)

## _Authors_

_**Styled Wotd**_ is maintained by the following GitHub team-members:

* [![Author](https://img.shields.io/badge/author-AlexRogalskiy-FB8F0A)](https://github.com/AlexRogalskiy)

with community support please contact with us if you have some question or proposition.

## _Versioning_

The project uses [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository][tags].

## _Contribution_

[![Contributors Display](https://badges.pufler.dev/contributors/AlexRogalskiy/wotd?size=50&padding=5&bots=true)](https://badges.pufler.dev)

Please read
[CONTRIBUTING.md](https://github.com/AlexRogalskiy/wotd/blob/master/.github/CONTRIBUTING.md)
for details on our code of conduct, and the process for submitting pull requests to us ([emoji key](https://allcontributors.org/docs/en/emoji-key)).

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind are welcome!

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
![Github contributors](https://img.shields.io/github/all-contributors/AlexRogalskiy/wotd)

See also the list of [contributors][contributors] who participated in this project.

## _Acknowledgement_

[![Stargazers repo roster for @AlexRogalskiy/wotd](https://reporoster.com/stars/AlexRogalskiy/wotd)][stars]

## _Forks_

[![Forkers repo roster for @AlexRogalskiy/wotd](https://reporoster.com/forks/AlexRogalskiy/wotd)][forkers]

## _Development Support_

Like _**Styled Wotd**_ ? Consider buying me a coffee :\)

[![Become a Patron](https://img.shields.io/badge/Become_Patron-Support_me_on_Patreon-blue.svg?style=flat-square&logo=patreon&color=e64413)](https://www.patreon.com/alexrogalskiy)
[![Buy Me A Coffee](https://img.shields.io/badge/Donate-Buy%20me%20a%20coffee-yellow.svg?logo=buy%20me%20a%20coffee)](https://www.buymeacoffee.com/AlexRogalskiy)
[![KoFi](https://img.shields.io/badge/Donate-Buy%20me%20a%20coffee-yellow.svg?logo=ko-fi)](https://ko-fi.com/alexrogalskiy)

---

[![forthebadge](https://img.shields.io/badge/made%20with-%20typescript-C1282D.svg?logo=typescript&style=for-the-badge)](https://www.typescriptlang.org/)
[![forthebadge](https://img.shields.io/badge/powered%20by-%20vercel-7116FB.svg?logo=vercel&style=for-the-badge)](https://vercel.com/)
[![forthebadge](https://img.shields.io/badge/build%20with-%20%E2%9D%A4-B6FF9B.svg?logo=heart&style=for-the-badge)](https://forthebadge.com/)


  [repo]:           https://github.com/AlexRogalskiy/wotd
  [tags]:           https://github.com/AlexRogalskiy/wotd/tags
  [issues]:         https://github.com/AlexRogalskiy/wotd/issues
  [pulls]:          https://github.com/AlexRogalskiy/wotd/pulls
  [wiki]:           https://github.com/AlexRogalskiy/wotd/wiki
  [stars]:          https://github.com/AlexRogalskiy/wotd/stargazers
  [forkers]:        https://github.com/AlexRogalskiy/wotd/network/members
  [contributors]:   https://github.com/AlexRogalskiy/wotd/graphs/contributors

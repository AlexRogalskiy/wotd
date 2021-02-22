export enum HeroPattern {
    plus = 'plus',
    topography = 'topography',
    texture = 'texture',
    hideout = 'hideout',
    fallingTriangles = 'fallingTriangles',
    iLikeFood = 'iLikeFood',
    fourPointStars = 'fourPointStars',
    brickWall = 'brickWall',
    wiggle = 'wiggle',
    jigsaw = 'jigsaw',
    bubbles = 'bubbles',
    floatingCogs = 'floatingCogs',
    leaf = 'leaf',
    rain = 'rain',
    polkaDots = 'polkaDots',
    ticTacToe = 'ticTacToe',
    overcast = 'overcast',
    formalInvitation = 'formalInvitation',
    jupiter = 'jupiter',
    architect = 'architect',
    cutout = 'cutout',
    graphPaper = 'graphPaper',
    yyy = 'yyy',
    squares = 'squares',
    pianoMan = 'pianoMan',
    pieFactory = 'pieFactory',
    dominos = 'dominos',
    hexagons = 'hexagons',
    charlieBrown = 'charlieBrown',
    autumn = 'autumn',
    temple = 'temple',
    stampCollection = 'stampCollection',
    deathStar = 'deathStar',
    churchOnSunday = 'churchOnSunday',
    overlappingHexagons = 'overlappingHexagons',
    bamboo = 'bamboo',
    bathroomFloor = 'bathroomFloor',
    corkScrew = 'corkScrew',
    happyIntersection = 'happyIntersection',
    kiwi = 'kiwi',
    lips = 'lips',
    lisbon = 'lisbon',
    randomShapes = 'randomShapes',
    steelBeams = 'steelBeams',
    tinyCheckers = 'tinyCheckers',
    xEquals = 'xEquals',
    anchorsAway = 'anchorsAway',
    bevelCircle = 'bevelCircle',
    fancyRectangles = 'fancyRectangles',
    heavyRain = 'heavyRain',
    overlappingCircles = 'overlappingCircles',
    roundedPlusConnected = 'roundedPlusConnected',
    volcanoLamp = 'volcanoLamp',
    cage = 'cage',
    connections = 'connections',
    current = 'current',
    diagonalStripes = 'diagonalStripes',
    flippedDiamonds = 'flippedDiamonds',
    glamorous = 'glamorous',
    houndstooth = 'houndstooth',
    linesInMotion = 'linesInMotion',
    moroccan = 'moroccan',
    morphingDiamonds = 'morphingDiamonds',
    rails = 'rails',
    skulls = 'skulls',
    squaresInSquares = 'squaresInSquares',
    stripes = 'stripes',
    zigZag = 'zigZag',
    aztec = 'aztec',
    bankNote = 'bankNote',
    boxes = 'boxes',
    circlesAndSquares = 'circlesAndSquares',
    circuitBoard = 'circuitBoard',
    curtain = 'curtain',
    diagonalLines = 'diagonalLines',
    endlessClouds = 'endlessClouds',
    eyes = 'eyes',
    floorTile = 'floorTile',
    groovy = 'groovy',
    intersectingCircles = 'intersectingCircles',
    melt = 'melt',
    overlappingDiamonds = 'overlappingDiamonds',
    parkayFloor = 'parkayFloor',
    pixelDots = 'pixelDots',
    signal = 'signal',
    slantedStars = 'slantedStars',
    wallpaper = 'wallpaper',
}

export enum LanguagePattern {
    arabic = 'modern-standard-arabic-word-of-the-day',
    balinese = 'balinesewordoftheday',
    mandarin_chinese = 'mandarin-chinese-word-of-the-day',
    dari = 'dari-word-of-the-day',
    dutch = 'dutch-word-of-the-day',
    portuguese_english = 'english-word-of-the-day-for-portuguese',
    spanish_english = 'english-word-of-the-day-for-spanish',
    esperanto = 'esperanto-word-of-the-day',
    french = 'french-word-of-the-day',
    german = 'german-word-of-the-day',
    hebrew = 'hebrew-word-of-the-day',
    hindi = 'hindi-word-of-the-day',
    indonesian = 'indonesian-word-of-the-day',
    irish = 'irish-word-of-the-day',
    italian = 'italian-word-of-the-day',
    japanese = 'japanese-word-of-the-day',
    korean = 'korean-word-of-the-day',
    latin = 'latin-word-of-the-day',
    norwegian = 'norwegian-word-of-the-day',
    pashto = 'pashto-word-of-the-day',
    polish = 'polish-word-of-the-day',
    brazilian = 'brazilian-portuguese-word-of-the-day',
    russian = 'russian-word-of-the-day',
    spanish = 'spanish-word-of-the-day',
    swedish = 'swedish-word-of-the-day',
    turkish = 'turkish-word-of-the-day',
    urdu = 'urdu-word-of-the-day',
}

export interface ParsedRequest {
    /**
     * Requested language pattern
     */
    language?: LanguagePattern | undefined
    /**
     * Requested image width
     */
    width?: string | undefined
    /**
     * Requested image height
     */
    height?: string | undefined
    /**
     * Requested image color pattern
     */
    colorPattern?: string | string[]
    /**
     * Requested image font color
     */
    fontColor?: string | string[]
    /**
     * Requested image background color
     */
    backgroundColor?: string | string[]
    /**
     * Image background pattern
     */
    pattern?: HeroPattern | undefined
    /**
     * Image background opacity
     */
    opacity?: string | string[]
}

export interface RouteOptions {
    /**
     * Base url to fetch feeds from
     */
    readonly url: string
}

export interface ColorOptions {
    /**
     * Image color pattern
     */
    readonly colorPattern: string | string[]
    /**
     * Image font color
     */
    readonly fontColor: string | string[]
    /**
     * Image background color
     */
    readonly backgroundColor: string | string[]
    /**
     * Image color opacity
     */
    readonly opacity: string | string[]
    /**
     * Image background pattern
     */
    readonly pattern?: string
}

export interface ImageOptions {
    /**
     * Image width
     */
    readonly width: string
    /**
     * Image height
     */
    readonly height: string
}

export interface ConfigOptions {
    /**
     * Route configuration options
     */
    readonly routeOptions: RouteOptions
    /**
     * Color configuration options
     */
    readonly colorOptions: ColorOptions
    /**
     * Image configuration options
     */
    readonly imageOptions: ImageOptions
}

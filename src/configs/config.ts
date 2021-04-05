import { Profile } from '../../typings/enum-types'
import { ProfileOptions } from '../../typings/domain-types'

import { IMAGE_OPTIONS, OUTPUT_OPTIONS } from '../constants/constants'

/**
 * ConfigRecord
 * @desc Type representing profile config options
 */
export type ConfigRecord = Record<Profile, ProfileOptions>

/**
 * Configuration options
 */
export const CONFIG: Readonly<ConfigRecord> = {
    dev: {
        queryOptions: {
            baseUrl: 'https://feeds.feedblitz.com/',
        },
        imageOptions: IMAGE_OPTIONS,
        outputOptions: OUTPUT_OPTIONS,
    },
    prod: {
        queryOptions: {
            baseUrl: 'https://feeds.feedblitz.com/',
        },
        imageOptions: IMAGE_OPTIONS,
        outputOptions: OUTPUT_OPTIONS,
    },
    test: {
        queryOptions: {
            baseUrl: 'https://feeds.feedblitz.com/',
        },
        imageOptions: IMAGE_OPTIONS,
        outputOptions: OUTPUT_OPTIONS,
    },
}

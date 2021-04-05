/**
 * Optional
 * @desc Type representing [`Optional`] in TypeScript: `T | null | undefined`
 */
export type Optional<T> = T | null | undefined
//--------------------------------------------------------------------------------------------------
/**
 * NameValue
 * @desc NameValue type with {@link PropertyKey} name and {@Link V} value properties
 */
export type NameValue<T extends PropertyKey, V> = { name: T; value: V }

/**
 * StringNameValue
 * @desc NameValue type with {@link string} name and value properties
 */
export type StringNameValue = NameValue<string, string>
//--------------------------------------------------------------------------------------------------
/**
 * Processor
 * @desc Type representing processor function type in TypeScript
 * @example
 *   type Processor = (v) => return new String(v)
 */
export type Processor<T, V> = (v: T) => V
//--------------------------------------------------------------------------------------------------
/**
 * BiConsumer
 * @desc Type representing binary consumer function type in TypeScript
 * @example
 *   type BiConsumer = (v1, v2) => console.log(v1 + ":" + v2)
 */
export type BiConsumer<T, V> = (v1: T, v2: V) => void
//--------------------------------------------------------------------------------------------------

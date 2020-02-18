// tile.ts
/**
 * Definition of Tile
 * 
 * authors: Michael K., Alexandru C.
 * @packageDocumentation
 */

/**
 * Tile interface.
 * - `position`: Numerical position on board (in range 1-40)
 */
interface Tile { position: number }

/**
 * Corner types. These are the four unique corner tiles on the boeard:
 */
enum CornerType { GO, JAIL, PARKING, GO_TO_JAIL }

/**
 * Corner wrapper
 * - type: [[CornerType]]
 */
interface Corner { type: CornerType }

/**
 * CornerTile type. [[Corner]] & [[Tile]] composition 
 */
type CornerTile = Corner & Tile

/**
 * Tax
 * - `amount`: Amount of tax to be paid when landing on this tile
 */
interface Tax { readonly amount: number }
/**
 * TaxTile type. [[Tax]] & [[Tile]] composition
 */
type TaxTile = Tax & Tile

/**
 * Property interface.
 * - `name`: property name
 * - `rentBase`: numerical value of base rent
 */
interface Property {
    readonly name: string
    readonly rentBase: number
}
/**
 * PropertyTile type. [[Property] & [[Tile]] composition.
 */
type PropertyTile = Property & Tile

/**
 * Estate property groups
 */
enum EstateGroup { BLUE, PURPLE, ORANGE, RED, YELLOW, GREEN, DEEP_BLUE }

/**
 * Estate type. Subtype of [[Property]]
 * - `group`: Estate property group the estate belongs to
 * - `rentOne`: Rent with one house
 * - `rentTwo`: Rent with two houses
 * - `rentThree`: Rent with three houses
 * - `rentFour`: Rent with four houses
 * - `rentHotel`: Rent with hotel
 * - `improvements`: Encoding range 1-5 of level of improvement currently on the property.
 * - `mortgageStatus`: Whether the property is currently mortgaged or not
 */
interface Estate extends Property {
    readonly group: EstateGroup
    readonly rentOne: number
    readonly rentTwo: number
    readonly rentThree: number
    readonly rentFour: number
    readonly rentHotel: number

    improvements: 1 | 2 | 3 | 4 | 5  // Convention - Hotel is represented by "5"
    mortgageStatus: boolean
}

/**
 * Utility type. Subtype of [[Property]]
 */
interface Utility extends Property { }

/**
 * Station type. Subtype of [[Property]]
 */
interface Station extends Property { }

export { Property, Tile }
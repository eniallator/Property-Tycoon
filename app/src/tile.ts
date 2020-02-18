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


enum CornerType { GO, JAIL, PARKING, GO_TO_JAIL }
interface Corner { type: CornerType }
/**
 * CornerTile type. [[Tile]] composition.
 * - `type`: { `GO`, `JAIL`, `PARKING`, `GO_TO_JAIL` }
 */
type CornerTile = Corner & Tile

interface Tax { readonly amount: number }
/**
 * TaxTile type. [[Tile]] composition.
 * - `amount`: numerical amount of tax to be paid
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
 * PropertyTile type. [[Tile]] composition.
 */
type PropertyTile = Property & Tile

enum EstateGroup { BLUE, PURPLE, ORANGE, RED, YELLOW, GREEN, DEEP_BLUE }
/**
 * 
 */
interface Estate extends Property {
    readonly group: EstateGroup
    readonly rentHouseOne: number
    readonly rentHouseTwo: number
    readonly rentHouseThree: number
    readonly rentHouseFour: number
    readonly rentHotel: number

    improvements: 1 | 2 | 3 | 4 | 5  // Convention - Hotel is represented by "5"
    mortgageStatus: boolean
}
interface Utility extends Property { }
interface Station extends Property { }

export { Property, Tile }
// tile.ts
/**
 * Definition of Tile
 * 
 * authors: Michael K., Alexandru C.
 * @packageDocumentation
 */


// Tile
/**
 * Tile interface.
 * - `position`: Numerical position on board = [1-40]
 */
interface Tile { position: number }


// Corner Tile
enum CornerType { GO, JAIL, PARKING, GO_TO_JAIL }
interface Corner { type: CornerType }
/**
 * CornerTile type. [[Property]] and [[Tile]] composition.
 * - `type`: { `GO`, `JAIL`, `PARKING`, `GO_TO_JAIL` }
 */
type CornerTile = Corner & Tile


// Tax Tile
interface Tax { readonly amount: number }
/**
 * TaxTile type. [[Property]] and [[Tile]] composition.
 * - `amount`: numerical amount of tax to be paid
 */
type TaxTile = Tax & Tile


// Property Tile
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
 * PropertyTile type. [[Property]] and [[Tile]] composition.
 */
type PropertyTile = Property & Tile


// Estate
enum EstateGroup { BLUE, PURPLE, ORANGE, RED, YELLOW, GREEN, DEEP_BLUE }
/**
 * Estate interface. Extends [[Property]].
 * - `group`: colour group
 * - `rent1House`: rent with one house improvement
 * - `rent2Houses`: rent with two houses improvement
 * - `rent3Houses`: rent with three houses improvement
 * - `rent4Houses`: rent with four houses improvement
 * - `rentHotel`: rent with hotel improvement
 * - `improvements`: the number of house improvements [1-5]. By convention, 5 represents a hotel
 * - `isMortgaged`: true if estate is mortgaged, false otherwise
 */
interface Estate extends Property {
    readonly group: EstateGroup
    readonly rent1House: number
    readonly rent2Houses: number
    readonly rent3Houses: number
    readonly rent4Houses: number
    readonly rentHotel: number

    improvements: 1 | 2 | 3 | 4 | 5
    isMortgaged: boolean
}


// Utility
/**
 * Utility interface. Extends [[Property]].
 */
interface Utility extends Property { }


// Station
/**
 * Station interface. Extends [[Property]].
 */
interface Station extends Property { }


export { Property, Tile }
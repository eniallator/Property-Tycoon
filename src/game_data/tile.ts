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
 * CornerTile type alias. [[Corner]] and [[Tile]] composition.
 */
type CornerTile = Corner & Tile


// Tax Tile
/**
 * Tax
 * - `amount`: Amount of tax to be paid when landing on this tile
 */
interface Tax { readonly amount: number }
/**
 * TaxTile type alias. [[Tax]] and [[Tile]] composition.
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
    readonly price: number
}
/**
 * PropertyTile type alias. [[Property] & [[Tile]] composition.
 */
type PropertyTile = Property & Tile


// Estate
/**
 * Estate property groups
 */
enum EstateGroup { BLUE, PURPLE, ORANGE, RED, YELLOW, GREEN, DEEP_BLUE }
/**
 * Estate type. Subtype of [[Property]]
 * - `group`: Estate property group the estate belongs to
 * - `rent(tier)`: Function taking improvement tier = [0-5] and returning the corresponding rent
 * - `improvements`: Encoding range = [0-5] improvement level currently on the property. By convention, 5 is a hotel.
 * - `isMortgaged`: true if property is mortgaged, false otherwise
 */
interface Estate extends Property {
    readonly group: EstateGroup
    readonly rent: (tier: 0 | 1 | 2 | 3 | 4 | 5) => number

    improvements: 0 | 1 | 2 | 3 | 4 | 5
    isMortgaged: boolean
}


// Utility
/**
 * Utility type. Subtype of [[Property]]
 * - `rent(tier)`: Function taking improvement tier = [1-2] and returning the corresponding rent
 */
interface Utility extends Property {
    readonly rent: (tier: 1 | 2) => number
}


// Station
/**
 * Station type. Subtype of [[Property]]
 * - `rent(tier)`: Function taking improvement tier = [1-4] and returning the corresponding rent
 */
interface Station extends Property {
    readonly rent: (tier: 1 | 2 | 3 | 4) => number
}


// Functions
namespace TileM {
    /**
     * Creates a new tle
     * @param position Tile's position
     */
    export function createTile(position: number): Tile {
        return {
            position: position
        }
    }
}

export {
    Tile, TileM,
    Property
}
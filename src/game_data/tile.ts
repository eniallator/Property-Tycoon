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
interface Tile { 
    position: number,
    tileType: TileType
 }

enum TileType {
    CHANCE,
    CORNER,
    TAX,
    ESTATE,
    STATION,
    UTILITY
}


// Chance Tile
/**
 * Chance types
 */
enum ChanceType { OPPORTUNITY_KNOCK, POT_LUCK }
/**
 * Chance wrapper
 * - type: [[ChanceType]]
 */
interface Chance { chanceType: ChanceType }
/**
 * ChanceTile type alias. [[Chance]] and [[Tile]] composition.
 */
type ChanceTile = Chance & Tile


// Corner Tile
/**
 * Corner types. These are the four unique corner tiles on the board
 */
enum CornerType { GO, JAIL, PARKING, GO_TO_JAIL }
/**
 * Corner wrapper
 * - type: [[CornerType]]
 */
interface Corner { cornerType: CornerType }
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
 * - `price`: property price
 */
interface Property {
    readonly name: string
    readonly price: number
}
/**
 * PropertyTile type alias. [[Property] & [[Tile]] composition.
 * This type is redundant
 */
// type PropertyTile = Property & Tile


// Estate
/**
 * Estate property groups
 */
enum EstateGroup { BROWN, BLUE, PURPLE, ORANGE, RED, YELLOW, GREEN, DEEP_BLUE }
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
/**
 * EstateTile type alias. [[Estate] & [[Tile]] composition.
 */
type EstateTile = Estate & Tile

// Utility
/**
 * Utility type. Subtype of [[Property]]
 * - `rent(tier)`: Function taking improvement tier = [1-2] and returning the corresponding rent
 */
interface Utility extends Property {
    readonly rent: (tier: 1 | 2) => number
}
/**
 * UtilityTile type alias. [[Utility] & [[Tile]] composition.
 */
type UtilityTile = Utility & Tile

// Station
/**
 * Station type. Subtype of [[Property]]
 * - `rent(tier)`: Function taking improvement tier = [1-4] and returning the corresponding rent
 */
interface Station extends Property {
    readonly rent: (tier: 1 | 2 | 3 | 4) => number
}
/**
 * StationTile type alias. [[Station] & [[Tile]] composition.
 */
type StationTile = Station & Tile



// Functions
namespace TileM {
    export function createChanceTile(position: number, type: ChanceType): ChanceTile {
        return { 
            position: position,
            tileType: TileType.CHANCE,
            chanceType: type
        }
    }

    export function createCornerTile(position: number, type: CornerType): CornerTile {
        return { 
            position: position,
            tileType: TileType.CORNER,
            cornerType: type 
        }
    }

    export function createTaxTile(position: number, amount: number): TaxTile {
        return { 
            position: position,
            tileType: TileType.TAX,
            amount: amount
        }
    }

    // export function createPropertyTile(position: number, name: string, price: number): PropertyTile { // Redundant Function
    //    return { position: position, name: name, price: price }
    // }

    export function createEstateTile(position: number, name: string, price: number, group: EstateGroup, rents: Array<number>, improvement: 0 | 1 | 2 | 3 | 4 | 5, isMortgaged: boolean): EstateTile {
        return { 
            position: position,
            tileType: TileType.ESTATE,
            name: name, 
            price: price, 
            group: group, 
            rent: (tier) => rents[tier], 
            improvements: improvement, 
            isMortgaged: false 
        }
    }

    export function createUtilityTile(position: number, name: string, price: number, rent: 1 | 2): UtilityTile {
        return { 
            position: position,
            tileType: TileType.UTILITY,

            name: name, 
            price: price, 
            rent: (tier) => rent[tier] }
    }

    export function createStationTile(position: number, name: string, price: number, rent: 1 | 2 | 3 | 4): StationTile {
        return { 
            position: position,
            tileType: TileType.STATION,

            name: name, 
            price: price, 
            rent: (tier) => rent[tier] }
    }

    // Useful type guards for distinguishing tiles
    export function isChance(t: Tile): t is ChanceTile {
        return t.tileType == TileType.CHANCE
    }

    export function isCorner(t: Tile): t is CornerTile {
        return t.tileType == TileType.CORNER
    }

    export function isTax(t: Tile): t is TaxTile {
        return t.tileType == TileType.TAX
    }

    export function isEstate(t: Tile): t is EstateTile {
        return t.tileType == TileType.ESTATE
    }

    export function isUtility(t: Tile): t is UtilityTile {
        return t.tileType == TileType.UTILITY
    }

    export function isStation(t: Tile): t is StationTile {
        return t.tileType == TileType.STATION
    }
}

export {
    // General
    Tile, TileType,
    TileM,
    Property,

    // Enums
    CornerType,
    ChanceType,
    EstateGroup,

    // Concrete Tiles
    StationTile,
    UtilityTile,
    EstateTile,
    TaxTile,
    CornerTile,
    ChanceTile
}
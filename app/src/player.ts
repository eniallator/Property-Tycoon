// player.ts
/**
 * Definition of Player
 * 
 * authors: Michael K., Alexandru C.
 * @packageDocumentation
 */

import { Property } from './tile'


// Player
enum Token { BOOT, SMARTPHONE, GOBLET, HATSTAND, CAT, SPOON }
/**
 * Player interface.
 * - `id`: numerical id = [1-6], unique
 * - `token`: {`BOOT`, `SMARTPHONE`, `GOBLET`, `HATSTAND`, `CAT`, `SPOON`}, unique
 * - `position`: tile position currently on = [1-40]
 * - `cash`: amout of cash
 * - `properties`: collection of owned properties
 * - `inJail`: true if player is in jail, false othwewise.
 * - `outOfJailCard`
 */
interface Player {
    readonly id: 1 | 2 | 3 | 4 | 5 | 6
    readonly token: Token

    position: number
    cash: number
    properties: Set<Property>
    inJail: boolean
    outOfJailCard: string  //TODO: Change to collection?
}


export { Player, Token }
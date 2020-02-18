// player.ts
/**
 * Definition of Player
 * 
 * authors: Michael K., Alexandru C.
 * @packageDocumentation
 */

import { Property } from './tile'

/**
 * Players avatar when moving around the board:
 * - `BOOT`
 * - `SMARTPHONE`
 * - `GOBLET`
 * - `HATSTAND`
 * - `CAT`
 * - `SPOON`
 */
enum Token { BOOT, SMARTPHONE, GOBLET, HATSTAND, CAT, SPOON }

/**
 * Player interface. Represents current player's state at any point in the game
 * - `id`: number identifying player
 * - `token`: token representing player
 * - `position`: numerical index of player's current position on board
 * - `cash`: numerical current cash value held by player
 * - `properties`: collection of properties owned by player
 * - `inJail`: whether player is in jail or not
 * - `outOfJailCard`: TODO
 */
interface Player {
    readonly id: number
    readonly token: Token

    position: number // 1 - 40 (the position of the tile they're on)
    cash: number
    properties: Array<Property>
    inJail: boolean
    outOfJailCard: string  //TODO: SHOULD BE CHANGED TO A BOOLEAN IF PLAYER CAN ONLY HAVE ONE GETOUTOFJAIL
}

export { Player, Token }
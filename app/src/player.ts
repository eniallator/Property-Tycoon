// player.ts
/**
 * Definition of Player
 * 
 * authors: Michael K., Alexandru C.
 * @packageDocumentation
 */

import { Property } from './tile'

// Tokens
enum Token { BOOT, SMARTPHONE, GOBLET, HATSTAND, CAT, SPOON }

// Player
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
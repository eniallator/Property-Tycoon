// player.ts
/**
 * Definition of Player
 * 
 * authors: Michael K., Alexandru C.
 * @packageDocumentation
 */

import { Property } from './tile'
import Util from '../util'


// Token
/**
 * Players avatar when moving around the board:
 */
enum Token { BOOT, SMARTPHONE, GOBLET, HATSTAND, CAT, SPOON }


// Player
/**
 * Player interface. Represents current player's state at any point in the game
 * - `id`: numerical id = [1-6], unique
 * - `token`: [[Token]] representing player, unique
 * - `position`: [[Tile]] position currently on = [1-40]
 * - `cash`: numerical current cash value held by player
 * - `properties`: collection of owned properties
 * - `inJail`: true if player is in jail, false othwewise.
 * - `outOfJailCard`: TODO
 */
interface Player {
    /*
    * Player's [[Token]]
    */
    readonly token: Token

    position: number // 1 - 40 (the position of the tile they're on)
    cash: number
    properties: Set<Property>
    inJail: boolean
    outOfJailCard: string  //TODO: Change to collection?
}


// Utility functions and types
namespace PlayerM {

    export function createPlayer(token: Token, isHuman: boolean, initialCash: number = 1500): Player {
        return {
            token: token,
            position: 0,
            cash: initialCash,
            properties: new Set<Property>(),
            inJail: false,
            outOfJailCard: '' // TODO
        }
    }

    /**
     * Moves player position by `n` steps
     * @param n Number of steps to move
     * @param player Player whose position will be moved
     */
    export function move(n: number, player: Player): Player {
        const updates = { position: n }
        return Util.update(player, updates)
    }
}

export {
    Token,
    Player,
    PlayerM
}
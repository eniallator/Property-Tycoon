// player.ts
/**
 * Definition of Player
 * 
 * authors: Michael K., Alexandru C.
 * @packageDocumentation
 */

import { Property } from './tile'


// Token
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
    readonly id: 1 | 2 | 3 | 4 | 5 | 6
    readonly token: Token

    position: number // 1 - 40 (the position of the tile they're on)
    cash: number
    properties: Array<Property> // TODO: Change to a Set?
    inJail: boolean
    outOfJailCard: string  //TODO: Change to collection?
}

// Functions for manipulating players
namespace PlayerUtil {
    /**
     * Moves player position by `n` steps
     * @param n Number of steps to move
     * @param player Player whose position will be moved
     */
    export function move(n: number, player: Player): Player {
        const { position } = player
        return { position: position + n, ...player }
    }
}

export { Player, Token, PlayerUtil }
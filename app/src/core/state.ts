// game-state.ts
/**
 * Definition of Game State
 * 
 * authors: Michael K., Alexandru C.
 * @packageDocumentation
 */

import { Player, PlayerUtil } from './player'
import { Property } from './tile'
//import { Card } from './card'  // TODO: Does Card need to be in its own file?

// Game Phase
/**
 * Represents current event the game is in:
 * - `PLAYER_MOVE`: A player is moving around the board
 * - `MAIN_MENU`: TODO 
 * - `PAUSE_MENU`: TODO
 * - `BUY_PROPERTY`: TODO
 * - `AUCTION`: TODO
 * - `PAY_RENT`: TODO
 * - `PROPERTY_MANAGEMENT`: TODO
 * - `END_GAME`: TODO
 */
enum GamePhase { PLAYER_MOVE }
type Card = string  // TODO: Placeholder for now. Will be imported from its own Card file


// Game State
/**
 * GameState
 * - `gamePhase`: Current phase the game is in
 * - `players`: Collection of players in the game
 * - `activePlayer`: Current active player
 * - `properties`: TODO
 * - `cards`: TODO
 * - `doubleCount`: Number of doubles thrown by player
 */
interface State {
    gamePhase: GamePhase
    players: Array<Player>
    activePlayer: Player
    properties: Array<Property>
    cards: Array<Card>
    doubleCount: 0 | 1 | 2
}

// Functions for manipulating the game state
namespace StateUtil {
    // Initialize new game state
    function createGameState(numPlayers: number): State {
        return undefined
    }

    // Move the player
    export function movePlayer(state: State, steps: number): State {
        const { activePlayer } = state
        let newPos = activePlayer.position + steps
        let cleanSteps: number

        if ( newPos < 0 ) {
            cleanSteps = 40 + newPos // TODO: Stop using 40 as a magic number
        } else {
            cleanSteps = newPos % 40
        }

        return { activePlayer: PlayerUtil.move(cleanSteps, activePlayer), ...state  }
    }
}

export { State, StateUtil }
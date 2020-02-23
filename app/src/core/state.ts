// game-state.ts
/**
 * Definition of Game State
 * 
 * authors: Michael K., Alexandru C.
 * @packageDocumentation
 */

import { Player, PlayerM } from './player'
import { Property } from './tile'
import Util from '../util'
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


// Module functions
namespace StateM {
    /**
     * Creates a new game state. TODO
     */
    export function createGameState(): State {
        return undefined // TODO
    }

    /**
     * Shifts game to next turn by moving to next player
     * @param state Current game state
     * @param steps 
     */

    export function nextTurn(state: State): State {
        return undefined // TODO
    }
    
    /**
     * Moves the current `activePlayer` `steps` steps around the board
     * @param state Current game state
     * @param steps Steps to move player
     */
    export function movePlayer(state: State, steps: number): State {
        const { activePlayer } = state
        let newPos = activePlayer.position + steps
        let actualSteps: number

        const numTiles = 40 // TODO: Stop using 40 as a magic number. Use number of tiles in state

        if ( newPos < 0 ) {
            actualSteps = numTiles + newPos         
        } else {
            actualSteps = newPos % numTiles
        }
        
        const updates = { activePlayer: PlayerM.move(actualSteps, activePlayer) }

        return Util.update(state, updates)
    }
}

export { State, StateM }
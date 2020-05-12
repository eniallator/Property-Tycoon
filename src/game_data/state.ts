// game-state.ts
/**
 * Definition of Game State
 * 
 * authors: Michael K., Alexandru C.
 * @packageDocumentation
 */

import { Player, Token, PlayerM } from './player'
import { Tile, TileM, Property } from './tile'
import Util from '../util'


// Game Phase
/**
 * Represents current event the game is in:
 * - `PLAYER_MOVE`: A player is moving around the board
 * - `MAIN_MENU`: Main menu 
 * - `PAUSE_MENU`: Game is paused
 * - `END_GAME`: Game ended
 * - `BUY_PROPERTY`: TODO
 * - `AUCTION`: TODO
 * - `PAY_RENT`: TODO
 * - `PROPERTY_MANAGEMENT`: TODO
 */
enum GamePhase {
    PLAYER_MOVE,
    MAIN_MENU,
    PAUSE_MENU,
    END_GAME
}


// Game State
/**
 * GameState
 * - `gamePhase`: Current phase the game is in
 * - `players`: Collection of players in the game. Optional (no players before a game starts)
 * - `activePlayer`: Current active player. Optional (no active players before a game starts)
 * - `tiles`: Collection of tiles. Optional (no tiles before a game starts)
 * - `properties`: TODO
 * - `cards`: TODO
 * - `doubleCount`: Number of doubles thrown by player
 */
interface State {
    /**
     * <div style="color: red;">
     * WARNING: GamePhase is depreceated. Use the [[Response]] API instead
     * </div>
     */
    gamePhase: GamePhase
    activePlayer: number,
    players: Array<Player>
    tiles: Array<Tile>
    doubleCount: number
}


/**
 * Useful functions for transforming nested data within [[State]]
 */
namespace StateM {
    // Initialize Game State
    export function initialState(): State {
        return { 
            gamePhase: GamePhase.MAIN_MENU,
            activePlayer: 0,
            players: [],
            tiles: [],
            doubleCount: 0
         }
    }

    // Utility functions for nested data transformation within State
    export function mapPlayer(state: State, ix: number, f: (p: Player) => Player): State {
        const players = [...state.players]
        const target = state.players[ix]
        const newPlayer = f(target)
        
        players[ix] = newPlayer

        return Util.update(state, { players: players })
    }

    export function mapActivePlayer(state: State, f: (p: Player) => Player): State {
        return mapPlayer(state, state.activePlayer, f)
    }
}

export { State, GamePhase, StateM }
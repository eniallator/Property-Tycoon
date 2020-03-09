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
 * - `MAIN_MENU`: TODO 
 * - `PAUSE_MENU`: TODO
 * - `BUY_PROPERTY`: TODO
 * - `AUCTION`: TODO
 * - `PAY_RENT`: TODO
 * - `PROPERTY_MANAGEMENT`: TODO
 * - `END_GAME`: TODO
 */
enum GamePhase { PLAYER_MOVE }


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
    activePlayer: 0 | 1 | 2 | 3 | 4 | 5,
    players: Array<Player>
    tiles: Array<Tile>
}


// Module functions
namespace StateM {
    /**
     * Creates a new game state.
     * TODO: 
     * - Update behaviour from sprint 1
     */
    export function createGameState(numTiles: number = 40): State {
        const tiles: Array<Tile> = []

        for (let i = 0; i < numTiles; ++i) {
            tiles.push(TileM.createTile(i))
        }

        const p1: Player = PlayerM.createPlayer(0, Token.BOOT)
        const p2: Player = PlayerM.createPlayer(1, Token.GOBLET)
        const p3: Player = PlayerM.createPlayer(2, Token.HATSTAND)
        const p4: Player = PlayerM.createPlayer(3, Token.SMARTPHONE)
        const p5: Player = PlayerM.createPlayer(4, Token.SPOON)
        const p6: Player = PlayerM.createPlayer(5, Token.CAT)

        const players: Array<Player> = [p1, p2, p3, p4, p5, p6]

        return {
            gamePhase: GamePhase.PLAYER_MOVE,
            activePlayer: 0,
            players: players,
            tiles: tiles
        }
    }

    /**
     * Shifts game to next turn by moving to next player
     * @param state Current game state
     */
    export function nextTurn(state: State): State {
        const { activePlayer, players } = state
        const numPlayers = players.length
        const updates = { activePlayer: (activePlayer + 1) % numPlayers }

        return Util.update(state, updates)
    }

    /**
     * Moves the current `activePlayer` `steps` steps around the board
     * @param state Current game state
     * @param steps Steps to move player
     */
    export function movePlayer(state: State, steps: number): State {
        const { activePlayer, players, tiles } = state
        const currentPlayer = players[activePlayer]
        const numTiles = tiles.length

        const newPos: number = currentPlayer.position + steps
        let actualPos: number

        if (newPos < 0) {
            actualPos = numTiles + (newPos % numTiles)
        } else {
            actualPos = newPos % numTiles
        }

        players[activePlayer] = PlayerM.move(actualPos, currentPlayer)

        const updates = { players: players }

        return Util.update(state, updates)
    }
}

export { State, GamePhase, StateM }
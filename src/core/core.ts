// core.ts
/**
 * Logic Core - The central unit of the entire engine. Receives game commands,
 * the previous game state, and outputs the new game state.
 * 
 * authors: Michael K., Alexandru C.
 * @packageDocumentation
 */

import { Player, PlayerM, Token } from '../game_data/player'
import { State, StateM, GamePhase } from '../game_data/state'
import { ImporterM } from '../game_data/importer'
import * as Cmd from '../game_data/command'
import Util from '../util'


/**
 * Core class. Responsible for mapping [[GameState]] to new GameState given some input commands
 */
class Core {
    constructor() { }

    /**
     * Update the game states with game logic, given some input commands
     * @param state Current game state to uodate
     * @param cmd Command to process and update state with respect to
     */
    update(state: State, cmd?: Cmd.Command<any>): State {
        const { type, data } = cmd
        let updates = {}

        switch (type) {
            case Cmd.CommandType.START_GAME:
                updates = CoreM.startGame(state)
                break
            case Cmd.CommandType.PAUSE_GAME:
                updates = CoreM.pauseGame(state)
                break
            case Cmd.CommandType.UNPAUSE_GAME:
                updates = CoreM.unpauseGame(state)
                break
            case Cmd.CommandType.MOVE_PLAYER:
                updates = CoreM.move(cmd.data as Cmd.MovePlayerData, state)
                break
            case Cmd.CommandType.END_GAME:
                updates = CoreM.endGame(state)
                break
           // case Cmd.CommandType.ROLL:
               // updates = CoreM.move(cmd.data as Cmd.RollData, state)
            //    break;
        }

        return Util.update(state, updates)
    }
}


// Module functions
namespace CoreM {
    /**
     * Starts a new game. (initialises all required data)
     */
    export function startGame(state: State): State {
        // Create new players
        // This version hard-codes 3 players by default, see the new API for the next version
        
        const players: Array<Player> = [
            PlayerM.createPlayer(Token.BOOT, true),
            PlayerM.createPlayer(Token.CAT, true),
            PlayerM.createPlayer(Token.GOBLET, true)
        ]
        
        const updates = {
            gamePhase: GamePhase.PLAYER_MOVE,
            players: players,
            tiles: ImporterM.getTiles,
            doubleCount: 0
        }

        return Util.update(state, updates)
    }

    /**
     * Pauses the game
     * @param state Current state of the game
     */
    export function pauseGame(state: State): State {
        const updates = { gamePhase: GamePhase.PAUSE_MENU }
        return Util.update(state, updates)
    }

    /**
     * Unpauses the game
     * @param state Current state of the game
     */
    export function unpauseGame(state: State): State {
        const updates = { gamePhase: GamePhase.PLAYER_MOVE }
        return Util.update(state, updates)
    }

    /**
     * Ends the game
     * @param state Current state of the game
     */
    export function endGame(state: State): State {
        const updates = { gamePhase: GamePhase.END_GAME }
        return Util.update(state, updates)
    }
 
    /**
     * Moves player on board according to dice rolled
     * @param data Data held by the roll command (value of two dice)
     * @param state Current state of the game
     */
    export function move(data: Cmd.MovePlayerData, state: State): State {
        const { steps } = data
        const { tiles, players } = state

        const numTiles = tiles.length

        const newState = StateM.mapActivePlayer(state, player => {
            let newPos = player.position + steps

            // Account for both forwards and backwards movememnt
            newPos = newPos < 0 ? numTiles + newPos : newPos % 40
            player.position = newPos

            return player
        })

        return newState
     }
}


export { Core }
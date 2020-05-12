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
import { Resp, RespM } from '../game_data/response'
import { IO } from '../io/io'

import Util from '../util'


/**
 * Core class. Responsible for mapping [[GameState]] to new GameState given some input commands
 */
class Core {
    io: IO

    constructor(io: IO) {
        this.io = io
     }

    /**
     * Update the game states with game logic, given some input commands
     * @param state Current game state to uodate
     * @param cmd Command to process and update state with respect to
     */
    update(state: State, cmd?: Cmd.Command<any>): [ State, RespM.RespBuffer ] {
        let updates = {}
        const respBuffer: RespM.RespBuffer = []

        if (!cmd) {
            // If in arcade mode, check if time is up
            // if the game is paused, stop the counter
            return [state, respBuffer]
        }

        const { type, data } = cmd
        
        switch (type) {
            case Cmd.CommandType.START_GAME:
                updates = CoreM.startGame(cmd.data.playerConfig as Array<Cmd.PlayerConfig>, state)
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

        return [ Util.update(state, updates), respBuffer ]
    }
}


// Module functions
namespace CoreM {
    /**
     * Starts a new game. (initialises all required data)
     */
    export function startGame(playerConfigs: Array<Cmd.PlayerConfig>, state: State): State {
        let config = [ ...playerConfigs ]

        // Ignore duplicate tokens
        let seen = {}
        config = config.filter(x => {
            let token = x.token.toString()
            return seen.hasOwnProperty(token) ? false : ( seen[token] = true )
        })

        // Create new players
        const players = config.map(playerConfig => PlayerM.createPlayer(playerConfig.token, playerConfig.isHuman))
        
        const updates = {
            gamePhase: GamePhase.PLAYER_MOVE,
            players: players,
            tiles: ImporterM.getTiles(),
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

        const numTiles: number = tiles.length

        const newState: State = StateM.mapActivePlayer(state, player => {
            let newPos = player.position + steps

            // Account for both forwards and backwards movememnt
            newPos = newPos < 0 ? numTiles + newPos : newPos % 40
            player.position = newPos

            return player
        })

        return newState
     }

     /**
      * Response API - Currently in alpha
      */
     namespace v2 {
         /**
          * Start a new game with the given configuration parameters. Returns a state
          * with all fields initialized for a new game
          * @param data Configuration data
          * @param state State to update
          */
         export function startGame(data: Cmd.StartGameData, state: State, resp: RespM.RespBuffer): State  {
            const tiles = ImporterM.getTiles()

            let players: Array<Player> = []
            data.playerConfig.forEach(
                ({ token, isHuman }) => players.push(PlayerM.createPlayer(token, isHuman))
            )

            // Push Begin Game response into response buffer
            resp.push( RespM.beginGame() )
            
            // Update state
            const updates = {
                // GamePhase is deprecated in this API
                gamePhase: GamePhase.PLAYER_MOVE,

                activePlayer: 0,
                players: players,
                tiles: tiles,
                doubleCount: 0
            }

            return Util.update(state, updates)
         }
     }
}


export { Core, CoreM }
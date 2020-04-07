// core.ts
/**
 * Logic Core - The central unit of the entire engine. Receives game commands,
 * the previous game state, and outputs the new game state.
 * 
 * authors: Michael K., Alexandru C.
 * @packageDocumentation
 */

import { State, StateM } from '../game_data/state'
import * as Cmd from '../game_data/command'
import Util from '../util'
import { AgentM } from '../core/agent'

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
    update(state: State, cmd?: Cmd.Command): State {
        if (!cmd) {
            // If in arcade mode, increment timer
            return state
        }

        // TODO @alexandru
        // TODO: What happens if a command was already given?
        if (state.players && state.activePlayer && state.players[state.activePlayer].isAgent) {
            cmd = AgentM.nextCommand(state)
        }

        const { type, data } = cmd
        let updates = {}

        switch (type) {
            case Cmd.CommandType.START_GAME:
                // updates = CoreM.startGame(cmd.data as Cmd.StartGameData) //TODO @alexandru
                updates = CoreM.startGame()
                break;
            case Cmd.CommandType.PAUSE_GAME:
                updates = CoreM.pauseGame(state)
                break;
            case Cmd.CommandType.UNPAUSE_GAME:
                updates = CoreM.unpauseGame(state)
                break;
            case Cmd.CommandType.END_GAME:
                updates = CoreM.endGame(state)
                break;
            case Cmd.CommandType.ROLL:
                updates = CoreM.move(cmd.data as Cmd.RollData, state)
                break;
        }

        return Util.update(state, updates)
    }
}


// Module functions
namespace CoreM {
    /**
     * Starts a new game. (initialises all required data)
     */
    export function startGame(): State {
        return StateM.createNewGameState()
    }
    // TODO @alexandru
    // export function startGame(data: Cmd.StartGameData): State {
    //     return StateM.createNewGameState(data)
    // }

    /**
     * Pauses the game
     * @param state Current state of the game
     */
    export function pauseGame(state: State): State {
        return StateM.pauseGame(state)
    }

    /**
     * Unpauses the game
     * @param state Current state of the game
     */
    export function unpauseGame(state: State): State {
        return StateM.unpauseGame(state)
    }

    /**
     * Ends the game
     * @param state Current state of the game
     */
    export function endGame(state: State): State {
        return StateM.endGame(state)
    }

    /**
     * Moves player on board according to dice rolled
     * @param data Data held by the roll command (value of two dice)
     * @param state Current state of the game
     */
    export function move(data: Cmd.RollData, state: State): State {
        const { dice: [die1, die2] } = data
        const { activePlayer } = state

        return StateM.movePlayer(state, die1 + die2)
    }
}


export { Core }
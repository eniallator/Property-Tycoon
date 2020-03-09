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
    update(state: State, cmd: Cmd.Command): State {
        const { type, data } = cmd
        let updates = {}

        switch (type) {
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
// io.ts
/**
 * Input/Output module - The communication bus between the game core and the renderer.
 * 
 * authors: Michael K., Alexandru C.
 * @packageDocumentation
 */

import { State, StateM } from "../game_data/state"
import { Command, CommandType, RollData } from "../game_data/command"


/**
 * TODO
 */
class IO {
    command: Command
    state: State
    constructor() {
        this.command = {
            type: CommandType.ROLL,
            data: {
                dice: [1, 1]
            }
        }
        this.state = StateM.createGameState()
    }

    getCommand() {
        return this.command
    }

    /**
     * 
     * @param command 
     */
    sendCommand(command: Command) {
        this.command = command
    }

    getState() {
        return this.state
    }

    sendState(state: State) {
        this.state = state
    }
}


export { IO }
// io.ts
/**
 * Input/Output module - The communication bus between the game core and the renderer.
 * 
 * authors: Michael K., Alexandru C.
 * @packageDocumentation
 */

import { State } from "../game_data/state"
import { Command } from "../game_data/command"


/**
 * TODO
 */
class IO {
    command: Command
    state: State
    constructor() { }

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
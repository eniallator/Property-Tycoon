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

    /**
     * Read Game Command from IO Bus
     */
    getCommand() {
        return this.command
    }

    /**
     * Push Game Command onto IO Bus
     * @param command 
     */
    sendCommand(command: Command) {
        this.command = command
    }

    /**
     * Read Game State from IO Bus
     */
    getState() {
        return this.state
    }

    /**
     * Push Game State onto IO Bus
     * @param state Game State
     */
    sendState(state: State) {
        this.state = state
    }
}


export { IO }
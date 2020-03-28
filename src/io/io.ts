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


    // MESSAGE PASSING
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

    
    // LOGGING
    // -- SYSTEM LOGS
    /**
     * Log system message
     * @param sys Subsystem making the log
     * @param lvl Log level
     * @param msg Message content
     */
    logMsg(sys: SysType, lvl: LogLevel, msg: Msg) { /* .. */ }

    /**
     * Log info-level system message
     * @param sys Subsystem making the log
     * @param msg Message content
     */
    logInfo(sys: SysType, msg: Msg) { 
        this.logMsg(sys, LogLevel.INFO, msg) 
    }

    /**
     * Log WARNING-level system message
     * @param sys Subsystem making the log
     * @param msg Message content
     */
    logWarning(sys: SysType, msg: Msg) { 
        this.logMsg(sys, LogLevel.WARNING, msg) 
    }

    /**
     * Log ERROR-level system message
     * @param sys Subsystem making the log
     * @param msg Message content
     */
    logError(sys: SysType, msg: Msg) { 
        this.logMsg(sys, LogLevel.ERROR, msg) 
    }
}

type Msg = string

/**
 * Priority level of log messages
 */
enum LogLevel { INFO, WARNING, ERROR }

/**
 * Type of system making calls to the logger
 */
enum SysType { CORE, RENDERER, ENGINE, IO }


export { IO, SysType }
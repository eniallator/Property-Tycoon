// io.ts
/**
 * Input/Output module - The communication bus between the game core and the renderer.
 * 
 * authors: Michael K., Alexandru C.
 * @packageDocumentation
 */

import { State } from "../game_data/state"
import { Command } from "../game_data/command"
import fs from 'fs'


/**
 * IO Bus
 * Responsible for both transmitting messages back and forth between engine modules, and logging both game and srctem messages
 */
class IO {
    command: Command
    state: State

    // Logs
    sysLogs: Array<SysLog>
    gameLogs: Array<Log>

    constructor() { 
        fs.writeFileSync('./log', 'TEST')
    }


    // MESSAGE PASSING
    /**
     * Read Game Command from IO Bus
     */
    getCommand() {
        console.log("Fetching Command")
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
     * Log info-level system message
     * @param src Source of log
     * @param msg Message content
     */
    logInfo(src: LogSource, msg: Msg) { 
        this.logMsg(src, LogLevel.INFO, msg) 
    }

    /**
     * Log WARNING-level system message
     * @param src Source of log
     * @param msg Message content
     * 
     */
    logWarning(src: LogSource, msg: Msg) { 
        this.logMsg(src, LogLevel.WARNING, msg) 
    }

    /**
     * Log ERROR-level system message
     * @param src Source of log
     * @param msg Message content
     */
    logError(src: LogSource, msg: Msg) { 
        this.logMsg(src, LogLevel.ERROR, msg) 
    }

    /**
     * Log system message - Helper
     * @param src Source of log
     * @param lvl Log level
     * @param msg Message content
     */
    private logMsg(src: LogSource, lvl: LogLevel, msg: Msg) {  
        const log: SysLog = { source: src, level: lvl, msg: msg }
        this.sysLogs.unshift(log)
    }

}

type Msg = string

/**
 * Priority level of log messages
 */
enum LogLevel { INFO, WARNING, ERROR }

/**
 * Type of srctem making calls to the logger
 */
enum LogSource { CORE, RENDERER, ENGINE, IO, GAME }

interface Log {
    source: LogSource,
    msg: Msg
}

interface SysLog extends Log {
    level: LogLevel
}


export { IO, LogSource }
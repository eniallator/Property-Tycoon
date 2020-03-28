// io.ts
/**
 * Input/Output module - The communication bus between the game core and the renderer.
 * 
 * authors: Michael K., Alexandru C.
 * @packageDocumentation
 */

import { State } from "../game_data/state"
import { Command, CommandM, CommandType } from "../game_data/command"


/**
 * IO Bus
 * Responsible for both transmitting messages back and forth between engine modules, and logging both game and srctem messages
 */
class IO {
    command: Command
    state: State

    // Logs
    // Config
    logCmd: boolean
    logSys: boolean

    sysLogs: Array<SysLog>
    cmdLogs: Array<Command>

    /**
     * Initialize IO module
     * @param logSys System log flag - Default true
     * @param logCmd Game command log flag - Default false
     */
    constructor(logSys: boolean = true, logCmd: boolean = true) { 
        // Not used for now
        this.logCmd = logCmd
        this.logSys = logSys

        this.sysLogs = []
        this.cmdLogs = []

        this.logInfo(
            LogSource.IO,
            "Initializing IO Subsystem"
        )
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
        this.cmdLogs.push(command)
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
    writeSysLogs() {
        while (this.sysLogs.length > 0) {
            const log: SysLog = this.sysLogs.pop()
            console.log(renderSysLog(log))
        }
    }

    writeCmdLogs() {
        while (this.cmdLogs.length > 0) {
            const cmd: Command = this.cmdLogs.pop()
            console.log(`CMD :: ${CommandM.renderCommand(cmd)}`)
        }
    }

    // -- SYSTEM LOGS
    /**
     * Log info-level system message
     * @param src Source of log
     * @param msg Message content
     */
    logInfo(src: LogSource, msg: Msg) { 
        this.logSysMsg(src, LogLevel.INFO, msg) 
    }

    /**
     * Log WARNING-level system message
     * @param src Source of log
     * @param msg Message content
     * 
     */
    logWarning(src: LogSource, msg: Msg) { 
        this.logSysMsg(src, LogLevel.WARNING, msg) 
    }

    /**
     * Log ERROR-level system message
     * @param src Source of log
     * @param msg Message content
     */
    logError(src: LogSource, msg: Msg) { 
        this.logSysMsg(src, LogLevel.ERROR, msg) 
    }

    // Logging Helpers
    // Log System Message
    private logSysMsg(src: LogSource, lvl: LogLevel, msg: Msg) {  
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
 * Type of system making calls to the logger
 */
enum LogSource { CORE, RENDERER, ENGINE, IO, GAME }

/**
 * System Log
 */
interface SysLog {
    source: LogSource,
    level: LogLevel,
    msg: Msg
}


// Helper Functions
function renderSysLog(log: SysLog): string {
    const { source, level, msg } = log

    const levelStr: string = LogLevel[level]
    const sourceStr: string = LogSource[source]

    return `${levelStr} :: ${sourceStr}\n\t${msg}`
}

export { IO, LogSource }
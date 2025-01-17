// io.ts
/**
 * Input/Output module - The communication bus between the game core and the renderer.
 * 
 * authors: Michael K., Alexandru C.
 * @packageDocumentation
 */

import { State, StateM } from "../game_data/state"
import { Command, CommandM } from "../game_data/command"


/**
 * IO Bus
 * Responsible for both transmitting messages back and forth between engine 
 * modules, and logging both game and srctem messages
 */
class IO {
    commandBuffer: Command<any>
    stateBuffer: State

    // Logs
    // Config
    logCmd: boolean
    logSys: boolean

    sysLogs: Array<SysLog>
    cmdLogs: Array<Command<any>>

    /**
     * Initialize IO module
     * @param logSys System log flag - Default true
     * @param logCmd Game command log flag - Default true
     */
    constructor(logSys: boolean = true, logCmd: boolean = true) {
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
     * Read Game Command<any> from IO Bus
     */
    getCommand() {
        const cmd = this.commandBuffer
        this.commandBuffer = null
        return cmd
    }

    /**
     * Push Game Command<any> onto IO Bus
     * @param command 
     */
    sendCommand(command: Command<any>) {
        this.cmdLogs.push(command)
        this.commandBuffer = command
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
            const cmd: Command<any> = this.cmdLogs.pop()
            console.log(`CMD :: ${CommandM.renderCommand(cmd)}`)
        }
    }


    // -- SYSTEM LOGS
    /**
     * Log system message
     * @param sys Subsystem making the log
     * @param lvl Log level
     * @param msg Message content
     */
    logInfo(src: LogSource, msg: Msg) {
        this.logSysMsg(src, LogLevel.INFO, msg)
    }

    /**
     * Log info-level system message
     * @param sys Subsystem making the log
     * @param msg Message content
     */
    logWarning(src: LogSource, msg: Msg) {
        this.logSysMsg(src, LogLevel.WARNING, msg)
    }

    /**
     * Log WARNING-level system message
     * @param sys Subsystem making the log
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

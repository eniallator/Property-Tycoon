// engine.ts
/**
 * Engine module - Entry point
 * 
 * authors: Michael K., Alexandru C.
 * @packageDocumentation
 */

import { IO, LogSource } from '../io/io'
import { Core } from '../core/core'
import { Renderer } from '../renderer/renderer'


/**
 * Engine
 * Responsible for keeping the game pipeline running.
 */
class Engine {
    io: IO
    core: Core
    renderer: Renderer

    constructor() {
        this.io = new IO()

        this.io.logInfo(LogSource.CORE, "Initializing Logic Core Subsystem")
        this.core = new Core()

        this.io.logInfo(LogSource.RENDERER, "Initializing Renderer Subsystem")
        this.renderer = new Renderer(this.io)
    }

    update() {
        // IO gets the first given command. What happens when no command was given?
        const command = this.io.getCommand()

        // Remember the current game state
        const state = this.io.getState()

        // Pipe game command into core to yield a new game state
        let newState = state
        if (command)
            newState = this.core.update(state, command)

        // Update renderer with responses
        this.renderer.update(newState)
        
        // Write any logs produced
        this.io.writeSysLogs()
        this.io.writeCmdLogs()
    }
}

// Run the engine
const engine = new Engine()

// Run at FPS
const tickRate = 30 // In milliseconds
setInterval(() => engine.update(), tickRate)

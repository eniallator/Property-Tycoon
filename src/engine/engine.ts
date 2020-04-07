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
import { State, StateM } from '../game_data/state'


/**
 * Engine
 * Responsible for keeping the game pipeline running.
 */
class Engine {
    io: IO
    core: Core
    renderer: Renderer

    state: State

    constructor() {
        this.io = new IO()

        this.io.logInfo(LogSource.CORE, "Initializing Logic Core Subsystem")
        this.core = new Core(this.io)

        this.io.logInfo(LogSource.RENDERER, "Initializing Renderer Subsystem")
        this.renderer = new Renderer(this.io)

        this.state = StateM.initialState()        
    }

    update() {
        // Retrieve required data
        const command = this.io.getCommand()
        const state = this.state

        // Pipe game command into core to yield a new game state
        const [ newState, respBuffer ] = this.core.update(state, command)
        
        // Update renderer with responses
        this.renderer.update(respBuffer, newState)
        
        // Update current state
        this.state = newState

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

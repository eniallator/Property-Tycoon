// renderer.ts
/**
 * Renderer - 
 * 
 * authors: Michael K., Alexandru C., Niall C.C., Joe F.
 * @packageDocumentation
 */

import React, { Fragment } from "react"
import ReactDOM from "react-dom"
import { IO } from '../io/io'
import { State } from "../game_data/state"
import { GameGUI } from "./game_gui"


class Renderer {
    io:IO

    constructor(io: IO) {
        this.io = io
    }

    update(state: State) {
        ReactDOM.render(<GameGUI io = {this.io}></GameGUI>, document.getElementById("root") as HTMLElement)
        //ReactDOM.render(<Fragment><Board playerPos={0}/> <Roll io={this.io}></Roll> /></Fragment>, document.getElementById("root") as HTMLElement)
        
    }
}

export { Renderer }

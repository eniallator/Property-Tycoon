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
import { State, GamePhase } from "../game_data/state"
import { RespM } from "../game_data/response"
import { GameGUI } from "./game_gui"
import { MainMenuGUI } from "./main_menu_gui"
import { remote } from "electron"

class Renderer {
    io: IO

    constructor(io: IO) {
        this.io = io
    }

    update(resp: RespM.RespBuffer, state: State) {
        let baseEl: any
        switch (state.gamePhase) {
            case GamePhase.MAIN_MENU:
                baseEl = <MainMenuGUI io={this.io} state={state}></MainMenuGUI>
                break
            case GamePhase.END_GAME:
                remote.app.quit()
                break
            default:
                baseEl = <GameGUI io={this.io} state={state}></GameGUI>
        }
        ReactDOM.render(baseEl, document.getElementById("root") as HTMLElement)
    }
}


export { Renderer }

// main_menu_gui.tsx
/**
 * Renders everything needed for playing the game
 * 
 * authors: Niall C.C
 * @packageDocumentation
 */


import React, { Component, MouseEvent, RefObject } from "react"
import ReactDOM from "react-dom"
import { SendReceiveProps } from "./props"
import { CommandM, PlayerConfig } from "../game_data/command"
import { Token } from "../game_data/player"
import { PlayerCfgModal } from "./player_cfg_modal"

import "./menu.css"

type MainMenuState = {
    modal: RefObject<PlayerCfgModal>
}

/**
 * Main menu react component
 */
class MainMenuGUI extends Component<SendReceiveProps, MainMenuState> {
    constructor(props: SendReceiveProps) {
        super(props)
        this.state = {
            modal: React.createRef()
        }
    }

    startGame(players: Array<PlayerConfig>) {
        this.props.io.sendCommand(CommandM.startGame(players))
    }

    config(evt: MouseEvent) {
        this.state.modal.current.open(evt)
    }

    exit(evt: MouseEvent) {
        this.props.io.sendCommand(CommandM.endGame())
    }

    render() {
        return (
            <div className="wrapper">
                <PlayerCfgModal ref={ this.state.modal } start={ this.startGame.bind(this) }></PlayerCfgModal>
                <div className="main">
                    <div className="menu">
                        <h1>Property Tycoon</h1>
                        <ul>
                            <li><a className="button play" onClick={ this.config.bind(this) }>Play</a></li><br/>
                            <li><a className="button credits">Credits</a></li><br/>
                            <li><a className="button exit" onClick={ this.exit.bind(this) }>Exit</a></li><br/>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}


export { MainMenuGUI }

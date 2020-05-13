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

/**
 * State for the main menu
 * - `modal`: Reference to the config modal
 */
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

    /**
     * Sends a start game command
     *
     * @param players The player configuration
     */
    startGame(players: Array<PlayerConfig>) {
        if (players.length > 1) {
            this.props.io.sendCommand(CommandM.startGame(players))
            return true
        }
        return false
    }

    /**
     * Opens the config modal
     */
    config(evt?: MouseEvent) {
        this.state.modal.current.open()
    }

    /**
     * Exits the game
     */
    exit(evt?: MouseEvent) {
        this.props.io.sendCommand(CommandM.endGame())
    }

    render() {
        return (
            <div className="wrapper">
                <PlayerCfgModal ref={ this.state.modal } start={ this.startGame.bind(this) }></PlayerCfgModal>
                <div className="main">
                    <div className="menu">
                        <h1>Property Tycoon</h1>
                        <ul className="menu-list">
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

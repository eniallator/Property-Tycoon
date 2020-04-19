// main_menu_gui.tsx
/**
 * Renders everything needed for playing the game
 * 
 * authors: Niall C.C
 * @packageDocumentation
 */


import React, { Fragment, Component, MouseEvent } from "react"
import ReactDOM from "react-dom"
import "./monopoly.scss"
import { SendReceiveProps } from "./props"
import { CommandType, CommandM, PlayerConfig } from "../game_data/command"
import { Token } from "../game_data/player"

import "./menu.css"


type MainMenuState = {
    players: Array<PlayerConfig>
}

/**
 * Main menu react component
 */
class MainMenuGUI extends Component<SendReceiveProps, MainMenuState> {
    constructor(props: SendReceiveProps) {
        super(props)
        this.state = {
            players: [
                {
                    token: Token.BOOT,
                    isHuman: false
                }
            ]
        }
    }

    startGame(evt: MouseEvent) {
        this.props.io.sendCommand(CommandM.startGame(this.state.players))
    }

    exit(evt: MouseEvent) {
        this.props.io.sendCommand(CommandM.endGame())
    }

    render() {
        return (
            <div className="wrapper">
                <div className="main">
                    <div className="menu">
                        <h1>Property Tycoon</h1>
                        <ul>
                            <li><a className="button play" onClick={ this.startGame.bind(this) }>Start Game</a></li><br/>
                            <li><a className="button credits">Credits</a></li><br/>
                            <li><a className="button exit" onClick={ this.exit.bind(this) }>Exit</a></li><br/>
                        </ul>
                    </div>
                </div>
                <canvas id="canvas" width="800" height="480">
                    <p>Your browser does not support the required functionality to play Property Tycoon!</p>
                    <p>Please ensure your browser is updated or use <a href="www.google.com/chrome">Google Chrome</a> to play.</p>
                </canvas>
            </div>
        )
    }
}


export { MainMenuGUI }

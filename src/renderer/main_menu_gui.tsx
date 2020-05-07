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
import { CommandType } from "../game_data/command"

import "./menu.css"


/**
 * Main menu react component
 */
class MainMenuGUI extends Component<SendReceiveProps> {
    startGame(evt: MouseEvent) {
        this.props.io.sendCommand({
            type: CommandType.START_GAME
        })
    }

    exit(evt: MouseEvent) {
        this.props.io.sendCommand({
            type: CommandType.END_GAME
        })
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

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


class MainMenuGUI extends Component<SendReceiveProps> {
    startGame(evt: MouseEvent) {
        this.props.io.sendCommand({
            type: CommandType.START_GAME
        })
    }

    exit(evt: MouseEvent) {
        //TODO: Add functionality here
    }

    render() {
        return (
            <div className="table">
                <button onClick={ this.startGame }>Play</button>
                <button onClick={ this.exit }>Exit</button>
            </div>
        )
    }
}


export { MainMenuGUI }

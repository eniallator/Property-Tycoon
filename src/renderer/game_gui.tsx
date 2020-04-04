/**
 * Renders everything needed for playing the game
 * 
 * authors: Niall C.C
 * @packageDocumentation
 */


import React, { Fragment, Component } from "react"
import ReactDOM from "react-dom"
import { Board } from "./board"
import "./monopoly.scss"
import { Roll } from "./roll"

import { SendReceiveProps } from './props'


class GameGUI extends Component<SendReceiveProps> {
    render() {
        return (
            <div className="table">
                <Board state={ this.props.state }></Board>
                <Roll io={this.props.io} > </Roll>
            </div>
        )
    }
}


export { GameGUI }

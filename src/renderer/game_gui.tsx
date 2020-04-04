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
import { IO,IOProps } from '../io/io';


class GameGUI extends Component<IOProps> {
    render() {
        return (
            <div className="table">
                <Board io={this.props.io}></Board>
                <Roll io={this.props.io} > </Roll>
            </div>
        )
    }
}


export { GameGUI }

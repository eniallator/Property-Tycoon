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
import {PlayerGUI} from "../renderer/player";
import {Player} from "../game_data/player";


import { SendReceiveProps } from './props'


class GameGUI extends Component<SendReceiveProps> {
    render() {

        const playerArray: Array<any> = this.props.state.players.map(
            (player: Player) => <PlayerGUI player={ player }></PlayerGUI>
        )
        return (
            <div className="table">
                <Board state={ this.props.state } playerArray = {playerArray}></Board>
                <Roll io={this.props.io} > </Roll>
            </div>
        )
    }
}


export { GameGUI }

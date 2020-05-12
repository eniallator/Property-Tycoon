// game_gui.tsx
/**
 * Renders everything needed for playing the game
 * 
 * authors: Niall C.C
 * @packageDocumentation
 */


import React, { Fragment, Component } from "react"
import ReactDOM from "react-dom"
import { Board } from "./board"
import { PlayerActions } from "./player_actions"
import { PlayerInfoPane } from "./player_info_pane"

import "./monopoly.scss"

import { SendReceiveProps } from './props'


// GameGUI
/**
 * - Renders the current state of the board.
 */
class GameGUI extends Component<SendReceiveProps> {
    render() {

        return (
            <div className="game-display-panes">
                <div>
                    <Board state={ this.props.state }></Board>
                    <PlayerActions io={ this.props.io } state={ this.props.state }></PlayerActions>
                </div>
                <PlayerInfoPane state={ this.props.state }></PlayerInfoPane>
            </div>
        )
    }
}


export { GameGUI }

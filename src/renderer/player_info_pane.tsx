// game_gui.tsx
/**
 * Renders everything needed for playing the game
 * 
 * authors: Niall C.C
 * @packageDocumentation
 */


import React, { Fragment, Component } from "react"
import ReactDOM from "react-dom"
import { Player } from "../game_data/player"
import { tokenImageMap } from "./assets"

import "./monopoly.scss"


import { ReceiveProps } from './props'
// GameGUI
/**
 * - Renders the current state of the board.
 */

class PlayerInfoPane extends Component<ReceiveProps> {
    createPlayerComponent(player: Player, isSelected: boolean) {
        const properties = []
        for (let property of player.properties) {
            properties.push(
                <span>{ property.name }</span>
            )
        }

        return (
            <div className={"player-info" + (
                isSelected
                ? " player-info-selected"
                : ""
            )}>
                <div></div>
                <div className="flex-column">
                    <img className="player" src={ tokenImageMap[player.token] } />
                    <h2>{"$" + player.cash}</h2>
                </div>
                <div className="flex-column">
                    <h3>Properties</h3>
                    { properties }
                </div>
            </div>
        )
    }

    render() {
        let playerInfoComponents = this.props.state.players.map(
            (player, i) => this.createPlayerComponent(player, i === this.props.state.activePlayer)
        )

        return (
            <div className="player-info-pane">
                { playerInfoComponents }
            </div>
        )
    }
}


export { PlayerInfoPane }

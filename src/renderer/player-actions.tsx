// player-actions.ts
/**
 * A collection of actions that the player can do
 * 
 * authors: Michael K., Alexandru C., Niall C.C., Joe F.
 * @packageDocumentation
 */

import React, { Fragment, Component, MouseEvent } from "react"
import { CommandM } from "../game_data/command"
import { SendReceiveProps } from "./props"
import { Roll } from "./roll"

import "./monopoly.scss"


/**
 * Playr actions react component
 */
class PlayerActions extends Component<SendReceiveProps> {
    /**
     * Ends the current player's go
     */
    nextTurn(evt?: MouseEvent) {
        this.props.io.sendCommand(CommandM.nextTurn())
    }

    /**
     * Rolls the dice and sends a movePlayer command with the result of the roll
     */
    roll(evt?: MouseEvent) {
        const d1 = Math.ceil(Math.random() * 6)
        const d2 = Math.ceil(Math.random() * 6)

        const rollCmd = CommandM.movePlayer(d1 + d2)
        this.props.io.sendCommand(rollCmd)
    }

    buyProperty(evt?: MouseEvent) {
        const position = this.props.state.players[this.props.state.activePlayer].position
        this.props.io.sendCommand(CommandM.buy(position))
    }

    render() {
        return (
            <div className="actions-outer-div">
                <button className="actions-btn" onClick={ this.roll.bind(this) }>Roll Dice</button>
                <button className="actions-btn" onClick={ this.nextTurn.bind(this) }>Next Turn</button>
                <button className="actions-btn" onClick={ this.buyProperty.bind(this) }>Buy Property</button>
            </div>
        )
    }
}


export { PlayerActions }

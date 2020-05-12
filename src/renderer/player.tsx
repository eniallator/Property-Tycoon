// player.ts
/**
 * Player - 
 * 
 * authors: Michael K., Alexandru C., Niall C.C., Joe F.
 * @packageDocumentation
 */

import React, { Fragment, Component,MouseEvent } from "react";
import ReactDOM from "react-dom";
import { Player } from "../game_data/player";
import { tokenImageMap } from "./assets"

import "./monopoly.scss"


type playerProps = {
    player: Player
}

// PlayerGUI class
/**
 * - Token is rendered through the playerGUI class
 */
class PlayerGUI extends Component<playerProps>{
    constructor(props: playerProps) {
        super(props)
    }

    render() {
        return (
            <img className="player" src={ tokenImageMap[this.props.player.token] } />
        )
    }
}

export { PlayerGUI }

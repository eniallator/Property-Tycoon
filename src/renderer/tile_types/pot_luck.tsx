import React, { Fragment, Component } from "react"
import ReactDOM from "react-dom"
import { TileProps } from "../tile"

import "../monopoly.scss"

class PotLuckTile extends Component<TileProps> {
    render() {
        return (
            <div className="space potluck">
                <div className="container">
                    <div className="name">Pot Luck</div>
                    <i className="drawing fa fa-cube"></i>
                    <div className="instructions">Follow instructions on top card</div>
                </div>
            </div>
        )
    }
}

export { PotLuckTile }

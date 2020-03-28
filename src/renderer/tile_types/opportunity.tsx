import React, { Fragment, Component } from "react"
import ReactDOM from "react-dom"
import { TileProps } from "../tile"

import "../monopoly.scss"

class OpportunityTile extends Component<TileProps> {
    render() {
        return (
            <div className="space opportunity">
                <div className="container">
                    <div className="name">Opportunity Knocks</div>
                    <i className="drawing fa fa-question"></i>
                </div>
            </div>
        )
    }
}

export { OpportunityTile }

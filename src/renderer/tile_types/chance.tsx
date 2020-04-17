/**
 * Card type tile component
 * 
 * authors: Niall C.C
 * @packageDocumentation
 */


import React, { Fragment, Component } from "react"
import ReactDOM from "react-dom"
import { TileProps } from "../tile"
import { Tile, ChanceType }  from "../../game_data/tile"

import "../monopoly.scss"


interface ChanceTypeConfig {
    class: string,
    name: string,
    icon: string
}

// The default config interface for chance types
const chanceConfig: Record<ChanceType, ChanceTypeConfig> = {
    [ChanceType.POT_LUCK]: {
        class: "potluck",
        name: "Pot Luck",
        icon: "fa-cube"
    },
    [ChanceType.OPPORTUNITY_KNOCK]: {
        class: "opportunity",
        name: "Opportunity Knocks",
        icon: "fa-question"
    }
}


type ChanceTileProps = TileProps & {
    chanceType: ChanceType
}

class ChanceTileComponent extends Component<ChanceTileProps> {
    render() {
        const cfg: ChanceTypeConfig = chanceConfig[this.props.chanceType]
        return (
            <div className={ `space ${ cfg.class }`}>
                <div className="container">
                {this.props.playerArray}

                    <div className="name">{ cfg.name }</div>
                    <i className={`drawing fa ${ cfg.icon }` }></i>
                    <div className="instructions">Follow instructions on top card</div>
                </div>
            </div>
        )
    }
}


export { ChanceTileComponent }

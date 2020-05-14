// chance.tsx
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


/**
 * Config format for different chance types
 * - `class`: Outer div css class
 * - `name`: Name of the chance type
 * - `icon`: which font awesome icon to use
 */
interface ChanceTypeConfig {
    class: string,
    name: string,
    icon: string
}

/**
 * Default config interface for chance types
 */
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


/**
 * Props for the chance component
 * - `chanceType`: Which chance type it is
 */
type ChanceTileProps = TileProps & {
    chanceType: ChanceType
}

/**
 * Chance tile react component
 */
class ChanceTileComponent extends Component<ChanceTileProps> {
    render() {
        const cfg: ChanceTypeConfig = chanceConfig[this.props.chanceType]
        return (
            <div className={ `space ${ cfg.class }`}>
                <div className="container">
                    <div className="fit-outer">
                        <div className="players">
                            { this.props.playerArray }
                        </div>
                    </div>
                    <div className="name">{ cfg.name }</div>
                    <i className={`drawing fa ${ cfg.icon }` }></i>
                    <div className="instructions">Follow instructions on top card</div>
                </div>
            </div>
        )
    }
}


export { ChanceTileComponent }

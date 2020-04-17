/**
 * Utility type tile component
 * 
 * authors: Niall C.C
 * @packageDocumentation
 */


import React, { Fragment, Component } from "react"
import ReactDOM from "react-dom"
import { TileProps } from "../tile"

import "../monopoly.scss"


/**
 * Possible different types of utilities:
 * - `Electric`
 * - `Water`
 */
enum UtilityType {
    Electric,
    Water
}

interface UtilityTypeConfig {
    class: string,
    icon: string
}

// The default config interface for utility types
const UtilityConfig: Record<UtilityType, UtilityTypeConfig> = {
    [UtilityType.Electric]: {
        class: "electric-company",
        icon: "fa-lightbulb-o"
    },
    [UtilityType.Water]: {
        class: "waterworks",
        icon: "fa-tint"
    }
}

/**
 * Utility tile props:
 * - `name`: Name of the utility
 * - `price`: Price of the utility
 * - `utilityType`: Type of utility
 */
type UtilityTileComponentProps = TileProps & {
    name: string,
    price: number,
    utilityType: UtilityType
}

class UtilityTileComponent extends Component<UtilityTileComponentProps> {
    render() {
        const cfg: UtilityTypeConfig = UtilityConfig[this.props.utilityType]
        return (
            <div className={ `space utility ${ cfg.class }` }>
                <div className="container">
                {this.props.playerArray}
                    <div className="name">{ this.props.name }</div>
                    <div className={ `drawing fa ${ cfg.icon }` }></div>
                    <div className="price">Price £{ this.props.price }</div>
                </div>
            </div>
        )
    }
}

export { UtilityTileComponent, UtilityType }

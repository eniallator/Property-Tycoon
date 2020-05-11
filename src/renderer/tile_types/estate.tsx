// estate.tsx
/**
 * Estate type tile component
 * 
 * authors: Niall C.C
 * @packageDocumentation
 */


import React, { Fragment, Component } from "react"
import ReactDOM from "react-dom"
import { TileProps } from "../tile"
import { EstateGroup }  from "../../game_data/tile"

import "../monopoly.scss"


/**
 * Maps EstateGroup enums to their css classes
 */
const estateColorMap: Record<EstateGroup, string> = {
    [EstateGroup.BROWN]: "brown",
    [EstateGroup.BLUE]: "light-blue",
    [EstateGroup.PURPLE]: "purple",
    [EstateGroup.ORANGE]: "orange",
    [EstateGroup.RED]: "red",
    [EstateGroup.YELLOW]: "yellow",
    [EstateGroup.GREEN]: "green",
    [EstateGroup.DEEP_BLUE]: "dark-blue"
}


/**
 * Props for the estate tiles
 * - `group`: Corresponds to the colour to use
 * - `name`: Name of the estate
 * - `price`: Price of the estate
 */
type EstateTileComponentProps = TileProps & {
    group: EstateGroup,
    name: string,
    price: number
}

/**
 * Estate tile react component
 */
class EstateTileComponent extends Component<EstateTileComponentProps> {
    render() {
        return (
            <div className="space property">
                <div className="container">
                    <div className={"color-bar " + estateColorMap[this.props.group]}></div>
                    <div className="without-color-bar">
                        <div className="fit-outer">
                            <div className="players">
                                { this.props.playerArray }
                            </div>
                        </div>
                        <div className="name">{ this.props.name }</div>
                    </div>
                    <div className="price">Price £{ this.props.price }</div>
                </div>
			</div>
        )
    }
}

export { EstateTileComponent }

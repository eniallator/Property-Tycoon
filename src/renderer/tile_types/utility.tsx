import React, { Fragment, Component } from "react"
import ReactDOM from "react-dom"
import { TileProps } from "../tile"

import "../monopoly.scss"

enum UtilityType {
    Electric = "electric-company",
    Water = "waterworks"
}

type UtilityTileProps = TileProps & {
    name: string,
    price: number,
    utilityType: UtilityType
}

class UtilityTile extends Component<UtilityTileProps> {
    render() {
        let icon: string
        if (this.props.utilityType === UtilityType.Electric) {
            icon = "fa-lightbulb-o"
        } else {
            icon = "fa-tint"
        }
        return (
            <div className={ `space utility ${ this.props.utilityType }` }>
                <div className="container">
                    <div className="name">{ this.props.name }</div>
                    <div className={ `drawing fa ${ icon }` }></div>
                    <div className="price">Price £{ this.props.price }</div>
                </div>
            </div>
        )
    }
}

export { UtilityTile, UtilityType }

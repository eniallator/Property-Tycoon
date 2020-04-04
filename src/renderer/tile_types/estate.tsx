import React, { Fragment, Component } from "react"
import ReactDOM from "react-dom"
import { TileProps } from "../tile"
import { EstateGroup }  from "../../game_data/tile"

import "../monopoly.scss"


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


type EstateTileComponentProps = TileProps & {
    group: EstateGroup,
    name: string,
    price: number
}

class EstateTileComponent extends Component<EstateTileComponentProps> {
    render() {
        return (
            <div className="space property">
				<div className="container">
					<div className={"color-bar " + estateColorMap[this.props.group]}></div>
					<div className="name">{ this.props.name }</div>
					<div className="price">Price £{ this.props.price }</div>
				</div>
			</div>
        )
    }
}

export { EstateTileComponent }

import React, { Fragment, Component } from "react"
import ReactDOM from "react-dom"
import { TileProps } from "../tile"

import "../monopoly.scss"

type PropertyTileProps = TileProps & {
    color: String,
    name: String,
    price: String
}

class PropertyTile extends Component<PropertyTileProps> {
    render() {
        return (
            <div className="space property">
				<div className="container">
					<div className={"color-bar " + this.props.color}></div>
					<div className="name">{ this.props.name }</div>
					<div className="price">Price £{ this.props.price }</div>
				</div>
			</div>
        )
    }
}

export { PropertyTile }

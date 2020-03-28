import React, { Fragment, Component } from "react"
import ReactDOM from "react-dom"
import { TileProps } from "../tile"

import "../monopoly.scss"

type StationTileProps = TileProps & {
    name: String,
    price: String
}

class StationTile extends Component<StationTileProps> {
    render() {
        return (
			<div className="space railroad">
				<div className="container">
					<div className="name">{ this.props.name }</div>
					<i className="drawing fa fa-subway"></i>
					<div className="price">Price £{ this.props.price }</div>
				</div>
			</div>
        )
    }
}

export { StationTile }

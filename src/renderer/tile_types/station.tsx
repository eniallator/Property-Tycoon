import React, { Fragment, Component } from "react"
import ReactDOM from "react-dom"
import { TileProps } from "../tile"

import "../monopoly.scss"

type StationTileComponentProps = TileProps & {
    name: string,
    price: number
}

class StationTileComponent extends Component<StationTileComponentProps> {
    render() {
        return (
			<div className="space railroad">
				<div className="container">
				{this.props.playerArray}

					<div className="name">{ this.props.name }</div>
					<i className="drawing fa fa-subway"></i>
					<div className="price">Price £{ this.props.price }</div>
				</div>
			</div>
        )
    }
}

export { StationTileComponent }

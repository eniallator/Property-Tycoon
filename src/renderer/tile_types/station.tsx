// station.tsx
/**
 * Station type tile component
 * 
 * authors: Niall C.C
 * @packageDocumentation
 */


import React, { Fragment, Component } from "react"
import ReactDOM from "react-dom"
import { TileProps } from "../tile"

import "../monopoly.scss"

/**
 * Props for the station tiles
 * - `name`: Name of the station
 * - `price`: Price of the station
 */
type StationTileComponentProps = TileProps & {
    name: string,
    price: number
}

/**
 * Station tile react component
 */
class StationTileComponent extends Component<StationTileComponentProps> {
    render() {
        return (
			<div className="space railroad">
				<div className="container">
					<div className="players">
						{ this.props.playerArray }
					</div>
					<div className="name">{ this.props.name }</div>
					<i className="drawing fa fa-subway"></i>
					<div className="price">Price £{ this.props.price }</div>
				</div>
			</div>
        )
    }
}

export { StationTileComponent }

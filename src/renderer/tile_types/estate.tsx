import React, { Fragment, Component } from "react"
import ReactDOM from "react-dom"
import { TileProps } from "../tile"
// import { Estate }  from "../../game_data/tile"

import "../monopoly.scss"

type EstateTileProps = TileProps & {
    color: string,
    name: string,
    price: number
}

class EstateTile extends Component<EstateTileProps> {
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

export { EstateTile }

import React, { Fragment, Component } from "react"
import ReactDOM from "react-dom"
import "./monopoly.scss"

type TileProps = {
    hasPlayer: boolean,
    color: String,
    type: String,
    name: String,
    price: String
}

class Tile extends Component<TileProps, {}> {
    constructor(props: TileProps) {
        super(props)
    }

    render() {
        this.props.hasPlayer
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

export { Tile }

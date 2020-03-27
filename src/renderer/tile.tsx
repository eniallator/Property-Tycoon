import React, { Fragment, Component } from "react";
import ReactDOM from "react-dom";

type TileProps = {
    hasPlayer?: boolean
}

class Tile extends Component<TileProps, {}> {
    constructor(props: TileProps) {
        super(props)
    }

    render() {
        this.props.hasPlayer
        return (
            <div style={{width: 20, height: 20, border: "1px solid"}}>

            </div>
        )
    }
}

export { Tile }

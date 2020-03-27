import React, { Fragment, Component } from "react"
import ReactDOM from "react-dom"
import { Tile } from "./tile"

type BoardProps = {
    playerPos: number
}

class Board extends Component<BoardProps> {
    render () {
        const tileArray: Array<any> = []

        for (let i: number = 0; i < 40; i++) {
            tileArray.push(
                <Tile hasPlayer={false}></Tile>
            )
        }

        return (
            <div>
                {(new Array(40)).fill(null).map(() =>
                    <Tile hasPlayer={false}></Tile>
                )}
            </div>
        )
    }
}

export { Board }

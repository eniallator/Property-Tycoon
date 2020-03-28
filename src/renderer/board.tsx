import React, { Fragment, Component } from "react"
import ReactDOM from "react-dom"

import { PropertyTile } from "./tile_types/property"
import { OpportunityTile } from "./tile_types/opportunity"
import { PotLuckTile } from "./tile_types/pot_luck"
import { StationTile } from "./tile_types/station"

import "./monopoly.scss"

type BoardProps = {
    playerPos: number
}

class Board extends Component<BoardProps> {
    render () {
        const baseBoard: any = (
            <div className="center">
                <div className="pot-luck-deck">
                    <h2 className="label">Pot Luck</h2>
                    <div className="deck"></div>
                </div>
                <h1 className="title">property <br /> tycoon</h1>
                <div className="opportunity-knocks-deck">
                    <h2 className="label">Opportunity Knocks</h2>
                    <div className="deck"></div>
                </div>
            </div>
        )
        const tiles: Array<any> = []
        for (let i: number = 0; i < 36; i++) {
            if (i % 9 === 4) {
                tiles.push(
                    <StationTile hasPlayer={ false } name="Brighton Station" price="200"></StationTile>
                )
            } else {
                tiles.push(
                    <PropertyTile hasPlayer={ false } name={ "tile-" + i } price="200" color="brown"></PropertyTile>
                )
            }
        }

        return (
            <div className="board">
                { baseBoard }
                <div className="space corner go">
                    <div className="container">
                        <div className="instructions">Collect £200.00 salary as you pass</div>
                        <div className="go-word">go</div>
                    </div>
                    <div className="arrow fa fa-long-arrow-left"></div>
                </div>
                { tiles.slice(0, 9).reverse() }
                <div className="space corner jail">
                    <div className="just">Just</div>
                    <div className="drawing">
                        <div className="container">
                            <div className="name">In</div>
                            <div className="window">
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <i className="person fa fa-frown-o"></i>
                            </div>
                            <div className="name">Jail</div>
                        </div>
                    </div>
                    <div className="visiting">Visiting</div>
                </div>
                <div className="row vertical-row left-row">
                    { tiles.slice(9, 18).reverse() }
                </div>
                <div className="space corner free-parking">
                    <div className="container">
                        <div className="name">Free</div>
                        <i className="drawing fa fa-car"></i>
                        <div className="name">Parking</div>
                    </div>
                </div>
                <div className="row horizontal-row top-row">
                    { tiles.slice(18, 27) }
                </div>
                <div className="space corner go-to-jail">
                    <div className="container">
                        <div className="name">Go To</div>
                        <i className="drawing fa fa-gavel"></i>
                        <div className="name">Jail</div>
                    </div>
                </div>
                <div className="row vertical-row right-row">
                    { tiles.slice(27, 36) }
                </div>
            </div>
        )
    }
}

export { Board }

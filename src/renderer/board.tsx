/**
 * Main game board component
 * 
 * authors: Niall C.C
 * @packageDocumentation
 */


import React, { Fragment, Component } from "react"
import ReactDOM from "react-dom"

import { EstateTile } from "./tile_types/estate"
import { StationTile } from "./tile_types/station"
import { CardTile, CardType } from "./tile_types/card"
import { TaxTile, TaxType } from "./tile_types/tax"
import { UtilityTile, UtilityType } from "./tile_types/utility"

import "./monopoly.scss"


/**
 * Board props:
 * - `playerPos`: The current position of the player
 */
type BoardProps = {
    playerPos: number
}

class Board extends Component<BoardProps> {
    getColor (tilePosition: number): string {
        const colorOrder: Array<string> = [
            "brown",
            "light-blue",
            "purple",
            "orange",
            "red",
            "yellow",
            "green",
            "dark-blue"
        ]
        return colorOrder[Math.floor(tilePosition / 4.5)]
    }

    render () {
        const centerComponents: any = (
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
            // TODO: Replace with loaded board data
            if (i === 1) {
                tiles.push(
                    <CardTile hasPlayer={ false } cardType={ CardType.PotLuck }></CardTile>
                )
            } else if (i === 3) {
                tiles.push(
                    <TaxTile hasPlayer={ false } taxType={TaxType.Income} name="Income Tax" fee={ 200 }></TaxTile>
                )
            } else if (i === 6) {
                tiles.push(
                    <CardTile hasPlayer={ false } cardType={ CardType.Opportunity }></CardTile>
                )
            } else if (i === 10) {
                tiles.push(
                    <UtilityTile hasPlayer={ false } name="Tesla Power Co" price={ 150 } utilityType={ UtilityType.Electric }></UtilityTile>
                )
            } else if (i === 25) {
                tiles.push(
                    <UtilityTile hasPlayer={ false } name="Edison Water" price={ 150 } utilityType={ UtilityType.Water }></UtilityTile>
                )
            } else if (i === 34) {
                tiles.push(
                    <TaxTile hasPlayer={ false } taxType={TaxType.Luxury} name="Super Tax" fee={ 200 }></TaxTile>
                )
            } else if (i % 9 === 4) {
                tiles.push(
                    <StationTile hasPlayer={ false } name="Brighton Station" price={ 200 }></StationTile>
                )
            } else {
                tiles.push(
                    <EstateTile hasPlayer={ false } name={ "tile-" + i } price={ 200 } color={ this.getColor(i) }></EstateTile>
                )
            }
        }

        return (
            <div className="board">
                { centerComponents }
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
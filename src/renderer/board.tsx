/**
 * Main game board component
 * 
 * authors: Niall C.C
 * @packageDocumentation
 */


import React, { Fragment, Component } from "react"
import ReactDOM from "react-dom"
import { Token,Player,PlayerM } from "../game_data/player";
import {PlayerGUI} from "../renderer/player";

import {
    StationTile,
    EstateTile,
    UtilityTile,
    TaxTile,
    CornerTile,
    ChanceTile,
    TileM
} from "../game_data/tile"
import { ReceiveProps } from './props'

import { EstateTileComponent } from "./tile_types/estate"
import { StationTileComponent } from "./tile_types/station"
import { ChanceTileComponent } from "./tile_types/chance"
import { TaxTileComponent, TaxType } from "./tile_types/tax"
import { UtilityTileComponent, UtilityType } from "./tile_types/utility"
import { CornerTileComponent } from "./tile_types/corner"

import "./monopoly.scss"
import { IOProps } from "../io/io";


/**
 * Board props:
 * - `playerPos`: The current position of the player
 */
type BoardProps = ReceiveProps & {
    playerPos: number
    playerArray?: Array<any>;
}

class Board extends Component<IOProps> {
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

   // movePlayer(playerID: number, places:number){
        // Take in a player ID then essentially move the player into the new position on a tile, by the places
        // call render again in order to re-render the tokens on the board

    //}

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

        for (let i in this.props.state.tiles) {
            const tile = this.props.state.tiles[i]
            if (TileM.isEstate(tile)) {
                const estate: EstateTile = tile
                tiles.push(
                    <EstateTileComponent
                        name={ estate.name }
                        price={ estate.price }
                        group={ estate.group }
                    ></EstateTileComponent>
                )
            } else if (TileM.isCorner(tile)) {
                const corner: CornerTile = tile
                tiles.push(
                    <CornerTileComponent
                        cornerType={ corner.cornerType }
                    ></CornerTileComponent>
                )
            } else if (TileM.isChance(tile)) {
                const chance: ChanceTile = tile
                tiles.push(
                    <ChanceTileComponent
                        chanceType={ chance.chanceType }
                    ></ChanceTileComponent>
                )
            } else if (TileM.isTax(tile)) {
                const tax: TaxTile = tile
                tiles.push(
                    <TaxTileComponent
                        taxType={ +i < 20 ? TaxType.Income : TaxType.Luxury }
                        fee={ tax.amount }
                    ></TaxTileComponent>
                )
            } else if (TileM.isStation(tile)) {
                const station: StationTile = tile
                tiles.push(
                    <StationTileComponent
                        name={ station.name }
                        price={ station.price }
                    ></StationTileComponent>
                )
            } else if (TileM.isUtility(tile)) {
                const utility: UtilityTile = tile
                tiles.push(
                    <UtilityTileComponent
                        name={ utility.name }
                        price={ utility.price }
                        utilityType={ +i < 20 ? UtilityType.Electric : UtilityType.Water }
                    ></UtilityTileComponent>
                )
            }
        }

        return (
            <div className="board">
                { centerComponents }
                { tiles[0] }
                { tiles.slice(1, 10).reverse() }
                { tiles[10] }
                <div className="row vertical-row left-row">
                    { tiles.slice(11, 20).reverse() }
                </div>
                { tiles[20] }
                <div className="row horizontal-row top-row">
                    { tiles.slice(21, 30) }
                </div>
                { tiles[30] }
                <div className="row vertical-row right-row">
                    { tiles.slice(31, 40) }
                </div>
            </div>
        ) 
    } 
}


export { Board }

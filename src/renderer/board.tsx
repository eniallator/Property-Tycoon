// board.tsx
/**
 * Main game board component
 * 
 * authors: Niall C.C
 * @packageDocumentation
 */


import React, { Fragment, Component } from "react"
import ReactDOM from "react-dom"
import { Player } from "../game_data/player";
import { PlayerGUI } from "../renderer/player";

import {
    StationTile,
    EstateTile,
    UtilityTile,
    TaxTile,
    CornerTile,
    ChanceTile,
    TileM,
    Tile
} from "../game_data/tile"
import { ReceiveProps } from './props'

import { EstateTileComponent } from "./tile_types/estate"
import { StationTileComponent } from "./tile_types/station"
import { ChanceTileComponent } from "./tile_types/chance"
import { TaxTileComponent, TaxType } from "./tile_types/tax"
import { UtilityTileComponent, UtilityType } from "./tile_types/utility"
import { CornerTileComponent } from "./tile_types/corner"

import "./monopoly.scss"


/**
 * Board react component
 */
class Board extends Component<ReceiveProps> {
    /**
     * Creates a specific tile component from a given tile object
     * @param index Index of the tile
     * @param tile Tile object itself
     * @param playerArray Players currently playing
     */
    tileFactory(index: number, tile: Tile, playerArray: Array<any>): any {
        if (TileM.isEstate(tile)) {
            const estate: EstateTile = tile
            return (
                <EstateTileComponent
                    name={ estate.name }
                    price={ estate.price }
                    group={ estate.group }
                    playerArray = { playerArray }
                ></EstateTileComponent>
            )
        } else if (TileM.isCorner(tile)) {
            const corner: CornerTile = tile
            return (
                <CornerTileComponent
                    cornerType={ corner.cornerType }
                    playerArray = { playerArray }
                ></CornerTileComponent>
            )
        } else if (TileM.isChance(tile)) {
            const chance: ChanceTile = tile
            return (
                <ChanceTileComponent
                    chanceType={ chance.chanceType }
                    playerArray = { playerArray }
                ></ChanceTileComponent>
            )
        } else if (TileM.isTax(tile)) {
            const tax: TaxTile = tile
            // Income tax type appears before halfway point whereas luxury appears after
            return (
                <TaxTileComponent
                    taxType={ +index < 20 ? TaxType.Income : TaxType.Luxury }
                    fee={ tax.amount }
                    playerArray = { playerArray }
                ></TaxTileComponent>
            )
        } else if (TileM.isStation(tile)) {
            const station: StationTile = tile
            return (
                <StationTileComponent
                    name={ station.name }
                    price={ station.price }
                    playerArray = { playerArray }
                ></StationTileComponent>
            )
        } else if (TileM.isUtility(tile)) {
            const utility: UtilityTile = tile
            // Electric utility type appears before halfway point whereas water appears after
            return (
                <UtilityTileComponent
                    name={ utility.name }
                    price={ utility.price }
                    utilityType={ +index < 20 ? UtilityType.Electric : UtilityType.Water }
                    playerArray = { playerArray }
                ></UtilityTileComponent>
            )
        }
    }

    /**
     * Gets all players at a specific board position
     * @param i Position to get players at
     */
    getPlayersAtPos(i: number): Array<any> {
        return this.props.state.players.filter(
            (player: Player) => player.position === i
        ).map(
            (player: Player) => <PlayerGUI player={ player }></PlayerGUI>
        )
    }

    render() {
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

        const tiles: Array<any> = this.props.state.tiles.map(
            (tile: Tile, i: number) => this.tileFactory(
                i, tile, this.getPlayersAtPos(i)
            )
        )

        return (
            <div className="table">
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
            </div>
        ) 
    } 
}


export { Board }

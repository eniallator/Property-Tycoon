/**
 * Base tile component
 * 
 * authors: Niall C.C, Joseph .F
 * @packageDocumentation
 */

import React, { Fragment, Component } from "react";
import ReactDOM from "react-dom";
import {PlayerGUI} from "../renderer/player";


type TileProps = {
    playerArray: Array<PlayerGUI> 
}

class Tile extends Component<TileProps, {}> {
    constructor(props: TileProps) {
        super(props)
    }

/**
 * Tile props:
 * - `hasPlayer`: If the tile has a player or not
 */
type TileProps = {
    hasPlayer: boolean
}

export { TileProps }

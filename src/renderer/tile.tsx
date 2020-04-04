/**
 * Base tile component
 * 
 * authors: Niall C.C, Joseph .F
 * @packageDocumentation
 */

import React, { Fragment, Component } from "react";
import ReactDOM from "react-dom";
import {PlayerGUI} from "../renderer/player";
import { Token } from "../game_data/player";

/**
 * Tile props:
 * - `hasPlayer`: If the tile has a player or not
 */
type TileProps = {
    playerArray?: Array<any> ;
    hasPlayer?: boolean;
}

class Tile extends Component<TileProps, {}> {

    

    constructor(props: TileProps) {
        super(props)
        
        this.props.playerArray.push(<PlayerGUI token = {Token.BOOT} id = {0} ></PlayerGUI>)
    }

    render() {
        this.props.hasPlayer
        return (
            <div style={{width: 20, height: 20, border: "1px solid"}}>
                {this.props.playerArray}

            </div>
        )
    }
}

export { TileProps,Tile }


// player.ts
/**
 * Player - 
 * 
 * authors: Michael K., Alexandru C., Niall C.C., Joe F.
 * @packageDocumentation
 */

import React, { Fragment, Component,MouseEvent } from "react";
import ReactDOM from "react-dom";
import { IO } from '../io/io';
import { Token,Player,PlayerM } from "../game_data/player";


type playerProps = {
    token?: Token
}
const tokenToUrlMap: Record<Token, string> = {
    [Token.BOOT]: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png",
    [Token.CAT] : " https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png",
    [Token.GOBLET]: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png",
    [Token.HATSTAND]:"https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png",
    [Token.SMARTPHONE]:"https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png",
    [Token.SPOON]:"https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png"
  }

class PlayerGUI extends Component<playerProps>{
    

    constructor(props: playerProps) {
        super(props)
    }        

    

    render() {
        return (
          <img src={ tokenToUrlMap[this.props.token] } />
        )
      }

    }

    

    export {PlayerGUI}








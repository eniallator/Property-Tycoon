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

import "./monopoly.scss"

type playerProps = {
    player: Player
}
const tokenToUrlMap: Record<Token, string> = {
    [Token.BOOT]: 'player',
    [Token.CAT] : 'player',
    [Token.GOBLET]: 'player',
    [Token.HATSTAND]:'player',
    [Token.SMARTPHONE]:'player',
    [Token.SPOON]:'player'
  }

class PlayerGUI extends Component<playerProps>{
    

    constructor(props: playerProps) {
        super(props)
    }        

    

    render() {
        return (
          <div className={ tokenToUrlMap[this.props.player.token] } />
        )
      }

    }

    

    export {PlayerGUI}








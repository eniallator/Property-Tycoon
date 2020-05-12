// roll.ts
/**
 * Roll - 
 * 
 * authors: Michael K., Alexandru C., Niall C.C., Joe F.
 * @packageDocumentation
 */

import React, { Fragment, Component,MouseEvent } from "react";
import ReactDOM from "react-dom";
import { IO } from '../io/io';
import "./monopoly.scss"
import { CommandM } from "../game_data/command";
import { SendProps } from "./props"


type IOProps = {
    io: IO
  }
// Roll Class
/**
 * - 2 randoms are created, in order to get the amount of times the player moves
 * - Roll comand is sent through the IO
 */
class Roll extends Component<IOProps>{
    handleClick(event: MouseEvent) {
      const n1 = Math.ceil(Math.random() * 6)
      const n2 = Math.ceil(Math.random() * 6)
  

      const rollCmd = CommandM.movePlayer(n1 + n2)
      this.props.io.sendCommand(rollCmd)
    }
      render() {
        return (<Fragment><button onClick={this.handleClick.bind(this)} className ="rd"> Roll Dice
        </button> <div> num here</div> </Fragment>) 
    }



}


export {Roll}
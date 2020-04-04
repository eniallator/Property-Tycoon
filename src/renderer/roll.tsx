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
import { RollData,Command, CommandType } from "../game_data/command";
import "./monopoly.scss"


type IOProps = {
    io: IO
  }

class Roll extends Component<IOProps>{
    handleClick(event: MouseEvent) {
        const n1 = Math.floor(Math.random() * 6) + 1
        const n2 = Math.floor(Math.random() * 6) + 1
        
        const rollData: RollData  = { dice: [n1, n2]  } as RollData;

        const rollcmd: Command = {
            type: CommandType.ROLL,
            data: rollData
        }

        this.props.io.sendCommand(rollcmd)
        
      }
      
      render() {
        return <Fragment><button onClick={this.handleClick} className ="rd"> Roll Dice
        </button> <div> num here</div> </Fragment>
        
      }



}


export {Roll}
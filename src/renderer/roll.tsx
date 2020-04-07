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
import { CommandM } from "../game_data/command";
import { SendProps } from "./props"

class Roll extends Component<SendProps>{
    handleClick(event: MouseEvent) {
      const n1 = Math.floor(Math.random() * 6) + 1
      const n2 = Math.floor(Math.random() * 6) + 1
        
      // Hi guys. I've updated this to use the new API
      // As you can see it's a lot simpler to utilize
      // Here's the old code:
        
      // const rollData: RollData  = { dice: [n1, n2]  } as RollData;

      // const rollcmd: Command = {
      //     type: CommandType.ROLL,
      //     data: rollData
      // }

      const rollCmd = CommandM.movePlayer(n1 + n2)
      this.props.io.sendCommand(rollCmd)
    }
      
    render() {
      return <Fragment><button onClick={this.handleClick}> Roll Dice
      </button> <div> num here</div> </Fragment>
        
    }



}


export {Roll}
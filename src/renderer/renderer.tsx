// renderer.ts
/**
 * Renderer - 
 * 
 * authors: Michael K., Alexandru C., Niall C.C., Joe F.
 * @packageDocumentation
 */

import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { IO } from '../io/io';
import { State } from "../game_data/state";
import { Board } from "./board";
import { Roll } from "./roll";


class Renderer {
    io:IO 
    constructor(io: IO) {
        this.io = io; 
        
    }

    update(state: State) {
        ReactDOM.render(<Fragment><Board playerPos={0} /> <Roll/></Fragment>, document.getElementById("root") as HTMLElement)
        
    }
}

export { Renderer }

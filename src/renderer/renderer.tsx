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

class Renderer {
    constructor(io: IO) {
        
    }

    update(state: State) {
        ReactDOM.render(<Board playerPos={0} />, document.getElementById("root") as HTMLElement)
    }
}

export { Renderer }

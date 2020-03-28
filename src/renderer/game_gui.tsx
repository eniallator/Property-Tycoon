import React, { Fragment, Component } from "react"
import ReactDOM from "react-dom"
import { Board } from "./board"
import "./monopoly.scss"

class GameGUI extends Component {
    render() {
        return (
            <div className="table">
                <Board playerPos={0}></Board>
            </div>
        )
    }
}

export { GameGUI }

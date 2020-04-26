// main_menu_gui.tsx
/**
 * Renders everything needed for playing the game
 * 
 * authors: Niall C.C
 * @packageDocumentation
 */


import React, { Fragment, Component, MouseEvent } from "react"
import ReactDOM from "react-dom"
import "./monopoly.scss"
import { SendReceiveProps } from "./props"
import { CommandType, CommandM, PlayerConfig } from "../game_data/command"
import { Token } from "../game_data/player"

import "./menu.css"


type MainMenuState = {
    players: Array<PlayerConfig>,
    cfgModalOn: boolean
}

/**
 * Main menu react component
 */
class MainMenuGUI extends Component<SendReceiveProps, MainMenuState> {
    constructor(props: SendReceiveProps) {
        super(props)
        this.state = {
            players: [
                {
                    token: Token.BOOT,
                    isHuman: false
                }
            ],
            cfgModalOn: false
        }
    }

    startGame(evt: MouseEvent) {
        this.props.io.sendCommand(CommandM.startGame(this.state.players))
    }

    openPlayerCfgModal(evt: MouseEvent) {
        this.setState({...this.state, cfgModalOn: true})
    }

    closePlayerCfgModal(evt: MouseEvent) {
        this.setState({...this.state, cfgModalOn: false})
    }

    exit(evt: MouseEvent) {
        this.props.io.sendCommand(CommandM.endGame())
    }

    render() {
        return (
            <div className="wrapper">
                <div className="modal-player-cfg"
                    style={{"display": this.state.cfgModalOn ? "block" : "none"}}>
                    <div className="modal-content-player-cfg">
                        <h2 style={{display: "inline-block"}}>Player Config</h2>
                        <a onClick={ this.closePlayerCfgModal.bind(this) }>
                            <span className="modal-close-player-cfg">&times;</span>
                        </a>
                        <div className="player-options-container">
                            <div className="player-option">
                                <a className="player-option-remove"><span>&times;</span></a>
                                <span className="player-ai-text">AI</span>
                                <img className="player-option-dim" src="../placeholder.png"/>
                            </div>
                            <div className="player-option">
                                <a className="player-option-remove"><span>&times;</span></a>
                                <img className="player-option-dim" src="../placeholder.png"/>
                            </div>
                            <div className="player-option player-option-add">
                                <span className="player-option-dim player-add-text">+</span>
                            </div>
                        </div>
                        <a className="button play" onClick={ this.startGame.bind(this) }>Start Game</a>
                    </div>
                </div>
                <div className="main">
                    <div className="menu">
                        <h1>Property Tycoon</h1>
                        <ul>
                            <li><a className="button play" onClick={ this.openPlayerCfgModal.bind(this) }>Play</a></li><br/>
                            <li><a className="button credits">Credits</a></li><br/>
                            <li><a className="button exit" onClick={ this.exit.bind(this) }>Exit</a></li><br/>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}


export { MainMenuGUI }

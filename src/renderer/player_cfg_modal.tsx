import React, { Component, MouseEvent, RefObject } from "react"
import ReactDOM from "react-dom"
import { CommandM, PlayerConfig } from "../game_data/command"
import { Token } from "../game_data/player"
import { PlayerCfgDropdown } from './player_cfg_dropdown'

import "./menu.css"

type ModalProps = {
    start: Function,
    active?: boolean
}

type ModalState = {
    active: boolean,
    players: Array<PlayerConfig>,
    dropdown: RefObject<PlayerCfgDropdown>
}

const tokenImageMap: Record<Token, string> = {
    [Token.CAT]: "../placeholder.png",
    [Token.BOOT]: "../placeholder.png",
    [Token.SPOON]: "../placeholder.png",
    [Token.GOBLET]: "../placeholder.png",
    [Token.HATSTAND]: "../placeholder.png",
    [Token.SMARTPHONE]: "../placeholder.png"
}

class PlayerCfgModal extends Component<ModalProps, ModalState> {
    constructor(props: ModalProps) {
        super(props)
        this.state = {
            active: this.props.active || false,
            players: [],
            dropdown: React.createRef()
        }
    }

    open(evt: MouseEvent) {
        this.setState({...this.state, active: true})
    }

    close(evt: MouseEvent) {
        this.setState({...this.state, active: false})
    }

    addPlayer(token: Token) {
        this.state.players.push({
            token: token,
            isHuman: true
        })
    }

    removePlayer(i: number) {
        this.state.players.splice(i, 1)
    }

    toggleAI(i: number) {
        this.state.players[i].isHuman = !this.state.players[i].isHuman
    }

    createPlayerOptions(): Array<any> {
        const options: Array<any> = []
        const remainingTokens: Set<Token> = new Set()
        for (let token in Token) {
            if (!isNaN(+token)) {
                remainingTokens.add(+token as Token)
            }
        }

        for (let i in this.state.players) {
            const player: PlayerConfig = this.state.players[i]
            options.push(
                <div className="player-option">
                    <a className="player-option-remove" onClick={ (evt: MouseEvent) => this.removePlayer(+i) }><span>&times;</span></a>
                    <div className="player-option-dim" onClick={ () => this.toggleAI(+i) }>
                        { player.isHuman ? '' : <span className="player-ai-text">AI</span> }
                        <img className="player-option-dim" src={ tokenImageMap[player.token] }/>
                    </div>
                </div>
            )
            remainingTokens.delete(player.token)
        }

        if (remainingTokens.size > 0) {
            options.push(
                <div className="player-option player-option-add">
                    <span
                        className="player-option-dim player-add-text"
                        onClick={ () => this.state.dropdown.current.open() }
                    >+</span>
                    <PlayerCfgDropdown
                        ref={ this.state.dropdown }
                        onClick={ this.addPlayer.bind(this) }
                        remainingTokens={ remainingTokens }
                        tokenImageMap={ tokenImageMap }
                    ></PlayerCfgDropdown>
                </div>
            )
        }

        return options
    }

    render() {
        const hidden: string = this.state.active ? "" : " hidden"

        return (
            <div className={"modal-player-cfg" + hidden}>
                <div className="modal-content-player-cfg">
                    <h2 className="modal-heading">Player Config</h2>
                    <a onClick={ this.close.bind(this) }>
                        <span className="modal-close-player-cfg">&times;</span>
                    </a>
                    <div className="player-options-container">
                        { this.createPlayerOptions() }
                    </div>
                    <a className="button play" onClick={ () => this.props.start(this.state.players) }>Start Game</a>
                </div>
            </div>
        )
    }
}

export { PlayerCfgModal }

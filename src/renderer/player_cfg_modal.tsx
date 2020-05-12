// player_cfg_modal.tsx
/**
 * The player config modal
 *
 * authors: Niall C.C
 * @packageDocumentation
 */


import React, { Component, MouseEvent, RefObject } from "react"
import ReactDOM from "react-dom"
import { CommandM, PlayerConfig } from "../game_data/command"
import { Token } from "../game_data/player"
import { PlayerCfgDropdown } from "./player_cfg_dropdown"
import { tokenImageMap } from "./assets"

import "./menu.css"

/**
 * Props for the modal component
 * - `start`: The method to call when the start game button is pressed
 * - `active`: Overrides the modal's active state attribute
 */
type ModalProps = {
    start: Function,
    active?: boolean
}

/**
 * State for the modal component
 * - `active`: Determines if the modal is visible
 * - `players`: Keeps track of the currently configured players
 * - `dropdown`: Reference to the dropdown object
 * - `startGameError`: If starting the game wasn't successful
 */
type ModalState = {
    active: boolean,
    players: Array<PlayerConfig>,
    dropdown: RefObject<PlayerCfgDropdown>,
    startGameError: boolean
}

/**
 * Player config modal react component
 */
class PlayerCfgModal extends Component<ModalProps, ModalState> {
    constructor(props: ModalProps) {
        super(props)
        this.state = {
            active: this.props.active || false,
            players: [],
            dropdown: React.createRef(),
            startGameError: false
        }
    }

    /**
     * Sets the modal active state to true
     */
    open(evt?: MouseEvent) {
        this.setState({...this.state, active: true})
    }

    /**
     * Sets the modal active state to false
     */
    close(evt?: MouseEvent) {
        this.setState({...this.state, active: false, startGameError: false})
    }

    /**
     * Adds a player to the player list that defaults as not an AI
     *
     * @param token Chosen token
     */
    addPlayer(token: Token) {
        this.state.players.push({
            token: token,
            isHuman: true
        })
    }

    /**
     * Removes a player from the currently configured players
     *
     * @param i Index of player to remove
     */
    removePlayer(i: number) {
        this.state.players.splice(i, 1)
    }

    /**
     * Toggles the AI attribute of a player
     *
     * @param i Index of player
     */
    toggleAI(i: number) {
        this.state.players[i].isHuman = !this.state.players[i].isHuman
    }

    /**
     * Creates the player config components
     *
     * @returns An array showing the currently configured players
     */
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
                    ></PlayerCfgDropdown>
                </div>
            )
        }

        return options
    }

    startGame() {
        const success = this.props.start(this.state.players)
        this.setState({
            ...this.state,
            startGameError: !success
        })
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
                    <div>
                        <a className="button play" onClick={ this.startGame.bind(this) }>Start Game</a>
                        {
                            this.state.startGameError
                            ? <span className="start-game-error">Game must have at least 2 players</span>
                            : ""
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export { PlayerCfgModal }

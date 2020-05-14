// player_cfg_dropdown.tsx
/**
 * The player config dropdown that shows tokens
 *
 * authors: Niall C.C
 * @packageDocumentation
 */


import React, { Component, RefObject } from "react";
import { Token } from "../game_data/player"
import { tokenImageMap } from "./assets"

import "./menu.css"


/**
 * Props for the dropdown component
 * - `onClick`: Function called when an option is clicked
 * - `remainingTokens`: Tokens to show in the dropdown
 * - `active`: Overrides the dropdown's active state attribute
 */
type DropdownProps = {
    onClick: Function,
    remainingTokens: Set<Token>,
    active?: boolean
}

/**
 * State for the dropdown component
 * - `active`: Determines if the dropdown is visible
 * - `wrapperRef`: The outer div for the dropdown
 */
type DropdownState = {
    active: boolean,
    wrapperRef?: HTMLDivElement
}

/**
 * Player config dropdown react component
 */
class PlayerCfgDropdown extends Component<DropdownProps, DropdownState> {
    constructor(props: DropdownProps) {
        super(props)
        this.state = {
            active: this.props.active || false
        }

        this.close = this.close.bind(this)
        this.setWrapperRef = this.setWrapperRef.bind(this)
    }

    componentDidMount() {
        document.addEventListener("mousedown", this.close)
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.close)
    }

    /**
     * Sets the dropdown active state to true
     */
    open(evt?: MouseEvent) {
        this.setState({...this.state, active: true})
    }

    /**
     * Sets the dropdown active state to false
     */
    close(evt?: MouseEvent) {
        if (this.state.wrapperRef && !this.state.wrapperRef.contains(evt.target as Node)) {
            this.setState({...this.state, active: false})
        }
    }

    /**
     * Sets the wrapperRef state to the passed node
     *
     * @param node The div reference
     */
    setWrapperRef(node: HTMLDivElement) {
        this.setState({...this.state, wrapperRef: node})
    }

    render() {
        const tokenComponents: Array<any> = []

        for (let token of this.props.remainingTokens) {
            tokenComponents.push(
                <a className="add-player-dropdown-option" onClick={ () => this.props.onClick(token) }>
                    <img className="player-option-dim" src={ tokenImageMap[token] }/>
                </a>
            )
        }

        const hidden: string = this.state.active ? "" : " hidden"
        return (
            <div ref={ this.setWrapperRef } className={ "add-player-dropdown-outer" + hidden }>
                <div className="add-player-dropdown">
                    { tokenComponents }
                </div>
            </div>
        )
    }
}


export { PlayerCfgDropdown }

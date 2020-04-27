import React, { Component, RefObject } from "react";
import { Token } from "../game_data/player"

import "./menu.css"

type DropdownProps = {
    onClick: Function,
    remainingTokens: Set<Token>,
    tokenImageMap: Record<Token, string>,
    active?: boolean
}

type DropdownState = {
    active: boolean,
    wrapperRef?: HTMLDivElement
}

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

    open(evt?: MouseEvent) {
        this.setState({...this.state, active: true})
    }

    close(evt?: MouseEvent) {
        if (this.state.wrapperRef && !this.state.wrapperRef.contains(evt.target as Node)) {
            this.setState({...this.state, active: false})
        }
    }

    setWrapperRef(node: HTMLDivElement) {
        this.setState({...this.state, wrapperRef: node})
    }

    render() {
        const tokenComponents: Array<any> = []

        for (let token of this.props.remainingTokens) {
            tokenComponents.push(
                <a className="add-player-dropdown-option" onClick={ () => this.props.onClick(token) }>
                    <img className="player-option-dim" src={ this.props.tokenImageMap[token] }/>
                </a>
            )
        }

        const hidden: string = this.state.active ? "" : " hidden"
        return (
            <div ref={ this.setWrapperRef } className={ "add-player-dropdown" + hidden }>
                { tokenComponents }
            </div>
        )
    }
}


export { PlayerCfgDropdown }

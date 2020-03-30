/**
 * Card type tile component
 * 
 * authors: Niall C.C
 * @packageDocumentation
 */


import React, { Fragment, Component } from "react"
import ReactDOM from "react-dom"
import { TileProps } from "../tile"
import { Tile }  from "../../game_data/tile"

import "../monopoly.scss"


/**
 * Possible different types of card tiles:
 * - `PotLuck`
 * - `Opportunity`
 */
enum CardType {
    PotLuck,
    Opportunity
}

interface CardTypeConfig {
    class: string,
    name: string,
    icon: string
}

// The default config interface for card types
const CardConfig: Record<CardType, CardTypeConfig> = {
    [CardType.PotLuck]: {
        class: "potluck",
        name: "Pot Luck",
        icon: "fa-cube"
    },
    [CardType.Opportunity]: {
        class: "opportunity",
        name: "Opportunity Knocks",
        icon: "fa-question"
    }
}


type CardProps = TileProps & {
    cardType: CardType
}

class CardTile extends Component<CardProps> {
    render() {
        const cfg: CardTypeConfig = CardConfig[this.props.cardType]
        return (
            <div className={ `space ${ cfg.class }`}>
                <div className="container">
                    <div className="name">{ cfg.name }</div>
                    <i className={`drawing fa ${ cfg.icon }` }></i>
                    <div className="instructions">Follow instructions on top card</div>
                </div>
            </div>
        )
    }
}


export { CardTile, CardType }

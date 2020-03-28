/**
 * Tax type tile component
 * 
 * authors: Niall C.C
 * @packageDocumentation
 */


import React, { Fragment, Component } from "react"
import ReactDOM from "react-dom"
import { TileProps } from "../tile"

import "../monopoly.scss"


/**
 * Possible different types of tax:
 * - `Income`
 * - `Luxury`
 */
enum TaxType {
    Income,
    Luxury
}

interface TaxTypeConfig {
    class: string,
    icon: string
}

// The default config interface for tax types
const TaxConfig: Record<TaxType, TaxTypeConfig> = {
    [TaxType.Income]: {
        class: "income",
        icon: "diamond"
    },
    [TaxType.Luxury]: {
        class: "luxury",
        icon: "drawing fa fa-diamond"
    }
}

/**
 * Tax tile props:
 * - `name`: Name of the tax tile
 * - `fee`: Amount charged for landing on tile
 * - `taxType`: Type of tax
 */
type TaxTileProps = TileProps & {
    name: string,
    fee: number,
    taxType: TaxType
}

class TaxTile extends Component<TaxTileProps> {
    render() {
        const cfg: TaxTypeConfig = TaxConfig[this.props.taxType]
        return (
            <div className={ `space fee ${ cfg.class }-tax` }>
                <div className="container">
                    <div className="name">{ this.props.name }</div>
                    <div className={ cfg.icon }></div>
                    <div className="instructions">Pay £{ this.props.fee }</div>
                </div>
            </div>
        )
    }
}


export { TaxTile, TaxType }

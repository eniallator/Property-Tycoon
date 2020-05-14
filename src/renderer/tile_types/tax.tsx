// tax.tsx
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

/**
 * Config format for tax types
 * - `name`: Name of the chance type
 * - `class`: Outer div css class
 * - `icon`: which font awesome icon to use
 */
interface TaxTypeConfig {
    name: string,
    class: string,
    icon: string
}

/**
 * The default config interface for tax types
 */
const TaxConfig: Record<TaxType, TaxTypeConfig> = {
    [TaxType.Income]: {
        name: "Income Tax",
        class: "income",
        icon: "diamond"
    },
    [TaxType.Luxury]: {
        name: "Super Tax",
        class: "luxury",
        icon: "drawing fa fa-diamond"
    }
}

/**
 * Tax tile props:
 * - `fee`: Amount charged for landing on tile
 * - `taxType`: Type of tax
 */
type TaxTileComponentProps = TileProps & {
    fee: number,
    taxType: TaxType
}

/**
 * Tax tile react component
 */
class TaxTileComponent extends Component<TaxTileComponentProps> {
    render() {
        const cfg: TaxTypeConfig = TaxConfig[this.props.taxType]
        return (
            <div className={ `space fee ${ cfg.class }-tax` }>
                <div className="container">
                    <div className="fit-outer">
                        <div className="players">
                            { this.props.playerArray }
                        </div>
                    </div>
                    <div className="name">{ cfg.name }</div>
                    <div className={ cfg.icon }></div>
                    <div className="instructions">Pay £{ this.props.fee }</div>
                </div>
            </div>
        )
    }
}


export { TaxTileComponent, TaxType }

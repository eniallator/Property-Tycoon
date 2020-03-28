import React, { Fragment, Component } from "react"
import ReactDOM from "react-dom"
import { TileProps } from "../tile"

import "../monopoly.scss"

enum TaxType {
    Income = "income",
    Luxury = "luxury"
}

type TaxTileProps = TileProps & {
    name: string,
    fee: number,
    taxType: TaxType
}

class TaxTile extends Component<TaxTileProps> {
    render() {
        let icon: string
        if (this.props.taxType === TaxType.Income) {
            icon = "diamond"
        } else {
            icon = "drawing fa fa-diamond"
        }
        return (
            <div className={ `space fee ${ this.props.taxType }-tax` }>
                <div className="container">
                    <div className="name">{ this.props.name }</div>
                    <div className={ icon }></div>
                    <div className="instructions">Pay £{ this.props.fee }</div>
                </div>
            </div>
        )
    }
}

export { TaxTile, TaxType }

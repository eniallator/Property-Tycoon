// corner.tsx
/**
 * Corner type tile component
 * 
 * authors: Niall C.C
 * @packageDocumentation
 */


import React, { Fragment, Component } from "react"
import ReactDOM from "react-dom"
import { TileProps } from "../tile"

import "../monopoly.scss"
import { CornerType } from "../../game_data/tile"


/**
 * Props for the corner component
 * - `cornerType`: Which corner type it is
 */
type CornerTileComponentProps = TileProps & {
    cornerType: CornerType
}

/**
 * Corner tile react component
 */
class CornerTileComponent extends Component<CornerTileComponentProps> {
    render() {
        switch (this.props.cornerType) {
            case CornerType.GO: return (
                <div className="space corner go">
                    <div className="container" > 
                    {this.props.playerArray}
                        <div className="instructions">Collect £200.00 salary as you pass</div>
                        <div className="go-word">go</div>
                    </div>
                    <div className="arrow fa fa-long-arrow-left"></div>
                </div>
            )
            case CornerType.JAIL: return (
                <div className="space corner jail">
                    <div className="just">Just</div>
                    <div className="drawing">
                        <div className="container">
                        {this.props.playerArray}

                            <div className="name">In</div>
                            <div className="window">
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <i className="person fa fa-frown-o"></i>
                            </div>
                            <div className="name">Jail</div>
                        </div>
                    </div>
                    <div className="visiting">Visiting</div>
                </div>
            )
            case CornerType.PARKING: return (
                <div className="space corner free-parking">
                    <div className="container">
                    {this.props.playerArray}
                        <div className="name">Free</div>
                        <i className="drawing fa fa-car"></i>
                        <div className="name">Parking</div>
                    </div>
                </div>
            )
            case CornerType.GO_TO_JAIL: return (
                <div className="space corner go-to-jail">
                    <div className="container">
                    {this.props.playerArray}
                        <div className="name">Go To</div>
                        <i className="drawing fa fa-gavel"></i>
                        <div className="name">Jail</div>
                    </div>
                </div>
            )
        }
    }
}

export { CornerTileComponent }

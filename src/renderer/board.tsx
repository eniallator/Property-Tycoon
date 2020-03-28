import React, { Fragment, Component } from "react"
import ReactDOM from "react-dom"
import { Tile } from "./tile"
import "./monopoly.scss"

type BoardProps = {
    playerPos: number
}

class Board extends Component<BoardProps> {
    render () {
        const baseBoard: any = (
            <div className="center">
                <div className="pot-luck-deck">
                    <h2 className="label">Pot Luck</h2>
                    <div className="deck"></div>
                </div>
                <h1 className="title">property <br /> tycoon</h1>
                <div className="opportunity-knocks-deck">
                    <h2 className="label">Opportunity Knocks</h2>
                    <div className="deck"></div>
                </div>
            </div>
        )
        const bottomTiles: Array<any> = []
        for (let i: number = 10; i >= 2; i--) {
            bottomTiles.push(
                <Tile name={ "tile-" + i } price="200" hasPlayer={ false } color="brown" type="property"></Tile>
            )
        }
        const leftTiles: Array<any> = []
        for (let i: number = 20; i >= 12; i--) {
            leftTiles.push(
                <Tile name={ "tile-" + i } price="200" hasPlayer={ false } color="light-blue" type="property"></Tile>
            )
        }
        const topTiles: Array<any> = []
        for (let i: number = 22; i <= 30; i++) {
            topTiles.push(
                <Tile name={ "tile-" + i } price="200" hasPlayer={ false } color="red" type="property"></Tile>
            )
        }
        const rightTiles: Array<any> = []
        for (let i: number = 32; i <= 40; i++) {
            rightTiles.push(
                <Tile name={ "tile-" + i } price="200" hasPlayer={ false } color="green" type="property"></Tile>
            )
        }

        return (
            <div className="board">
                { baseBoard }
                <div className="space corner go">
                    <div className="container">
                        <div className="instructions">Collect £200.00 salary as you pass</div>
                        <div className="go-word">go</div>
                    </div>
                    <div className="arrow fa fa-long-arrow-left"></div>
                </div>
                { bottomTiles }
                <div className="space corner jail">
                    <div className="just">Just</div>
                    <div className="drawing">
                        <div className="container">
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
                <div className="row vertical-row left-row">
                    { leftTiles }
                </div>
                <div className="space corner free-parking">
                    <div className="container">
                        <div className="name">Free</div>
                        <i className="drawing fa fa-car"></i>
                        <div className="name">Parking</div>
                    </div>
                </div>
                <div className="row horizontal-row top-row">
                    { topTiles }
                </div>
                <div className="space corner go-to-jail">
                    <div className="container">
                        <div className="name">Go To</div>
                        <i className="drawing fa fa-gavel"></i>
                        <div className="name">Jail</div>
                    </div>
                </div>
                <div className="row vertical-row right-row">
                    { rightTiles }
                </div>
            </div>
        )
    }
}

export { Board }

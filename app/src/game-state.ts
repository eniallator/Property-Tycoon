// game-state.ts
/**
 * Definition of Game State
 * 
 * authors: Michael K., Alexandru C.
 * @packageDocumentation
 */

import { Player } from './player'
import { Property } from './tile'
//import { Card } from './card'  // TODO: Does Card need to be in its own file?


// Game State
enum GamePhase { PLAYER_MOVE }
type Card = string

interface GameState {
    gamePhase: GamePhase
    players: Array<Player>
    activePlayer: Player
    properties: Array<Property>
    //cards: Array<Card>
}


export { GameState }
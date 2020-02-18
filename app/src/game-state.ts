// game-state.ts
/**
 * Definition of Game State
 * 
 * authors: Michael K., Alexandru C.
 * @packageDocumentation
 */
import { Player } from './player'
import { Property } from './tile'

// Game State
enum GamePhase { PLAYER_MOVE }
type Card = string

interface GameState {
    gamePhase: GamePhase
    players: Array<Player>
    activePlayer: Player
    properties: Array<Property>
    cards: Array<Card>
}

export { GameState }
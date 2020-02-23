/**
 * Test State
 */


const { State, GamePhase, StateM } = require('../dist/core')


// State initialization
test('Initialize the game state', () => {
    const s = StateM.createGameState()
    
    // Parameters
    const initialState = GamePhase.PLAYER_MOVE // TODO: Should be Main Menu

    // Initial State
    expect(s.gamePhase),toEqual(initialState)

    // No. players
    // TODO: Initially game has no players

    // Active Player
    // TODO: Active player is first in collection

    // Tiles
    // TODO: Initially game has no properties
})
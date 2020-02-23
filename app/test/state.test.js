/**
 * Test State
 */


const { State, GamePhase, StateM } = require('../dist/core')


// State initialization
test('Initialize the game state', () => {
    const numTiles = 40
    const s = StateM.createGameState(numTiles)
    
    // Initial State
    expect(s.gamePhase).toEqual(GamePhase.PLAYER_MOVE)

    // No. players
    expect(s.players).toHaveLength(6)

    // Active Player
    expect(s.activePlayer).toEqual(1)

    // Tiles
    expect(s.tiles).toHaveLength(numTiles)
})
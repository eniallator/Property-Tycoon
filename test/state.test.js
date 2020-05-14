/**
 * Test State
 */


const { StateM, GamePhase } = require("../build/game_data/state")


// State initialization
test('Initialize the game state', () => {
    const s = StateM.initialState()
    
    // Initial State
    expect(s.gamePhase).toEqual(GamePhase.MAIN_MENU)

    // No. players
    expect(s.players).toHaveLength(0)

    // Active Player
    expect(s.activePlayer).toEqual(0)

    // Tiles
    expect(s.tiles).toHaveLength(0)
})
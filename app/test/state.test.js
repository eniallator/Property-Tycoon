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
    expect(s.activePlayer).toEqual(0)

    // Tiles
    expect(s.tiles).toHaveLength(numTiles)
})

// Move player across the board
test('Move player on board', () => {
    const numTiles = 40
    const regSteps = 5
    const bigSteps = 500
    const backSteps = -bigSteps

    const s = StateM.createGameState(numTiles)
    const active = s.activePlayer

    // Regular steps
    const sReg = StateM.movePlayer(s, regSteps)
    expect(sReg.players[active].position).toEqual(regSteps)

    // Leap
    const sLeap = StateM.movePlayer(s, bigSteps)
    expect(sLeap.players[active].position).toBeLessThan(40)
    expect(sLeap.players[active].position).toBeGreaterThan(-1)

    // Back Leap
    const sBack = StateM.movePlayer(s, backSteps)
    expect(sBack.players[active].position).toBeLessThan(40)
    expect(sBack.players[active].position).toBeGreaterThan(-1)
    
})

// Next Turn
// TODO: Write unit test for next turn
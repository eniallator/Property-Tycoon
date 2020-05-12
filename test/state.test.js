/**
 * Test State
 */


const { StateM, GamePhase } = require("../build/game_data/state")
const { PlayerM, Token } = require("../build/game_data/player")


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

// Mapping nested data
test('Targeted player mapping - One Change', () => {
    let s1 = StateM.initialState()
    let target = 1

    const p0 = PlayerM.createPlayer(Token.BOOT, true)
    const p1 = PlayerM.createPlayer(Token.CAT, true)
    const p2 = PlayerM.createPlayer(Token.HATSTAND, true)
    s1.players.push(p0)
    s1.players.push(p1)

    let s2 = StateM.mapPlayer(s1, target, (p) => p2)

    expect(s1.players[target]).not.toEqual(s2.players[target])
    expect(s2.players[target]).toEqual(p2)
})

test('Targeted player mapping - No changes', () => {
    let s1 = StateM.initialState()
    let target = 1

    const p0 = PlayerM.createPlayer(Token.BOOT, true)
    const p1 = PlayerM.createPlayer(Token.CAT, true)
    s1.players.push(p0)
    s1.players.push(p1)

    let s2 = StateM.mapPlayer(s1, target, (p) => p1)

    expect(s1.players[target]).toEqual(s2.players[target])
    expect(s2.players[target]).toEqual(p1)

})
/**
 * Test Player
 */


const { Player, Token, PlayerM } = require('../build/game_data/player')


// Player initialization
test('Initialize a new player', () => {
    const id = 0
    const token = Token.BOOT
    const isHuman = true
    const p = PlayerM.createPlayer(token, isHuman)

    // Check Position = 0
    expect(p.position).toEqual(0)

    // Check Cash = ???
    expect(p.cash).toEqual(1500)

    // Check no properties owned
    expect(p.properties).toEqual(new Set())

    // Check not in jail
    expect(p.inJail).toBeFalsy()

    // Check special cards
    // TODO
})

// Player movement
test('Move player to new position', () => {
    const pos = 3
    const p = PlayerM.createPlayer(0, Token.BOOT)

    // Move 3 steps
    const p1 = PlayerM.move(pos, p)
    expect(p1.position).toEqual(pos)
})
// Test Player

const { Player, Token, PlayerM } = require('../dist/core')

// Test player movement
test('Move player N steps', () => {
    const steps = 3
    const p = PlayerM.createPlayer(0, Token.BOOT)

    // Move 3 steps
    const p1 = PlayerM.move(steps, p)
    expect(p1.position).toEqual(steps)

    // Move another 3 steps
    const p2 = PlayerM.move(steps, p1)
    expect(p2.position).toEqual(steps * 2)
})
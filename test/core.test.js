/**
 * Core tests
 */

 
const { Core, CoreM } = require("../build/core/core")
const { StateM, GamePhase } = require("../build/game_data/state")
const { PlayerConfig } = require("../build/game_data/command")
const { Token } = require("../build/game_data/player")


const devConfig = [
    { token: Token.GOBLET, isHuman: true },
    { token: Token.CAT, isHuman: false }
]

test("Start Game -- Clean", () => {
    const initState = StateM.initialState()

    const config = [
        { token: Token.GOBLET, isHuman: true },
        { token: Token.CAT, isHuman: false },
        { token: Token.HATSTAND, isHuman: true },
        { token: Token.BOOT, isHuman: true },
        { token: Token.SMARTPHONE, isHuman: false },
        { token: Token.SPOON, isHuman: true}
    ]

    const state = CoreM.startGame(config, initState)

    expect(state.players).toHaveLength(config.length)
    expect(state.tiles).toHaveLength(40)
    expect(state.doubleCount).toEqual(0)
    expect(state.gamePhase).toEqual(GamePhase.PLAYER_MOVE)

})

test("Start Game -- Extra Player Truncation", () => {
    const initState = StateM.initialState()

    const config = [
        { token: Token.GOBLET, isHuman: true },
        { token: Token.CAT, isHuman: false },
        { token: Token.HATSTAND, isHuman: true },
        { token: Token.BOOT, isHuman: true },
        { token: Token.SMARTPHONE, isHuman: false },
        { token: Token.SPOON, isHuman: true},
        { token: Token.CAT, isHuman: false },
        { token: Token.CAT, isHuman: false },
        { token: Token.CAT, isHuman: false }
    ]

    const state = CoreM.startGame(config, initState)

    expect(state.players).toHaveLength(6)
})

test("Start Game -- Unique Tokens", () => {
    const initState = StateM.initialState()

    const config = [
        { token: Token.GOBLET, isHuman: true },
        { token: Token.CAT, isHuman: false },
        { token: Token.CAT, isHuman: true },
    ]

    const state = CoreM.startGame(config, initState)

    expect(state.players).toHaveLength(2)
    expect(state.players.filter(p => p.token == Token.CAT)).toHaveLength(1)
})

test("Pause Game", () => {
    const initState = CoreM.startGame(devConfig, StateM.initialState())

    const state = CoreM.pauseGame(initState)

    expect(state.gamePhase).toEqual(GamePhase.PAUSE_MENU)
})

test("Move Player", () => {
    const initState = CoreM.startGame(devConfig, StateM.initialState())

    const state = CoreM.move({ steps: 3}, initState)

    expect(state.players[state.activePlayer].position).toEqual(3)
})

test("End Game", () => {
    const initState = CoreM.startGame(devConfig, StateM.initialState())

    const state = CoreM.endGame(initState)

    expect(state.gamePhase).toEqual(GamePhase.END_GAME)
})
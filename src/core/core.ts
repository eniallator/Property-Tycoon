// core.ts
/**
 * Logic Core - The central unit of the entire engine. Receives game commands,
 * the previous game state, and outputs the new game state.
 * 
 * authors: Michael K., Alexandru C.
 * @packageDocumentation
 */

import { 
    GameState, 
    RollData, CommandType, GameCommand,
    Tile,
    Player 
} from '.'


class Core {
    constructor() {
        // Initialize Core
    }

    update(state: GameState, cmd: GameCommand) {
        const { type, data } = cmd
        let newState = { ...state }

        switch ( type ) {
            case CommandType.ROLL:
                Logic.move(cmd.data as RollData, newState)
                break;
        }
    }
}

// State Update Functions
namespace Logic {
    export function move(data: RollData, state: GameState): void {
        const { dice: [ die1, die2 ] } = data
        const { doubleCount } = state

        // Double rolled
        if ( die1 == die2 ) {
            // Triple double sends player to jail
            if ( doubleCount >= 2 ) {
                state.doubleCount = 0  // Reset double count
                state.activePlayer.inJail = true  // Send player to jail
            }
            state.doubleCount += 1
        }
    }
}

// core.ts
/**
 * Logic Core - The central unit of the entire engine. Receives game commands,
 * the previous game state, and outputs the new game state.
 * 
 * authors: Michael K., Alexandru C.
 * @packageDocumentation
 */

import { 
    State, 
    Command, CommandType, CommandUtil,
    Tile,
    Player
} from '.'


class Core {
    constructor() {
        // Initialize Core
    }

    update(state: State, cmd: Command): State {
        const { type, data } = cmd
        let newState = { ...state }

        switch ( type ) {
            case CommandType.ROLL:
                // Move the player according to the roll
                Logic.move(cmd.data as CommandUtil.RollData, newState)
                break;
        }

        return newState
    }
}

// State Update Functions
namespace Logic {
    export function move(data: CommandUtil.RollData, state: State): void {
        const { dice: [ die1, die2 ] } = data
        const { doubleCount, activePlayer } = state


        // Double rolled
        if ( die1 == die2 ) {

            // Three doubles sends player to jail
            if ( doubleCount >= 2 ) {
                state.doubleCount = 0  // Reset double count
                activePlayer.inJail = true  // Send player to jail
            }
            state.doubleCount += 1
        } else {
            // Move player by roll
        }
    }
}

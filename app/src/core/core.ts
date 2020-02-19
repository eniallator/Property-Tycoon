// core.ts
/**
 * Logic Core - The central unit of the entire engine. Receives game commands,
 * the previous game state, and outputs the new game state.
 * 
 * authors: Michael K., Alexandru C.
 * @packageDocumentation
 */

import { 
    State, StateUtil,
    Command, CommandType, CommandUtil,
    Tile,
    Player, PlayerUtil
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
                Logic.move(cmd.data as CommandUtil.RollData, newState)
                break;
        }

        return newState
    }
}

// Game Logic Functions
namespace Logic {
    export function move(data: CommandUtil.RollData, state: State): State {
        const { dice: [ die1, die2 ] } = data
        const { activePlayer } = state

        return StateUtil.movePlayer(state, die1 + die2)
    }
}

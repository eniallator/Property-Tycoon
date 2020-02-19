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


/**
 * Core class. Responsible for mapping [[GameState]] to new GameState given some input commands
 */
class Core {
    constructor() {
        // Initialize Core
    }

    /**
     * Update the game states with game logic, given some input commands
     * @param state Current game state to uodate
     * @param cmd Command to process and update state with respect to
     */
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
    /**
     * Moves player on board according to dice rolled
     * @param data Data held by the roll command (value of two dice)
     * @param state Current state of the game
     */
    export function move(data: CommandUtil.RollData, state: State): State {
        const { dice: [ die1, die2 ] } = data
        const { activePlayer } = state

        return StateUtil.movePlayer(state, die1 + die2)
    }
}

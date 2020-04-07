// agent.ts
/**
 * Agent
 * 
 * authors: Alexandru C.
 * @packageDocumentation
 */

import { Command, CommandType } from "../game_data/command"
import { Player } from "../game_data/player"
import { State } from "../game_data/state"


/**
 * Agent interface. Represents the AI Agent, with all of its fields and functions
 */
interface Agent { }


// Utility functions and types
namespace AgentM {

    /**
     * Gives the most advantageous command for the active player
     * - `state`: Current game state
     * 
     * TODO: Utility function; what should the Agent try maximise?
     */
    export function nextCommand(state: State): Command {
        // Get active player
        const player: Player = state.players[state.activePlayer]

        // Come up with a command
        let command: Command = { type: CommandType.ROLL, data: { dice: [1, 1] } }

        // Return command
        return command
    }
}

export { AgentM }
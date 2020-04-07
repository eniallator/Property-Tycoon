// game-command.ts
/**
 * Game Command Schema
 * Game commands are how the Input module communicates with the Logic Core
 * 
 * authors: Michael K., Alexandru C.
 * @packageDocumentation
 */


/**
 * Command types:
 * - `ROLL`: Player has rolled their die
 * - `START_GAME`: User starts a new game
 * - `PAUSE_GAME`: Player pauses the current game
 * - `UNPAUSE_GAME`: Player unpauses the current game
 * - `END_GAME`: Player (or Core?) ends the current game
 */
enum CommandType {
    ROLL,
    START_GAME,
    PAUSE_GAME,
    UNPAUSE_GAME,
    END_GAME
}

/**
 * GameCommands are sent by the Input and processed by Core
 * - `type`: Type of command sent
 * - `data`: TODO: Document this field. Was made optional when working on the Main Menu by @alexandru and @niall
 */
interface Command {
    type: CommandType
    data?: CommandData
}

type CommandData = RollData // | ... other command data types


// Roll die data is the value represented by 2 dice
type Die = 1 | 2 | 3 | 4 | 5 | 6
interface RollData {
    dice: [Die, Die]
}

// TODO @alexandru
// interface StartGameData {
//     players: Array<Player>
// }

// ------------

namespace CommandM {

    // TODO: @alexandru says: Document what this function does
    export function renderCommand(cmd: Command) {
        const { type, data } = cmd

        const typeStr: string = CommandType[type]
        let dataStr: string

        switch (type) {
            case CommandType.START_GAME:
                // dataStr = data.players.toString() //TODO @alexandru
                break;
            case CommandType.PAUSE_GAME:
                break;
            case CommandType.UNPAUSE_GAME:
                break;
            case CommandType.END_GAME:
                break;
            case CommandType.ROLL:
                dataStr = data.dice.toString()
                break;
        }

        return `${typeStr} : ${dataStr}`
        
    }
}

export {
    Command,
    CommandType,
    CommandM,

    // Command Data Types
    RollData
}
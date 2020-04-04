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
 */
enum CommandType { ROLL }

/**
 * GameCommands are sent by the Input and processed by Core
 * - `type`: Type of command sent
 */
interface Command {
    type: CommandType
    data: CommandData
}

type CommandData = RollData // | ... other command data types


// Roll die data is the value represented by 2 dice
type Die = 1 | 2 | 3 | 4 | 5 | 6
interface RollData {
    dice: [Die, Die]
}

// ------------

namespace CommandM {

    // TODO: @alexandru says: Document what this function does
    export function renderCommand(cmd: Command) {
        const { type, data } = cmd

        const typeStr: string = CommandType[type]
        let dataStr: string

        switch (type) {
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
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

type CommandData = CommandUtil.RollData // | ... other command data types

namespace CommandUtil {
    // Roll die data is the value represented by 2 dice
    type Die = 1 | 2 | 3 | 4 | 5 | 6
    export interface RollData {
        dice: [ Die, Die ]
    }
}

 export { 
     Command,
     CommandType,
     CommandUtil
}
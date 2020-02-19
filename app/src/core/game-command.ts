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
interface GameCommand {
     type: CommandType
     data: RollData
 }


type Die = 1 | 2 | 3 | 4 | 5 | 6
interface RollData {
    dice: [ Die, Die]
}

 export { 
     CommandType,
     RollData
}
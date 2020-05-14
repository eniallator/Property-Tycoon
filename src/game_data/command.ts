// game-command.ts
/**
 * Commands relayed to the Core module
 * 
 * Commands represent some action the player has done on the GUI.
 * The Core receives these actions and processes them, along with the
 * current game state, to produce the new game state
 * 
 * authors: Michael K., Alexandru C.
 * @packageDocumentation
 */


import { Token } from './player'

// Concrete Command Types
// Game initialization, flow, and destruction
export type StartGameCmd = Command<StartGameData>
export type EndGameCmd = NullaryCmd
export type PauseCmd = NullaryCmd
export type UnpauseCmd = NullaryCmd

// Player movement
export type MovePlayerCmd = Command<MovePlayerData>

// Property purchase and management
export type BuyCmd = Command<BuyData>
export type PassCmd = Command<PassData>
export type ImproveCmd = Command<ImproveData>

// Jail
export type BailCmd = NullaryCmd

// Next Turn
export type NextTurnCmd = NullaryCmd

/**
 * Helper type for commands without any data
 */
type NullaryCmd = Command<null>

// Command Schema
/**
 * Commands passed into the Core for processing
 */
interface Command<T> {
    /**
     * Type of command sent. Of [[CommandType]]
     */
    type: CommandType

    /**
     * Some commands (such as [[BuyCmd]]) carry additional data
     */
    data?: T
}



/**
 * Command types:
 * - `ROLL`: Player has rolled their die
 * - `START_GAME`: User starts a new game
 * - `PAUSE_GAME`: Player pauses the current game
 * - `UNPAUSE_GAME`: Player unpauses the current game
 * - `END_GAME`: Player (or Core?) ends the current game
 */
enum CommandType {
    START_GAME,
    PAUSE_GAME,
    UNPAUSE_GAME,
    END_GAME,
    MOVE_PLAYER,
    BUY,
    PASS,
    BAIL,
    IMPROVE,
    NEXT_TURN
 }

// Types of CommandData
/**
 * Data required to start a new game
 */
interface StartGameData { 
    playerConfig: Array<PlayerConfig> 
}
interface PlayerConfig {
    token: Token
    isHuman: boolean
}

/**
 * Data required to move a player
 */
interface MovePlayerData {
    steps: number
}

/**
 * Data required to purchase a property tile
 */
interface BuyData {
    propertyId: number
}

/**
 * Data required to purchase a property tile.
 * Is essentially the same as [[BuyData]], so only a type synonym
 * is needed
 */
type PassData = BuyData

/**
 * Data required to improve a property
 */
interface ImproveData {
    propertyId: number,
    amount: number
}


/**
 * Utility functions from the [[Command]] module
 */
namespace CommandM {

    /**
     * Start a new game
     * @param playerConfig Configuration parameters for each player in the new game
     */
    export function startGame(playerConfig: Array<PlayerConfig>): StartGameCmd {
        return {
            type: CommandType.START_GAME,
            data: { playerConfig: playerConfig }
        }
    }

    /**
     * Return to main menu if currently in game. Exit program entirely
     * if in the main menu
     */
    export function endGame(): EndGameCmd {
        return { type: CommandType.END_GAME }
    }

    /**
     * Pause ongoing game
     */
    export function pauseGame(): PauseCmd {
        return { type: CommandType.PAUSE_GAME }
    }

    /**
     * Resume ongoing game
     */
    export function unpauseGame(): UnpauseCmd {
        return { type: CommandType.UNPAUSE_GAME }
    }

    /**
     * Move player on the board
     * @param steps Number of steps to move
     */
    export function movePlayer(steps: number): MovePlayerCmd {
        return {
            type: CommandType.MOVE_PLAYER,
            data: { steps: steps }
        }
    }

    /**
     * Buy property
     * @param propertyId ID of property to buy
     */
    export function buy(propertyId: number): BuyCmd {
        return {
            type: CommandType.BUY,
            data: { propertyId: propertyId }
        }
    }

    /**
     * Pass on buying a property
     * @param propertyId ID of property to not purchase
     */
    export function pass(propertyId: number): PassCmd {
        return {
            type: CommandType.PASS,
            data: { propertyId: propertyId }
        }
    }

    /**
     * Bail self out of jail
     */
    export function bail(): BailCmd {
        return  { type: CommandType.BAIL }
    }

    /**
     * Improve property by amount specified. If positive, will add
     * houses / hotel, if negative will remove houses / hotel
     * @param propertyId ID of property to improve
     * @param amount Offset to improve by
     */
    export function improve(propertyId: number, amount: number): ImproveCmd {
        return {
            type: CommandType.IMPROVE,
            data: { propertyId: propertyId, amount: amount }
        }
    }

    /**
     * Proceed to next turn
     */
    export function nextTurn(): NextTurnCmd {
        return { type: CommandType.NEXT_TURN }
    }

    // Helpers
    /**
     * Render command as string
     * @ignore
     */
    export function renderCommand(cmd: Command<any>) {
        const { type, data } = cmd

        const typeStr: string = CommandType[type]
        let dataStr: string

        return `${typeStr}`
    }
}

export {
    Command,
    CommandType,
    CommandM,
    
    PlayerConfig,
    StartGameData,
    MovePlayerData,
    BuyData,
    PassData,
    ImproveData,
}
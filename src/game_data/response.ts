// response.ts
/**
 * Responses sent from the [[Core]]
 * 
 * Each response represents some activity that has occurred within the Core.
 *  
 * Take the example of a player paying some taxes:
 * 1. The GUI rolls the dice and sends off a [[MovePlayerCmd]] to the [[IO]] bus
 * 2. The command eventually gets to the core. Two things happen, the player moves, and lands on a tax tile to pay tax
 * 3. The responses sent back (in this order) are: MOVE ( steps ) and  PAY_TAX ( amount )
 * 
 * For responses that require an active player source (such as move, or the source of rent), the
 * active player is assumed to be that present within the [[State]] at that point. We can make
 * this assumption safely since the only time this player changes is explicitly after the NEXT_TURN
 * command.
 * 
 * From here on "Player" refers to this active player
 * 
 * authors: Michael K.
 * @packageDocumentation
 */

 // Concrete Response types
/**
 * A new game has been initialized
 */
export type BeginGameResp = NullableResp

/**
 * The current game has ended
 */
export type EndGameResp = NullableResp

/**
 * The current running game has been paused
 */
export type PauseResp = NullableResp

/**
 * The current running game has been unpaused
 */
export type UnpauseResp = NullableResp

/**
 * Player has moved to the active position
 */
export type MoveResp = Resp<MoveData>

/**
 * Player has paid rent to target player
 */
export type RentResp = Resp<RentData>

/**
 * Player has paid taxes
 */
export type TaxResp = Resp<TaxData>

/**
 * Player has passed GO
 */
export type GoResp = NullableResp

/**
 * Player has the option to purchase a property
 */
export type PurchaseResp = Resp<PurchaseData>

/**
 * Player has been sent to jail
 */
export type GoToJailResp = NullableResp

/**
 * Player has landed on the Free Parking slot
 */
export type FreeParkingResp = NullableResp

/**
 * Player does not have sufficient funds for operation
 */
export type InsufficientFundsResp = NullableResp

/**
 * Player does not have enough assets to repay debt and been declared bankrupt
 */
export type BankruptResp = Resp<BankruptData>

/**
 * Player has left jail
 */
export type LeaveJailResp = NullableResp

/**
 * Player has acquired property
 */
export type AcquirePropResp = Resp<AcquireData>

/**
 * Player has improved property
 */
export type ImprovePropResp = Resp<ImproveData>

/**
 * Player is able to manage their properties and status
 */
export type ManagePropResp = NullableResp

/**
 * It is now the next turn
 */
export type NextTurnResp = NullableResp



/**
 * Helper type for empty responses
 */
type NullableResp = Resp<null>

interface Resp<T> {
    type: RespType
    data?: T
}


enum RespType {
    // Game initialization and flow
    BEGIN_GAME,
    END_GAME,
    PAUSE,
    UNPAUSE,

    // Events happening to the player
    MOVE,
    PAY_RENT,
    PAY_TAX,
    PASS_GO,
    PURCHASE,
    GO_TO_JAIL,
    FREE_PARKING,
    INSUFFICIENT_FUNDS,
    BANKRUPT,

    // Player actions
    LEAVE_JAIL,
    ACQUIRE_PROPERTY,
    IMPROVE_PROPERTY,

    // General post-move/buy phase for administrative tasks
    MANAGE_PROPERTY,

    // Proceed to next turn
    NEXT_TURN
}


// Concrete RespData types
interface MoveData {
    /**
     * New position
     */
    position: number 
}

interface PurchaseData { 
    /**
     * ID of purchasable property
     */
    propertyId: number 
}

interface RentData { 
    /**
     * ID of property
     */
    propertyId: number,

    /**
     * Landlord player who has been paid rent
     */
    targetId: number,

    /**
     * Amount of rent paid
     */
    amount: number
}

interface TaxData { 
    /**
     * Amount of tax paid
     */
    amount: number 
}

interface AcquireData { 
    /**
     * ID of property
     */
    propertyId: number 
}

interface ImproveData { 
    /**
     * ID of property improved
     */
    propertyId: number

    /**
     * New improvement level
     */
    level: number
}

interface BankruptData {
    playerId: number
}

/**
 * Resp functional interface
 */
namespace RespM {
    export function beginGame(): BeginGameResp { 
        return { type: RespType.BEGIN_GAME }
    }

    export function endGame(): EndGameResp {
        return { type: RespType.END_GAME }
    }

    export function pause(): PauseResp {
        return { type: RespType.PAUSE }
    }

    export function unpause(): UnpauseResp {
        return { type: RespType.UNPAUSE }
    }

    export function move(pos: number): MoveResp {
        return {
            type: RespType.MOVE,
            data: { position: pos }
        }
    }

    export function payRent(propId: number, targetId: number, amount: number): RentResp {
        return {
            type: RespType.PAY_RENT,
            data: { 
                propertyId: propId,
                targetId: targetId, 
                amount: amount 
            }
        }
    }

    export function payTax(amount: number): TaxResp {
        return {
            type: RespType.PAY_TAX,
            data: { amount: amount }
        }
    }

    export function passGo(): GoResp {
        return { type: RespType.PASS_GO }
    }

    export function purchase(prop: number): PurchaseResp {
        return {
            type: RespType.PURCHASE,
            data: { propertyId: prop }
        }
    }

    export function goToJail(): GoToJailResp {
        return { type: RespType.GO_TO_JAIL }
    }

    export function freeParking(): FreeParkingResp {
        return { type: RespType.FREE_PARKING }
    }

    export function insufficientFunds(): InsufficientFundsResp {
        return { type: RespType.INSUFFICIENT_FUNDS }
    }

    export function bankrupt(playerId: number): BankruptResp {
        return { 
            type: RespType.BANKRUPT,
            data: { playerId: playerId }
         }
    }

    export function leaveJail(): LeaveJailResp {
        return { type: RespType.LEAVE_JAIL }
    }

    export function acquireProperty(prop: number): AcquirePropResp {
        return { type: RespType.ACQUIRE_PROPERTY }
    }

    export function improveProp(propId: number, level: number): ImprovePropResp {
        return {
            type: RespType.IMPROVE_PROPERTY,
            data: { propertyId: propId, level: level }
        }
    }

    export function manageProp(): ManagePropResp {
        return { type: RespType.MANAGE_PROPERTY }
    }

    export function nextTurn(): NextTurnResp {
        return { type: RespType.NEXT_TURN }
    }
    
}

export {
    Resp, RespType, RespM
}
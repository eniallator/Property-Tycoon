// props.ts
/**
 * Props - 
 * 
 * authors: Michael K., Alexandru C., Niall C.C., Joe F.
 * @packageDocumentation
 */

import { State } from '../game_data/state'
import { IO } from '../io/io'
// Token Mapping
/**
 * - Receive props takes in a state
 * - Send Props sends an IO, for commands. 
 */
type SendProps = {
    io: IO
}

type ReceiveProps = {
    state: State
}

type SendReceiveProps = SendProps & ReceiveProps

export { SendProps, ReceiveProps, SendReceiveProps }

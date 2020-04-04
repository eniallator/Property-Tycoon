import { State } from '../game_data/state'
import { IO } from '../io/io'

type SendProps = {
    io: IO
}

type ReceiveProps = {
    state: State
}

type SendReceiveProps = SendProps & ReceiveProps

export { SendProps, ReceiveProps, SendReceiveProps }

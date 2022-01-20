import { IncomingPayloadPlayerUpdate } from "./playerUpdate"
import { IncomingPayloadStats } from "./stats"
import { IncomingPayloadEvent } from "./event"

/** Incoming message opcodes */
export type OpCodesIncoming =
    | "playerUpdate"
    | "stats"
    | "event"

/** Base of incoming payload */
export interface IncomingPayloadBase {
    /** The incoming op code */
    op: OpCodesIncoming
}

/** Type of incoming payload */
export type IncomingPayload =
    | IncomingPayloadPlayerUpdate
    | IncomingPayloadStats
    | IncomingPayloadEvent

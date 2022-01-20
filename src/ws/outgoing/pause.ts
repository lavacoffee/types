import { OutgoingPayloadBase } from "./base"

/** Pause options */
export interface OutgoingPause {
    /** The player guild id */
    guildId: string
    /** Whether to pause or resume */
    pause: boolean
}

/** Pause payload */
export interface OutgoingPayloadPause extends OutgoingPayloadBase, OutgoingPause {
    op: "pause"
}

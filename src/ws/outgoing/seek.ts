import { OutgoingPayloadBase } from "./base"

/** Seek options */
export interface OutgoingSeek {
    /** The player guild id */
    guildId: string
    /** Timestamp at which to seek */
    position: number
}

/** Seek payload */
export interface OutgoingPayloadSeek extends OutgoingPayloadBase, OutgoingSeek {
    op: "seek"
}

import { OutgoingPayloadBase } from "./base"

/** Play options */
export interface OutgoingPlay {
    /** The player guild id */
    guildId: string
    /** The base-64 encoded serialized track */
    track: string
    /** Timestamp at which the track started */
    startTime?: number
    /** Timestamp at which the track ended */
    endTime?: number
    /** The player volume */
    volume?: number
    /** Whether to not replace current track, if any */
    noReplace: boolean
    /** Whether to pause the player */
    pause?: boolean
}

/** Play payload */
export interface OutgoingPayloadPlay extends OutgoingPayloadBase, OutgoingPlay {
    op: "play"
}

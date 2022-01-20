import { OutgoingPayloadBase } from "./base"

/** Volume options */
export interface OutgoingVolume {
    /** The player guild id */
    guildId: string
    /** The player volume to set */
    volume: number
}

/** Volume payload */
export interface OutgoingPayloadVolume extends OutgoingPayloadBase, OutgoingVolume {
    op: "volume"
}

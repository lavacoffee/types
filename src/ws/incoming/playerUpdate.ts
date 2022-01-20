import { IncomingPayloadBase } from "./base"

/** Player state */
export interface LavaPlayerState {
    /** Timestamp at which the player is last updated */
    time: number
    /** Track position in milliseconds, omitted if player isn't playing anything */
    position?: number
    /** Whether the player is connected to voice gateway */
    connected: boolean
}

/** Player update data */
export interface IncomingPlayerUpdate {
    /** The player guild id */
    guildId: string
    /** The player state */
    state: LavaPlayerState
}

/** Player update payload */
export interface IncomingPayloadPlayerUpdate extends IncomingPayloadBase, IncomingPlayerUpdate {
    op: "playerUpdate"
}

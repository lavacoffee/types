import { OutgoingPayloadBase } from "./base"

/** Voice server data */
export interface DiscordVoiceServerData {
    /** The voice session token */
    token: string
    /** The voice session guild id */
    guild_id: string
    /** The voice session endpoint */
    endpoint: string
}

/** Voice update options */
export interface OutgoingVoiceUpdate {
    /** The player guild id */
    guildId: string
    /** The voice server data */
    event: DiscordVoiceServerData
    /** The voice session id */
    sessionId: string
}

/** Voice update payload */
export interface OutgoingPayloadVoiceUpdate extends OutgoingPayloadBase, OutgoingVoiceUpdate {
    op: "voiceUpdate"
}

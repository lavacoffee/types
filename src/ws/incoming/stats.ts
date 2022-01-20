import { IncomingPayloadBase } from "./base"

/** Memory stats */
export interface LavaMemoryStats {
    /** Amount of free memory */
    free: number
    /** Amount of used memory */
    used: number
    /** Amount of allocated memory */
    allocated: number
    /** Amount of reservable memory */
    reservable: number
}

/** CPU stats */
export interface LavaCPUStats {
    /** Amount of cpu cores */
    cores: number
    /** The cpu load within the system */
    systemLoad: number
    /** The cpu load within lavalink */
    lavalinkLoad: number
}

/** Frame stats */
export interface LavaFrameStats {
    /** Average frames sent per minute */
    sent: number
    /** Average frames nulled per minute */
    nulled: number
    /** Average frames deficit per minute */
    deficit: number
}

/** Stats data */
export interface IncomingStats {
    /** Amount of players within the session */
    players: number
    /** Amount of players that are currently playing a track */
    playingPlayers: number
    /** The server uptime since launch */
    uptime: number
    /** The server memory stats */
    memory: LavaMemoryStats
    /** The server cpu stats */
    cpu: LavaCPUStats
    /** THe server frame stats */
    frameStats: LavaFrameStats
}

/** Stats payload */
export interface IncomingPayloadStats extends IncomingPayloadBase, IncomingStats {
    op: "stats"
}

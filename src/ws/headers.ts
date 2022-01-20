/** The headers for lavalink socket conneciton */
export interface ConnectionHeaders {
    /** The lavalink server password */
    Authorization: string
    /** The client id */
    "User-Id": string
    /** The client name */
    "Client-Name": string
    /** Amount of the client shards */
    "Num-Shards": string
    /** Resume key for resuming, if any */
    "Resume-Key"?: string
}

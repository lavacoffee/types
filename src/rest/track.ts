/** Type of track info */
export interface TrackInfo {
    /** The track title */
    title: string
    /** The track author */
    author: string
    /** The track duration length */
    length: number
    /** The track identifier */
    identifier: string
    /** Whether the track is a stream */
    isStream: boolean
    /** The track uri */
    uri?: string
    /** The track source name */
    sourceName: string
    /** The track position */
    position: number
    /** Whether the track is seekable */
    isSeekable: boolean
}

/** Type of a lava track */
export interface Track {
    /** The base-64 encoded serialized track */
    track: string
    /** The track info */
    info: TrackInfo
}

/** List of lava tracks */
export type Tracks = Track[]

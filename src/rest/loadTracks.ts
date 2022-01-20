import { Tracks } from "./track"
import { Exception } from "./exception"

/** Type of load types */
export type LoadTypes =
    | "TRACK_LOADED"
    | "PLAYLIST_LOADED"
    | "SEARCH_RESULT"
    | "NO_MATCHES"
    | "LOAD_FAILED"

/** Type of playlist info */
export interface PlaylistInfo {
    /** The playlist name */
    name: string
    /** The selected track (-1, if no selected track found) */
    selectedTrack: number
}

/** Type of load result */
export type LoadResult =
    | LoadResultDefault
    | LoadResultPlaylist
    | LoadResultFailed

/** Base of load result type */
export interface LoadResultBase {
    /** The load result type */
    loadType: LoadTypes
    /** The tracks from load result */
    tracks: Tracks
}

/** Load result without special property */
export interface LoadResultDefault extends LoadResultBase {
    loadType: "TRACK_LOADED" | "SEARCH_RESULT" | "NO_MATCHES"
}

/** Load result with playlist info */
export interface LoadResultPlaylist extends LoadResultBase {
    loadType: "PLAYLIST_LOADED"
    /** The playlist info from load result */
    playlistInfo: PlaylistInfo
}

/** Load result with exception */
export interface LoadResultFailed extends LoadResultBase {
    loadType: "LOAD_FAILED"
    /** The exception from load result */
    exception: Exception
}

import { IncomingPayloadEventBase } from "./base"
import { Exception } from "../../../rest"

/** Incoming track event types */
export type IncomingTrackEventTypes =
    | "TrackStartEvent"
    | "TrackEndEvent"
    | "TrackExceptionEvent"
    | "TrackStuckEvent"

/** Base of incoming track event payload */
export interface IncomingPayloadTrackEventBase extends IncomingPayloadEventBase {
    type: IncomingTrackEventTypes
    /** The base-64 encoded serialized track */
    track: string
}

/** Track start payload */
export interface IncomingPayloadTrackEventStart extends IncomingPayloadTrackEventBase {
    type: "TrackStartEvent"
}

/** Audio track end reason */
export type LavaTrackEndReason =
    | "FINISHED"
    | "LOAD_FAILED"
    | "STOPPED"
    | "REPLACED"
    | "CLEANUP"

/** Track end payload */
export interface IncomingPayloadTrackEventEnd extends IncomingPayloadTrackEventBase {
    type: "TrackEndEvent"
    /** Reason why the track is ended */
    reason: LavaTrackEndReason
}

/** Exception with additional 'cause' property */
export type ExceptionWithCause = Exception & { cause: string }

/** Track exception payload */
export interface IncomingPayloadTrackEventException extends IncomingPayloadTrackEventBase {
    type: "TrackExceptionEvent"
    /** The exception object */
    exception: ExceptionWithCause
}

/** Track stuck payload */
export interface IncomingPayloadTrackEventStuck extends IncomingPayloadTrackEventBase {
    type: "TrackStuckEvent"
    /** The wait threshold that was exceeded */
    thresholdMs: number
}

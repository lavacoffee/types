import { IncomingPayloadBase } from "../base"
import { IncomingPayloadEventWebSocketClosed } from "./socketClosed"
import {
    IncomingTrackEventTypes,
    IncomingPayloadTrackEventStart,
    IncomingPayloadTrackEventEnd,
    IncomingPayloadTrackEventException,
    IncomingPayloadTrackEventStuck
} from "./track"

/** Incoming event types */
export type IncomingEventTypes =
    | IncomingTrackEventTypes
    | "WebSocketClosedEvent"

/** Base of incoming event payload */
export interface IncomingPayloadEventBase extends IncomingPayloadBase {
    op: "event"
    /** The event type */
    type: IncomingEventTypes
    /** The player guild id */
    guildId: string
}

/** Type of incoming event payload */
export type IncomingPayloadEvent =
    | IncomingPayloadTrackEventStart
    | IncomingPayloadTrackEventEnd
    | IncomingPayloadTrackEventException
    | IncomingPayloadTrackEventStuck
    | IncomingPayloadEventWebSocketClosed

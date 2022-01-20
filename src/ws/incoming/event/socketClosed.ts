import { IncomingPayloadEventBase } from "./base"

/** Websocket closed payload */
export interface IncomingPayloadEventWebSocketClosed extends IncomingPayloadEventBase {
    type: "WebSocketClosedEvent"
    /** Voice close event code */
    code: number
    /** The reason why the voice connection is closed */
    reason: string
    /** Whether the remote closed the socket or not */
    byRemote: boolean
}

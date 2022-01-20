import { OutgoingPayloadVoiceUpdate } from "./voiceUpdate"
import { OutgoingPayloadPlay } from "./play"
import { OutgoingPayloadStop } from "./stop"
import { OutgoingPayloadPause } from "./pause"
import { OutgoingPayloadSeek } from "./seek"
import { OutgoingPayloadVolume } from "./volume"
import { OutgoingPayloadFilters } from "./filters"
import { OutgoingPayloadDestroy } from "./destroy"
import { OutgoingPayloadConfigureResuming } from "./configureResuming"

/** Outgoing message opcodes */
export type OpCodesOutgoing =
    | "voiceUpdate"
    | "play"
    | "stop"
    | "pause"
    | "seek"
    | "volume"
    | "filters"
    | "destroy"
    | "configureResuming"

/** Base of outgoing payload */
export interface OutgoingPayloadBase {
    /** The outgoing op code */
    op: OpCodesOutgoing
}

/** Type of outgoing payload */
export type OutgoingPayload =
    | OutgoingPayloadVoiceUpdate
    | OutgoingPayloadPlay
    | OutgoingPayloadStop
    | OutgoingPayloadPause
    | OutgoingPayloadSeek
    | OutgoingPayloadVolume
    | OutgoingPayloadFilters
    | OutgoingPayloadDestroy
    | OutgoingPayloadConfigureResuming

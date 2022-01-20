import { OutgoingPayloadBase } from "./base"

/** Configure resuming options */
export interface OutgoingConfigureResuming {
    /** The resume key */
    key: string
    /** The number of seconds after disconnected before the session is closed */
    timeout?: number
}

/** Configure resuming payload */
export interface OutgoingPayloadConfigureResuming extends OutgoingPayloadBase, OutgoingConfigureResuming {
    op: "configureResuming"
}

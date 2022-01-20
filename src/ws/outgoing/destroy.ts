import { OutgoingPayloadBase } from "./base"

/** Destroy options */
export interface OutgoingDestroy {
    /** The player guild id */
    guildId: string
}

/** Destroy payload */
export interface OutgoingPayloadDestroy extends OutgoingPayloadBase, OutgoingDestroy {
    op: "destroy"
}

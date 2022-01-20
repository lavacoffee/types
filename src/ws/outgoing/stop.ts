import { OutgoingPayloadBase } from "./base";

/** Stop options */
export interface OutgoingStop {
    /** The player guild id */
    guildId: string
}

/** Stop payload */
export interface OutgoingPayloadStop extends OutgoingPayloadBase, OutgoingStop {
    op: "stop"
}

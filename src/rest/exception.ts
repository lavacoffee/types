/** Type of severity of exception */
export type Severity =
    | "COMMON"
    | "SUSPICIOUS"
    | "FAULT"

/** Type of an exception */
export interface Exception {
    /** The exception severity */
    severity: Severity
    /** The exception message */
    message: string
}

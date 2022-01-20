/** Type of an ip */
export interface Ip {
    /** The ip address */
    address: string
}

/** Types of routeplanner */
export type RoutePlannerTypes =
    | "BalancingIpRoutePlanner"
    | "RotatingIpRoutePlanner"
    | "NanoIpRoutePlanner"
    | "RotatingNanoIpRoutePlanner"

/** Types of ip */
export type IpTypes =
    | "Inet4Address"
    | "Inet6Address"

/** Type of ip block */
export interface IpBlock {
    /** Type of the block */
    type: IpTypes
    /** The ip block size */
    size: number
}

/** Type of failing ip address */
export interface FailingIpAddress {
    /** The failing ip address */
    address: string
    /** Time at which the address failing */
    failingTime: string
    /** Time at which the address failing (in timestamp) */
    failingTimestamp: number
}

/** List of failing addresses */
export type FailingIpAddresses = FailingIpAddress[]

/** Type of routePlanner status */
export type RoutePlannerStatus =
    | NotFoundRoutePlannerStatus
    | BalancingRoutePlannerStatus
    | RotatingRoutePlannerStatus
    | NanoRoutePlannerStatus
    | RotatingNanoRoutePlannerStatus

/** RoutePlanner status type if no routePlanner is set */
export interface NotFoundRoutePlannerStatus {
    /** Type of the route planner */
    class: null
    /** The route planner details */
    details: null
}

/** Base of routePlanner status type */
export interface BaseRoutePlannerStatus {
    /** Type of the route planner */
    class: RoutePlannerTypes
    /** The route planner details */
    details: BaseRoutePlannerDetails
}

/** Base of routePlanner details type */
export interface BaseRoutePlannerDetails {
    /** The currently used ip block */
    ipBlock: IpBlock
    /** List of failing ip addresses */
    failingAddresses: FailingIpAddresses
}

/** BalancingIpRoutePlanner status */
export interface BalancingRoutePlannerStatus extends BaseRoutePlannerStatus {
    class: "BalancingIpRoutePlanner"
}

/** RotatingIpRoutePlanner status */
export interface RotatingRoutePlannerStatus extends BaseRoutePlannerStatus {
    class: "RotatingIpRoutePlanner"
    details: RotatingRoutePlannerDetails
}

/** RotatingIpRoutePlanner details */
export interface RotatingRoutePlannerDetails extends BaseRoutePlannerDetails {
    /** Number of rotations which happened since launched */
    rotateIndex: string
    /** Current offset in the block */
    ipIndex: string
    /** Currently used ip address */
    currentAddress: string
}

/** NanoIpRoutePlanner status */
export interface NanoRoutePlannerStatus extends BaseRoutePlannerStatus {
    class: "NanoIpRoutePlanner"
    details: NanoRoutePlannerDetails
}

/** NanoIpRoutePlanner details */
export interface NanoRoutePlannerDetails extends BaseRoutePlannerDetails {
    /** Current offset in the ip block */
    currentAddressIndex: string
}

/** RotatingNanoIpRoutePlanner status */
export interface RotatingNanoRoutePlannerStatus extends BaseRoutePlannerStatus {
    class: "RotatingNanoIpRoutePlanner"
    details: RotatingNanoRoutePlannerDetails
}

/** RotatingNanoIpRoutePlanner details */
export interface RotatingNanoRoutePlannerDetails extends NanoRoutePlannerDetails {
    /** Index in which block ips are used */
    blockIndex: string
}

/** Type of plugin */
export interface Plugin {
    /** The plugin name */
    name: string
    /** The plugin version */
    version: string
}

/** List of plugins */
export type Plugins = Plugin[]

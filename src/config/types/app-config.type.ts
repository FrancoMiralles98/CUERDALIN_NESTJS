import { NodeEnv } from "./node-env.enum"

export interface AppConfigType {
    app: {
        port?: number,
        node_env?: NodeEnv
    },
    db: {
        uri?: string
    },
    auth: {
        
    }
}
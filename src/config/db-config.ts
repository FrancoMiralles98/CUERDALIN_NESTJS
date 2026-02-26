import { registerAs } from "@nestjs/config";
import { NodeEnv } from "./types/node-env.enum";
import { AppConfigType } from "./types/app-config.type";

export const dbConfig = registerAs('db', ():AppConfigType["db"] =>{
    const db = process.env.NODE_ENV === NodeEnv.DEVELOPMENT
    ? process.env.DEV_DB_URI
    : process.env.PROD_DB_URI

    return {
        uri: db
    }
})
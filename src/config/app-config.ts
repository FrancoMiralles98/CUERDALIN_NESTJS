import { registerAs } from "@nestjs/config";
import { NodeEnv } from "./types/node-env.enum";
import { AppConfigType } from "./types/app-config.type";

export const appConfig = registerAs('app', ():AppConfigType["app"] =>(
    {
       port: Number(process.env.PORT),
       node_env: process.env.NODE_ENV as NodeEnv
    }
))
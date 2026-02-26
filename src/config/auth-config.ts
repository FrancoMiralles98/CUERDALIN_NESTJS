import { registerAs } from "@nestjs/config";
import { AppConfigType } from "./types/app-config.type";

export const authConfig = registerAs('auth', ():AppConfigType["auth"]=>({

}))
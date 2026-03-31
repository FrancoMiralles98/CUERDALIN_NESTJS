import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { DATOS_USUARIO_DEFAULT } from "../const/user-schema.const";
import type { DatosUsuario, Direccion } from "../types/user-schema.types";

@Schema({ timestamps: true })
export class User {
    @Prop({ type: String, required: true })
    username: string

    @Prop({ type: String, required: true })
    password: string

    @Prop({ type: String, required: true, unique: true })
    email: string

    @Prop({ type: Array, default: [] })
    favoritos: string[]

    @Prop({ type: Object, default: DATOS_USUARIO_DEFAULT })
    datos_usuario: DatosUsuario

    @Prop({ type: Array, default: [] })
    direcciones: Direccion[]
}

export type UserDocument = HydratedDocument<User>

export const userSchema = SchemaFactory.createForClass(User)
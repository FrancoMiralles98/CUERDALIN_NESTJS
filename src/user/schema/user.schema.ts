import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { DATOS_USUARIO_DEFAULT } from "../const/user-schema.const";

@Schema({ timestamps: true })
export class User {
    @Prop({ type: String, required: true })
    username: string

    @Prop({ type: String, required: true })
    password: string

    @Prop({ type: String, required: true, unique: true })
    email: string

    @Prop({ type: Array, default: [] })
    favoritos: []

    @Prop({ type: Object, default: DATOS_USUARIO_DEFAULT })
    datos_usuario: {}

    @Prop({ type: Array, default: [] })
    direcciones: []
}

export type UserDocument = HydratedDocument<User>

export const userSchema = SchemaFactory.createForClass(User)
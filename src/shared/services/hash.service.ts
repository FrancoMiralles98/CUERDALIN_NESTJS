import { Injectable } from "@nestjs/common";
import bcrypt from 'bcrypt'

@Injectable()
export class HashService {
    async hashText(plainText: string) {
        return await bcrypt.hash(plainText,10)
    }

    async compareText(plainText: string, hashedText: string) {
        return await bcrypt.compare(plainText,hashedText)
    }
}
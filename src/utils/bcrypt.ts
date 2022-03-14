import * as bcrypt from "bcryptjs";
import('dotenv/config');

export async function encrypt(password: string) {
    const encrypted = await bcrypt.hash(
        password,
        parseInt(process.env.SALT)
    );

    return encrypted;
};

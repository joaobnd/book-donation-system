import prismaClient from "../prisma";
import { encrypt } from "../utils/bcrypt";
import { sendMail } from "../utils/mailSender";

class CreateAdminService {
    async execute(name: string, email: string, user: string, password: string) {

        const emailAlreadyExist = await prismaClient.admin.findUnique({
            where: {
                email: email
            }
        });

        if(emailAlreadyExist) {
            throw new Error("Email already exists!")
        };

        const userAlreadyExist = await prismaClient.admin.findUnique({
            where: {
                user: user
            }
        });

        if(userAlreadyExist) {
            throw new Error("User Name already exists!")
        };

        const admin = await prismaClient.admin.create({
            data: {
                name: name,
                email: email,
                user: user,
                password: await encrypt(password)
            }
        });

        const status = await sendMail(
            email,
            "New account created!",
             "to activate your account, click on the link: localhost:3200/admin/"+`${email}`)

        admin.password = undefined;

        return { status};
    };


}; 

export {CreateAdminService};
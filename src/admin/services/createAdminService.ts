import prismaClient from "../../prisma";
import { encrypt } from "../../utils/bcrypt";
import { sendMail } from "../../utils/mailSender";


class CreateAdminService {
    async execute(name:string, email:string, user:string, password:string) {

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
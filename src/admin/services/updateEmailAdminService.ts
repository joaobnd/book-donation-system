import prismaClient from "../../prisma";
import { sendMail } from "../../utils/mailSender";
import { isEmail } from "class-validator";

export class UpdateEmailAdminService {
    async execute(user:string, newEmail:string) {

        if(!isEmail(newEmail)) {
            throw new Error("Invalid email!")
        };

        try {
            const {email} = await prismaClient.admin.findUnique({
            where: {
                user: user
            },
            select: {
                email: true
            }
        })
             const status = await sendMail(newEmail, 'Email change request!',
            `To confirm the email change, pleage click on link: localhost:3200/${newEmail}/?email=${email}`);
             return status;

        } catch(err) {
            return {status: err.status, error: err.message}
        } 
        
    };

}; 
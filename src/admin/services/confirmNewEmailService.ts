import prismaClient from "../../prisma";
import {sendMail} from "../../utils/mailSender";

class ConfirmNewEmailService {
    async execute(newEmail: string, oldEmail:string) {
        await prismaClient.admin.update({
            where: { email: oldEmail },
            data: {
                email: newEmail
            },
        });

        sendMail(oldEmail,
            "Email updated successfuly.",
            "if you want to revert the change, you can do it by making a new update.");

        return "Email updated successfuly"
    }
};

export {ConfirmNewEmailService}
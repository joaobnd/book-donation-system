import prismaClient from "../prisma";

class ActivateAccountService {
    async execute(email: string) {
        const updatedAdmin = await prismaClient.admin.update({
            where: { email: email },
            data: {
                active: true
            },
        });

        if(!updatedAdmin) {
            throw new Error("Admin not found!")
        };

        return "Account activaded sucessfuly"
    }
};

export { ActivateAccountService}


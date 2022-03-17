import prismaClient from "../../prisma";

class DeleteAdminService {

    async execute(name:string) {

        try {
            await prismaClient.institution.update({
                where: {
                    name: name
                },
                data: {
                    admin: null
                }
            })
            return {status: 200, message: "Admin deleted successfuly"}
        } catch(err) {
            return {status: err.status, message: err.message}
        }
    }
};

export {DeleteAdminService};
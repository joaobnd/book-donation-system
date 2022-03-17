import prismaClient from "../../prisma";
import { createAddress } from "../../shared/createAddress";


class CreateInstitutionService {
    async execute(name:string, rua:string, numero:number, bairro:string, cidade:string, estado:string, cep:string, admin:string) {

        if(!name || !rua || !numero || ! bairro || !cidade || estado.length !== 2 || cep.length !== 9 || !admin) {
            throw new Error("Invalid data!")
        };
        
        const alreadyExist = await prismaClient.institution.findUnique({
            where: {
                name: name
            }
        });

        if(alreadyExist) {
            throw new Error('Name already exist!')
        };
        
        const address = await createAddress(rua, numero, bairro, cidade, estado, cep);


        const institution = await prismaClient.institution.create({
            data: {
                name: name,
                address: address.id,
                admin: admin
            }
        });

        return { institution};
    };


}; 

export {CreateInstitutionService};
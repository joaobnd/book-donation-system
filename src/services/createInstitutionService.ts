import prismaClient from "../prisma";


class CreateInstitutionService {
    async execute(name: string, estado: string, cep: string, cidade: string, bairro: string, rua: string, numero: number, admin: string) {

        if(!name || estado.length !== 2 || cep.length !== 9 || !cidade || !bairro || !rua || !numero || !admin){
            throw new Error("Dados inválidos!")
        };

        const alreadyExist = await prismaClient.institution.findUnique({
            where: {
                name: name
            }
        });

        if(alreadyExist) {
            throw new Error('Name already exist!')
        };
        
        const address = await prismaClient.address.create({
            data: {
                estado: estado,
                cep: cep,
                cidade: cidade,
                bairro: bairro,
                rua: rua,
                numero: numero
            }
        });


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
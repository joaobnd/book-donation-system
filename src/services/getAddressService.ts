import prismaClient from "../prisma";

class GetAddressService {
    async execute(name: string) {

        if(!name) {
            throw new Error('No name provided!')
        };

        const {address} = await prismaClient.institution.findUnique({
            where: {
                name: name
            },
            select: {
                address: true
            }
        });

        const {rua, numero, bairro, cidade, estado, cep} = await prismaClient.address.findUnique({
            where: {
                id: address
            },
            select : {
                rua:true,
                numero: true,
                bairro: true,
                cidade: true,
                estado: true,
                cep: true
            }
        });

        const fullAddress = `${rua} ${numero}, ${bairro}, ${cidade}, ${estado} - ${cep}`

        return fullAddress;

    };


}; 

export {GetAddressService};
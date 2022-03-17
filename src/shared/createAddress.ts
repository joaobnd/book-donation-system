import prismaClient from "../prisma";

export async function createAddress(rua: string, numero:number, bairro:string, cidade:string, estado:string, cep:string) {

    const alreadyExist = await prismaClient.address.findFirst({
        where: {
            rua: rua,
            numero: numero,
            bairro: bairro,
            cidade: cidade,
            estado: estado.toUpperCase()
        }
    });

    if(alreadyExist) {
        return alreadyExist;
    };

    const address = await prismaClient.address.create({
        data: {
            rua: rua,
            numero: numero,
            bairro: bairro,
            cidade: cidade,
            estado: estado.toUpperCase(),
            cep: cep
        }
    })

    return address;
}
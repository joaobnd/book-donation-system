import prismaClient from "../../prisma";

class CreateBookService {
    async execute(name:string, edition:string, year:number, date: Date, condition:Condition, amount:number, address:string, institution:string) {

        try{

            const alreadyExist = await prismaClient.book.findFirst({
                where: {
                    name: name,
                    edition: edition,
                    year: year,
                    date: date.toLocaleString(),
                    condition: condition.toString()
                }
            });

            if(alreadyExist) {
                throw new Error("Book already registered!")
            };
            
            const book = await prismaClient.book.create({
                data: {
                    name: name,
                    edition: edition,
                    year: year,
                    date: date.toLocaleString(),
                    condition: condition.toString(),
                    amount: amount,
                    address: address,
                    institution: institution
                }
            });
    
            return book;

        } catch(err) {
            return {message: err.message}
        }
        
    };


}; 

enum Condition{
    NOVO,
    USADO,
    DANIFICADO
}

export {CreateBookService};
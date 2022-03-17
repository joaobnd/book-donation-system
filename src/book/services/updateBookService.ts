import prismaClient from "../../prisma";

class updateBookService {

    async execute(bookId: string, edition?: string, condition?:Condition, institutionName?: string) {

        try {
            await prismaClient.book.update({
                where: {
                    id: bookId
                },
                data: {
                    edition: edition,
                    condition: condition.toLocaleString(),
                    institution: institutionName
                }
            })

            return {message: "book updated successfuly"}
        } catch (err) {
            return {message: err.message}
        }
    }
};

enum Condition {
    NOVO,
    USADO,
    DANIFICADO
}

export {updateBookService};
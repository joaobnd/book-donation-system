import { Request, Response } from "express";
import { createAddress } from "../../shared/createAddress";
import { CreateBookService } from "../services/createBookService";

class CreateBookController {
    async handle(req: Request, res: Response) {
        const {name, edition, year, date, condition, amount,
        rua, numero, bairro, cidade, estado, cep, institution} = req.body;

        const bookService = new CreateBookService();
        const address = await createAddress(rua, numero, bairro, cidade, estado, cep);

        const result = await bookService.execute(name, edition, year, date, condition, amount, address.id, institution);

        return res.status(201).json(result);
    };

}

export { CreateBookController };

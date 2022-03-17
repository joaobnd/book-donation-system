import { Request, Response } from "express";
import { CreateInstitutionService } from "../services/createInstitutionService";


class CreateInstitutionController {
    async handle(req: Request, res: Response) {
        const {name, rua, numero, bairro, cidade, estado, cep, admin} = req.body;


        const service = new CreateInstitutionService();

        const result = await service.execute(name, rua, numero, bairro, cidade, estado, cep, admin);

        return res.status(201).json(result);
    };

}

export { CreateInstitutionController };
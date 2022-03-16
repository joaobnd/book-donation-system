import { Request, Response } from "express";
import { CreateInstitutionService } from "../services/createInstitutionService";

class CreateInstitutionController {
    async handle(req: Request, res: Response) {
        const { 
            name,
             estado,
              cep,
               cidade,
                bairro,
                 rua,
                  numero,
                   admin } = req.body;

        const service = new CreateInstitutionService();

        const result = await service.execute(name, estado, cep, cidade, bairro, rua, numero, admin);

        return res.status(201).json(result);
    };

}

export { CreateInstitutionController };
import { Request, Response } from "express";
import { CreateAdminService } from "../services/createAdminService";

class CreateAdminController {
    async handle(req: Request, res: Response) {
        const { name, email, user, password } = req.body;

        const service = new CreateAdminService();

        const result = await service.execute(name, email, user, password);

        return res.status(201).json(result);
    };

}

export { CreateAdminController };

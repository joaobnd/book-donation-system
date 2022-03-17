import { Request, Response } from "express";
import { ActivateAccountService } from "../services/activateAccountService";

class ActivateAccountController {
    async handle(req: Request, res: Response) {
        const email = req.params.email;

        const service = new ActivateAccountService();

        const message = await service.execute(email);

        return res.status(201).json({ message: message})

    };
};

export { ActivateAccountController };
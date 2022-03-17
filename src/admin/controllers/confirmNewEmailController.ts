import { Request, Response } from "express";
import { ConfirmNewEmailService } from "../services/confirmNewEmailService";

class ConfirmNewEmailController {
    async handle(req: Request, res: Response) {
        const newEmail = req.params.newEmail;
        const email = req.query.email as string;

        const service = new ConfirmNewEmailService();

        const message = await service.execute(newEmail, email);

        return res.status(201).json({ message: message})

    };
};

export { ConfirmNewEmailController };
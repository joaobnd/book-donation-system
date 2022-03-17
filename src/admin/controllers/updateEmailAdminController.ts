import { Request, Response } from "express";
import { UpdateEmailAdminService } from "../services/updateEmailAdminService";

class UpdateEmailAdminController {
    async handle(req: Request, res: Response) {
        const {email} = req.body;
        const {user} = req.params;


        const service = new UpdateEmailAdminService();

        const result = await service.execute(user, email);

        return res.status(result.status).json(result);
    };

}

export { UpdateEmailAdminController };
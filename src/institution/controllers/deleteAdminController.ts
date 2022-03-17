import { Request, Response } from "express";
import { DeleteAdminService } from "../services/deleteAdminService";

class DeleteAdminController {

    async handle(req:Request, res:Response) {

        const {name} = req.params;

        const service = new DeleteAdminService();

        const message = await service.execute(name);

        return res.status(message.status).json({message: message.message});
    }
};

export {DeleteAdminController};
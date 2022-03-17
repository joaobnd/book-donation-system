import { Response, Request } from "express";
import { CreateInstitutionController } from "../../institution/controllers/createInstitutionController";
import { updateBookService } from "../services/updateBookService";


class UpdateBookController {
    async handle(req:Request, res:Response) {
        
        const {institutionName, edition, condition} = req.body;
        const {bookId} = req.params;

        const service = new updateBookService();

        const result = await service.execute(bookId, edition, condition, institutionName);

        return res.status(200).json(result);

    }
};

export {UpdateBookController};
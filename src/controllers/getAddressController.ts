import { Request, Response } from "express";
import { GetAddressService } from "../services/getAddressService";

class GetAddressController {
    async handle(req: Request, res: Response) {
        
        const { name } = req.params

        const service = new GetAddressService();

        const result = await service.execute(name);

        return res.status(201).json(result);
    };

}

export { GetAddressController };
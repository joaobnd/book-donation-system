import { Router } from "express";
import { CreateAdminController } from "./controllers/createAdminController";
import { ActivateAccountController } from "./controllers/activateAccountController";
import { CreateInstitutionController } from "./controllers/createInstitutionController";
import { GetAddressController } from "./controllers/getAddressController";

const router = Router();

router.post("/admin", new CreateAdminController().handle);
router.put("/admin/:email", new ActivateAccountController().handle)
router.post("/institution", new CreateInstitutionController().handle)
router.get("/institution/:name", new GetAddressController().handle )

export { router };
import { Router } from "express";
import { CreateAdminController } from "./controllers/createAdminController";
import { ActivateAccountController } from "./controllers/activateAccountController";

const router = Router();

router.post("/admin", new CreateAdminController().handle);
router.put("/admin/:email", new ActivateAccountController().handle)

export { router };
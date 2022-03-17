import { Router } from "express";
import { CreateAdminController } from "./admin/controllers/createAdminController";
import { ActivateAccountController } from "./admin/controllers/activateAccountController";
import { CreateInstitutionController } from "./institution/controllers/createInstitutionController";
import { GetAddressController } from "./shared/getAddressController";
import { UpdateEmailAdminController } from "./admin/controllers/updateEmailAdminController";
import { ConfirmNewEmailController } from "./admin/controllers/confirmNewEmailController";
import { DeleteAdminController } from "./institution/controllers/deleteAdminController";
import { CreateBookController } from "./book/controllers/createBookController";
import { UpdateBookController } from "./book/controllers/updateBookController";

const router = Router();

router.post("/admin", new CreateAdminController().handle);
router.put("/admin/:email", new ActivateAccountController().handle);
router.post("/institution", new CreateInstitutionController().handle);
router.get("/institution/:name", new GetAddressController().handle);
router.put("/admin/update/:user", new UpdateEmailAdminController().handle);
router.put("/:newEmail/", new ConfirmNewEmailController().handle);
router.delete("/institution/:name", new DeleteAdminController().handle);
router.post("/book", new CreateBookController().handle);
router.put("/book/:bookId", new UpdateBookController().handle);


export { router };
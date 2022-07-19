import { Router } from "express";
import * as controler from "../Controlers/AuthControlers";
import { AuthSingUpValidation } from "../validations/AuthValidation";

const router = Router();

router.post("/singup",AuthSingUpValidation ,controler.singUp);
router.post("/singin",AuthSingUpValidation ,controler.singIn);

export default router;
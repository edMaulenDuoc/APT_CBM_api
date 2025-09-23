import { Router } from "express";
import { authRequired } from "../middlewares/auth.middleware.js";
import { validarEmergencia } from "../middlewares/validate.middleware.js";
import { registrarEmergencia, getEmergencias } from "../controllers/emergencia.controller.js";

const router = Router();

router.post("/", authRequired, validarEmergencia, registrarEmergencia);
router.get("/", authRequired, getEmergencias);

export default router;
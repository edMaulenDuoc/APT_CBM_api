import { Router } from "express";
import { authRequired } from "../middlewares/auth.middleware.js";
import { validarEmergencia } from "../middlewares/validate.middleware.js";
import { registrarEmergencia, getEmergencias, editarEmergencia, marcarLlegadaInstitucion } from "../controllers/emergencia.controller.js";

const router = Router();

router.post("/", authRequired, validarEmergencia, registrarEmergencia);
router.get("/", authRequired, getEmergencias);
router.put("/:id", authRequired, validarEmergencia, editarEmergencia);
router.put("/instituciones/marcar-llegada/:id", authRequired, marcarLlegadaInstitucion);
export default router;
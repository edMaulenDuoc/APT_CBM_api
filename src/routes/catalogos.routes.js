import { Router } from "express";
import { authRequired } from "../middlewares/auth.middleware.js";
import { getCompanias, getTiposApoyo, getTiposEmergencia } from "../controllers/catalogos.controller.js";

const router = Router();

router.get("/companias", authRequired, getCompanias); //devuelve listado de compañias incluyendo vehículos y usuarios con su tipo
router.get("/tipos-apoyo", authRequired, getTiposApoyo); //devuelve listado de tipos de apoyo
router.get("/tipos-emergencia", authRequired, getTiposEmergencia); //devuelve listado de tipos de emergencia

export default router;  
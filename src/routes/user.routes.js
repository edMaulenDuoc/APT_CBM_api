import { Router } from "express";
import { getUsers, createUser, getPerfil } from "../controllers/user.controller.js";
import { validateUser } from "../middlewares/validate.middleware.js";
import { authRequired } from "../middlewares/auth.middleware.js";

const router = Router();

// Lista usuarios
router.get("/" , authRequired, getUsers);
router.get("/perfil", authRequired, getPerfil);
// Crea usuario (primero valida el body, luego controlador)
router.post("/", validateUser, createUser);

export default router;
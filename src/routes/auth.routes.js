import { Router } from "express";
import { register, login, logout } from "../controllers/auth.controller.js";
import { validateUser } from "../middlewares/validate.middleware.js";
const router = Router();

router.post("/register", register);
router.post("/login", validateUser, login);
router.post("/logout", logout);

export default router;
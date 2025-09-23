import { Router } from "express";
import userRoutes from "./user.routes.js";
import authRoutes from "./auth.routes.js";
import catalogoRoutes from "./catalogos.routes.js";
import emergenciaRoutes from "./emergencia.routes.js";

const router = Router();

router.use("/users", userRoutes);
router.use("/auth", authRoutes);
router.use("/catalogos", catalogoRoutes);
router.use("/emergencias", emergenciaRoutes);

export default router;
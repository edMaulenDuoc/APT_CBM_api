import { Router } from "express";
import userRoutes from "./user.routes.js";
import authRoutes from "./auth.routes.js";
import catalogoRoutes from "./catalogos.routes.js";
import emergenciaRoutes from "./emergencia.routes.js";
import prisma from "../config/db.js";
const router = Router();

router.use("/users", userRoutes);
router.use("/auth", authRoutes);
router.use("/catalogos", catalogoRoutes);
router.use("/emergencias", emergenciaRoutes);


// Ruta de estado para verificar si la API está funcionando
router.get("/estado", async (req, res) => {
    try {
        await prisma.tipoUsuario.findMany();
        return res.status(200).json({ estado: "API funcionando correctamente" });
    } catch (error) {
        return res.status(500).json({ estado: "Error en la conexión a la API" });
    } 
});

export default router;
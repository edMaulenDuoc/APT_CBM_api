import jwt from "jsonwebtoken";

const { JWT_SECRET } = process.env;
const COOKIE_NAME = process.env.COOKIE_NAME || "access_token";

export const authRequired = (req, res, next) => {
    const token = req.cookies ? req.cookies[COOKIE_NAME] : undefined;

    if (!token) return res.status(401).json({ error: "Acceso no autorizado" });

    try {
        req.user = jwt.verify(token, JWT_SECRET);
        console.log(req.user);
        
        next();
    } catch {
        res.status(401).json({ error: "Acceso expirado" });
    }
};
// src/controllers/auth.controller.js
import { registerUser, loginUsuario } from "../services/auth.service.js";

const COOKIE_NAME = process.env.COOKIE_NAME || "access_token";
const isProd = process.env.NODE_ENV === "production";
const baseCookie = {
    httpOnly: true,
    secure: isProd || process.env.COOKIE_SECURE === "true",
    sameSite: (process.env.COOKIE_SAMESITE || "lax"),
    path: "/",
};

export const register = async (req, res, next) => {
    try {
        console.log(req.body);

        const { nombre, apellido_pat, apellido_mat, usuario, clave, tipo_id, compania_id } = req.body;
        const { perfil, accessToken } = await registerUser({ nombre, apellido_pat, apellido_mat, usuario, clave, tipo_id, compania_id });

        res.cookie(COOKIE_NAME, accessToken, { ...baseCookie, maxAge: 150 * 60 * 1000 });
        res.status(201).json({ perfil });

    } catch (err) { next(err); }
};

export const login = async (req, res, next) => {
    try {
        const { usuario, clave } = req.body;
        const { perfil, accessToken } = await loginUsuario({ usuario, clave });

        res.cookie(COOKIE_NAME, accessToken, { ...baseCookie, maxAge: 150 * 60 * 1000 });
        res.json({ perfil });

    } catch (err) { next(err); }
};

export const logout = async (_req, res) => {
    res.clearCookie(COOKIE_NAME, { ...baseCookie, maxAge: 0 });
    
    res.status(204).end();
};



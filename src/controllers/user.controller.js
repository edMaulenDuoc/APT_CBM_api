import { getUsers as getUsersService, getPerfil as getPerfilService, createUser as createUserService } from "../services/user.service.js";

export const getUsers = async (req, res, next) => {
    try {
        const usuarios = await getUsersService();
        res.json(usuarios);
    } catch (error) {
        next(error);
    }
};

export const createUser = async (req, res, next) => {
    try {
        const newUser = await createUserService(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        next(error);
    }
};

export const getPerfil = async (req, res, next) => {
    try {
        const perfil = await getPerfilService(req.user.sub);
        res.json(perfil);
    } catch (error) {
        next(error);
    }
};

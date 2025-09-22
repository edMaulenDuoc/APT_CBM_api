import * as service from "../services/user.service.js";

export const getUsers = async (req, res, next) => {
    try {
        const usuarios = await service.getUsers();
        res.json(usuarios);
    } catch (error) {
        next(error);
    }
};

export const createUser = async (req, res, next) => {
    try {
        const newUser = await service.createUser(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        next(error);
    }
};

export const getPerfil = async (req, res, next) => {
    try {
        const perfil = await service.getPerfil(req.user.sub);
        res.json(perfil);
    } catch (error) {
        next(error);
    }
};

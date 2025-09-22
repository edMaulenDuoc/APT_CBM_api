import * as service from "../services/catalogos.service.js";

export const getCompanias = async (req, res, next) => {
    try {
        const companias = await service.getCompanias();
        res.status(200).json({ companias });
    } catch (error) {
        next(error);
    }
};

export const getTiposApoyo = async (req, res, next) => {
    try {
        const tiposApoyo = await service.getTiposApoyo();
        res.status(200).json({ tiposApoyo });
    } catch (error) {
        next(error);
    }
};

export const getTiposEmergencia = async (req, res, next) => {
    try {
        const tiposEmergencia = await service.getTiposEmergencia();
        res.status(200).json({ tiposEmergencia });
    } catch (error) {
        next(error);
    }
};

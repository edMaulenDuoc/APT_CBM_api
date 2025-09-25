import { validarLogin, validarFormEmergencia } from "../validations/validacionRequest.js";

export const validateUser = (req, res, next) => {
    const resultado = validarLogin(req.body);

    if (!resultado.esValido) {
        return res.status(400).json({ error: resultado.mensaje });
    }

    next();
}

export const validarEmergencia = (req, res, next) => {
    const resultado = validarFormEmergencia(req.body);

    if (!resultado.esValido) {
        return res.status(400).json({ error: resultado.mensaje });
    }

    //ajusta body
    req.body = {
        ...req.body,
        tipo_id: parseInt(req.body.tipo_id),
    };
    
    next();
}
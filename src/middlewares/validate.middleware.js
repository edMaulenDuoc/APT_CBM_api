import { validarLogin } from "../validations/validacionRequest.js"; 

export const validateUser = (req, res, next) => {
    console.log("Validando usuario...");
    const resultado = validarLogin(req.body);

    if (!resultado.esValido) {
        return res.status(400).json({ error: resultado.mensaje });
    }

    next(); 
}
import * as service from "../services/emergencia.service.js";

export const registrarEmergencia = async (req, res, next) => {
    try {
        var data = {tipo_id: req.body.tipo_id, direccion: req.body.direccion, hora_despacho: new Date() };

        console.log(req.body);
        
        // crea la emergencia
        const emergencia = await service.crearEmergencia(data);
        
        // asigna los vehiculos de la emergencia
        data = req.body.vehiculos.map((vehiculo) => ({
            emergencia_id: emergencia.id,
            vehiculo_id: parseInt(vehiculo)
        }));

        await service.asignarVehiculos(data);
        
        // asigna los apoyos de la emergencia
        if (req.body.instituciones && req.body.instituciones.length > 0) {
            data = req.body.instituciones.map((inst) => ({
                emergencia_id: emergencia.id,
                tipo_apoyo_id: parseInt(inst.tipo_apoyo_id),
                hora_solicitud: new Date(),
                hora_llegada: null,
            }));

            await service.asignarApoyos(data);
        }

        res.status(201).json(emergencia);
    } catch (error) {
        next(error);
    }
};

export const getEmergencias = async (req, res, next) => {
    try {
        const emergencias = await service.getEmergencias();
        res.status(200).json(emergencias);
    } catch (error) {
        next(error);
    }
};

import * as service from "../services/emergencia.service.js";

export const registrarEmergencia = async (req, res, next) => {
    try {
        var data = { tipo_id: req.body.tipo_id, direccion: req.body.direccion, hora_despacho: new Date() };

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

export const editarEmergencia = async (req, res, next) => {
    try {
        const DatosNuevos = req.body;

        console.log("DatosNuevos", DatosNuevos);
        
        // Comprueba que la emergencia existe
        const emergencia = await service.obtenerEmergenciaPorId(parseInt(req.params.id));

        if (!emergencia) {
            return res.status(404).json({ message: "Emergencia no encontrada" });
        }

        // Actualiza direccion, tipo de emergencia y obac si fue modificado
        await service.editarEmergencia(emergencia.id, {
            tipo_id: DatosNuevos.tipo_id,
            direccion: DatosNuevos.direccion,
            obac_id: DatosNuevos.obac_id ? parseInt(DatosNuevos.obac_id) : null,
        });

        // Actualiza los vehiculos de la emergencia
        await editarVehiculosEmergencia(DatosNuevos.vehiculos, emergencia);

        // Actualiza los apoyos de la emergencia
        await editarApoyosEmergencia(DatosNuevos.instituciones, emergencia);

        res.status(200).json({ message: "Emergencia actualizada" });
    } catch (error) {
        next(error);
    }
};

export const getEmergencias = async (req, res, next) => {
    try {
        const emergencias = await service.getEmergencias();

        emergencias.map((emergencia, i) => {
            let apoyos = emergencia.apoyos.map((institucion, j) => {
                institucion.key = `${Date.now()}-${i}-${j}`;
                return institucion;
            });
            return { ...emergencia, apoyos };
        });

        res.status(200).json(emergencias);
    } catch (error) {
        next(error);
    }
};

export const marcarLlegadaInstitucion = async (req, res, next) => {
    try {
        const institucionId = parseInt(req.params.id);
        const institucion = await service.obtenerApoyoPorId(institucionId);

        if (!institucion) {
            return res.status(404).json({ message: "Institución no encontrada" });
        }

        // Marca la llegada de la institución
        await service.marcarLlegadaApoyo(institucionId);

        res.status(200).json({ message: "Llegada de la institución marcada con éxito" });
    } catch (error) {
        next(error);
    }
};

// Utilidades
const editarVehiculosEmergencia = async (vehiculosNuevos, emergencia) => {

    const vehiculosActuales = emergencia.vehiculos.map(v => v.vehiculo_id);
    let vehiculosAgregar = vehiculosNuevos.filter(v => !vehiculosActuales.includes(v));
    const vehiculosEliminar = vehiculosActuales.filter(v => !vehiculosNuevos.includes(v));

    if (vehiculosEliminar.length > 0) {
        await service.eliminarVehiculos(emergencia.id, vehiculosEliminar);
    }

    // Asigna los nuevos vehiculos
    if (vehiculosAgregar.length > 0) {
        vehiculosAgregar = vehiculosAgregar.map(v => {
            return {
                emergencia_id: emergencia.id,
                vehiculo_id: v
            };
        });

        await service.asignarVehiculos(vehiculosAgregar);
    }

    // console.log({ vehiculosNuevos, vehiculosActuales, vehiculosAgregar, vehiculosEliminar });
}

const editarApoyosEmergencia = async (nuevosApoyos, emergencia) => {
    // comprueba si cambiaron los tipos de apoyo
    const apoyosActuales = emergencia.apoyos;

    const apoyosActualizar = nuevosApoyos.filter(a => {
        const actual = apoyosActuales.find(aa => aa.id === a.id);
        return actual && a.tipo_apoyo_id !== actual.tipo_apoyo_id;
    });
    
    let apoyosAgregar = nuevosApoyos.filter(a => !a.id);

    const apoyosEliminar = apoyosActuales.filter(apoyoActual => 
        !nuevosApoyos.find(nuevoApoyo => nuevoApoyo.id === apoyoActual.id))
        .map(apoyoActual => apoyoActual.id);
    
    // actualiza los apoyos que cambiaron
    apoyosActualizar.forEach(async apoyo => {
        await service.editarApoyo(apoyo.id, apoyo.tipo_apoyo_id);
    });

    
    if (apoyosAgregar.length > 0) {
        // agrega emergencia_id a los apoyos
        apoyosAgregar = apoyosAgregar.map(a => ({
            emergencia_id: emergencia.id,
            tipo_apoyo_id: parseInt(a.tipo_apoyo_id),
            hora_solicitud: new Date(),
            hora_llegada: null,
        }));
        
        // agrega los nuevos apoyos
        await service.asignarApoyos(apoyosAgregar);
    }


    if (apoyosEliminar.length > 0) {
        await service.eliminarApoyos(emergencia.id, apoyosEliminar);
    }
    // console.log({apoyosAgregar, apoyosActualizar, apoyosEliminar});
    
    return apoyosActualizar;
}

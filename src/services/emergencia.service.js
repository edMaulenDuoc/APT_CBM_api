import prisma from "../config/db.js";

export const crearEmergencia = async (data) =>
    await prisma.emergencia.create({
        data
    });

export const asignarVehiculos = async (data) =>
    await prisma.vehiculoEmergencia.createMany({
        data
    });

export const asignarApoyos = async (data) =>
    await prisma.apoyoEmergencia.createMany({
        data
    });

export const getEmergencias = async () =>
    await prisma.emergencia.findMany({
        include: {
            tipo: true,
            comuna: true,
            vehiculos: {
                include: {
                    vehiculo: true
                }
            },
            obac: {
                select: {
                    id: true,
                    nombre: true,
                    apellido_pat: true,
                    apellido_mat: true
                }
            },
            toma_datos: {
                select: {
                    id: true,
                    nombre: true
                }
            },
            apoyos: {
                orderBy: {
                    id: 'asc'
                },
            }
        },
        orderBy: {
            createdAt: 'desc'
        }
    });


export const obtenerEmergenciaPorId = async (id) =>
    await prisma.emergencia.findUnique({
        where: { id },
        include: {
            tipo: true,
            comuna: true,
            vehiculos: {
                include: {
                    vehiculo: true
                }
            },
            apoyos: true
        }
    });

export const eliminarVehiculos = async (emergencia_id, vehiculo_ids) =>
    await prisma.vehiculoEmergencia.deleteMany({
        where: {
            emergencia_id,
            vehiculo_id: { in: vehiculo_ids }
        }
    });

export const editarEmergencia = async (id, data) =>
    await prisma.emergencia.update({
        where: { id },
        data
    });

export const editarApoyo = async (id, tipo_apoyo_id) =>
    await prisma.apoyoEmergencia.update({
        where: { id },
        data: { tipo_apoyo_id }
    });

export const eliminarApoyos = async (emergencia_id, apoyo_ids) =>
    await prisma.apoyoEmergencia.deleteMany({
        where: {
            emergencia_id,
            id: { in: apoyo_ids }
        }
    });

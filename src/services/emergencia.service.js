import prisma from "../config/db.js";

export const crearEmergencia = async (data) => 
    await prisma.emergencia.create({
        data
    });

export const asignarVehiculos = async (data) =>
    await prisma.vehiculoEmergencia.createMany({
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
            apoyos: true
        },
        orderBy: {
            createdAt: 'desc'
        }
    });

export const asignarApoyos = async (data) =>
    await prisma.apoyoEmergencia.createMany({
        data
    });
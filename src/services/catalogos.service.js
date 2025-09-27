import prisma from "../config/db.js";

export const getCompanias = async () =>
    prisma.compania.findMany({
        include: {
            vehiculos: {
                select: {
                    id: true,
                    vehiculo: true
                }
            },
            usuarios: {
                include: {
                    tipo: true
                }
            }
        }
    });

export const getTiposApoyo = async () => prisma.tipoApoyo.findMany();


export const getTiposEmergencia = async () => prisma.tipoEmergencia.findMany();

export const getTiposUsuario = async () => prisma.tipoUsuario.findMany();

export const getCompaniasDropDown = async () => prisma.compania.findMany();
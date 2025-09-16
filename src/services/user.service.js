// Capa de servicios: contiene la lógica de negocio y acceso a datos
import prisma from "../config/db.js";

// Obtiene todos los usuarios incluyendo sus posts (relación 1-N)
export const getUsers = async () =>
  prisma.usuario.findMany({
    select: {
      id: true,
      nombre: true,
      apellido_pat: true,
      apellido_mat: true,
      createdAt: true,
      updatedAt: true,
    },
  });

export const getPerfil = async (userId) =>
  prisma.usuario.findUnique({
    where: { id: userId },
    select: {
      id: true,
      nombre: true,
      apellido_pat: true,
      apellido_mat: true,
      usuario: true,
      tipo:true
    },
  });

  // prisma.$queryRaw`SELECT * FROM users`;

  
// Crea un usuario nuevo con los datos ya validados en el middleware
// data debe incluir: { nombre: string, apellido_pat: string, apellido_mat: string }
export const createUser = async (data) =>
  prisma.usuario.create({ data });
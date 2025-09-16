import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import prisma from "../config/db.js";

const { JWT_SECRET, JWT_EXPIRES_IN = "15m" } = process.env;

export const hashPassword = (plain) => bcrypt.hash(plain, 10);
export const checkPassword = (plain, hash) => bcrypt.compare(plain, hash);

export const signAccessToken = (user) => jwt.sign({ sub: user.id, email: user.email }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

export const registerUser = async ({ nombre, apellido_pat, apellido_mat, usuario, tipo_id, clave }) => {
  const exists = await prisma.usuario.findUnique({ where: { usuario } });
  if (exists) throw new Error("Usuario ya registrado");
  const claveHash = await hashPassword(clave);
  const perfil = await prisma.usuario.create({ data: { nombre, apellido_pat, apellido_mat, usuario, tipo_id, claveHash } });
  const accessToken = signAccessToken(perfil);
  return { perfil: { id: perfil.id, nombre: perfil.nombre, apellido_pat: perfil.apellido_pat, apellido_mat: perfil.apellido_mat, usuario: perfil.usuario, tipo_id: perfil.tipo_id }, accessToken };
};

export const loginUsuario = async ({ usuario, clave }) => {
  const perfil = await prisma.usuario.findUnique({ where: { usuario } });
  if (!perfil) throw new Error("Credenciales inválidas");
  const ok = await checkPassword(clave, perfil.claveHash);
  if (!ok) throw new Error("Credenciales inválidas");
  const accessToken = signAccessToken(perfil);
  return { perfil: { id: perfil.id, nombre: perfil.nombre, apellido_pat: perfil.apellido_pat, apellido_mat: perfil.apellido_mat, usuario: perfil.usuario, tipo_id: perfil.tipo_id }, accessToken };
};
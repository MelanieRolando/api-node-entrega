import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { createUser, findUserByEmail } from "../models/User.js";

export const register = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).json({ message: "Email y contraseña requeridos" });
  }

  const existingUser = await findUserByEmail (email);

  if (existingUser) {
    return res.status(409).json({ message: "El usuario ya existe" })
  }

  try {
    const passwordHash = await bcrypt.hash(password, 10);
    const userId = await createUser(email, passwordHash);

    if (!userId) {
      return res.sendStatus(503);
    }

    res.status(201).json({ id: userId, email });
  } catch (error) {
    console.error("Error en register:", error);
    res.status(500).json({ message: "Error al registrar usuario" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).json({ message: "Email y contraseña requeridos" });
  }
  
  const user = await findUserByEmail(email);
  if (!user) {
  return res.status(401).json({ message: "Credenciales inválidas" });
}

  const valid = await bcrypt.compare(password, user.password);
if (!valid) {
  return res.status(401).json({ message: "Credenciales inválidas" });
}

   const token = jwt.sign(
  { id: user.id, email: user.email },
  process.env.JWT_SECRET,
  { expiresIn: "1h" }
);

return res.json({ token });
};

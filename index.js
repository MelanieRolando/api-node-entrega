import 'dotenv/config';
import express from "express";
import cors from "cors";
import { verifyToken } from "./src/middlewares/verify-token.js";

const app = express();

app.use(cors()); // habilita peticiones de origen cruzado
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: "Bienvenidos a mi API REST Entrega" });
});

import authRouter from "./src/routes/auth.router.js";
app.use("/api/auth", authRouter);

import productsRouter from "./src/routes/products.router.js";
// Protegemos las rutas de productos con verifyToken
app.use("/api", verifyToken, productsRouter);

import notFound from "./src/middlewares/not-found.js";
app.use(notFound);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

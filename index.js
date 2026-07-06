import 'dotenv/config';
import express from "express";
import cors from "cors";

const app = express();

app.use(cors()); // habilita peticiones de origen cruzado
app.use(express.json());

// Ruta raíz
app.get('/', (req, res) => {
    res.json({ message: "Bienvenidos a mi API REST Entrega" });
});

// Rutas de autenticación
import authRouter from "./src/routes/auth.router.js";
app.use("/api/auth", authRouter);

// Rutas de productos (sin verifyToken global)
import productsRouter from "./src/routes/products.router.js";
app.use("/api/products", productsRouter);

import notFound from "./src/middlewares/not-found.js";
app.use(notFound);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));

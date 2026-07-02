import express from "express";
const app = express();

app.use((req, res, next) => {
    // res.json({message : "API en construccion" })
    console.log(req.method);
    next();
})

app.get('/', (req, res) => {
    res.json({'message' : "Bienvenidos a mi API REST Entrega"});
});

import notFound from "./src/middlewares/not-found.js";
app.use(notFound);

const PORT = 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
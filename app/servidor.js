import express from 'express';
import coleccionRouter from '../modules/coleccion/coleccion.routes.js';

const app = express();

app.set("PORT", 3000);
app.use(express.json());
app.use("/coleccion", coleccionRouter);

export default app;
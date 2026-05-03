import { Router } from "express";

import coleccionController from "./coleccion.controller";

const coleccionRouter = Router();

coleccionRouter.get("/", coleccionController.getJuegos);
coleccionRouter.get("/:idJuego", coleccionController.getJuego);
coleccionRouter.post("/", coleccionController.addJuego);

export default coleccionRouter;


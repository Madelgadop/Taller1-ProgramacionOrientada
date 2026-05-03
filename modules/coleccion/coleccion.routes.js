import { Router } from "express";

import coleccionController from "./coleccion.controller.js";

const coleccionRouter = Router();

coleccionRouter.get("/", coleccionController.getJuegos);
coleccionRouter.get("/:idJuego", coleccionController.getJuego);
coleccionRouter.post("/", coleccionController.addJuego);
coleccionRouter.put("/:idJuego", coleccionController.updateJuego);
coleccionRouter.delete("/:idJuego", coleccionController.deleteJuego);

export default coleccionRouter;


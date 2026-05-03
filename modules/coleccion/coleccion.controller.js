import coleccionService from './coleccion.service';

const coleccionController = {};

coleccionController.getJuegos = (req, res) => {
    const juegos = coleccionService.getJuegos();
    res.status(200).send({
        juegos:juegos
    })
}

coleccionController.getJuego = (req, res) => {
    const idJuego = req.params.idJuego;
    const juego = coleccionService.getJuego(idJuego);
    res.status(200).send({
        juego:juego
    })
}

coleccionController.addJuego = (req, res) => {
    const nombreJuego = req.body.nombre;
    const minj = req.body.minj;
    const maxj = req.body.maxj;
    const duracion = req.body.duracion;
    const fecha = req.body.fecha;
    const estado = req.body.estado;
    
    const juego = coleccionService.addJuego(nombreJuego, minj, maxj, duracion, fecha, estado);

    res.status(201).send({
        msg: "Juego agregado correctamente",
        juego:juego
    })
}

export default coleccionController;

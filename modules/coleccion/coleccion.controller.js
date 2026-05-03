import coleccionService from './coleccion.service.js';

const coleccionController = {};

coleccionController.getJuegos = (req, res) => {
    const juegos = coleccionService.getJuegos();
    res.status(200).send({
        juegos:juegos
    })
}

coleccionController.getJuego = (req, res) => {
    const idJuego = parseInt(req.params.idJuego);
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

coleccionController.updateJuego = (req, res) => {
    const idJuego = parseInt(req.params.idJuego);
    const nombreJuego = req.body.nombre;
    const minj = req.body.minj;
    const maxj = req.body.maxj;
    const duracion = req.body.duracion;
    const fecha = req.body.fecha;
    const estado = req.body.estado;
    const juego = coleccionService.updateJuego(idJuego, nombreJuego, minj, maxj, duracion, fecha, estado);

    if(juego){
        res.status(200).send({
            msg: "Juego actualizado correctamente",
            juego:juego
        })
    }else{
        res.status(404).send({
            msg: "Juego no encontrado"
        })
    }
}

coleccionController.deleteJuego = (req, res) => {
    const idJuego = parseInt(req.params.idJuego);
    const eliminado = coleccionService.deleteJuego(idJuego);

    if(eliminado){
        res.status(200).send({
            msg: "Juego eliminado correctamente",
            juego: eliminado
        })
    }else{
        res.status(404).send({
            msg: "Juego no encontrado"
        })
    }
}

export default coleccionController;

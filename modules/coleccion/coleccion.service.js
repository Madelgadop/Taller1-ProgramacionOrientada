const coleccionService = {};

let counterID = 1;
let juegos = [];

coleccionService.getJuegos = () => {
    return juegos;
}

coleccionService.getJuego = (id) => {
    for (let juego of juegos){
        if(juego.id === id) return juego;
    }
    return null;
}

coleccionService.addJuego = (nombre, minj, maxj, duracion, fecha, estado) =>{
    const newJuego = {
        id: counterID,
        nombre: nombre,
        minj: minj,
        maxj: maxj,
        duracion: duracion,
        fecha: fecha,
        estado: estado,
    }
    counterID++;
    juegos.push(newJuego);
    return newJuego;
}

coleccionService.updateJuego = (id, nombre, minj, maxj, duracion, fecha, estado) => {
    for (let juego of juegos){
        if(juego.id === id){
            juego.nombre = nombre;
            juego.minj = minj;
            juego.maxj = maxj;
            juego.duracion = duracion;
            juego.fecha = fecha;
            juego.estado = estado;
            return juego;
        }
    }
    return null;
}

coleccionService.deleteJuego = (id) => {
    for (let juego of juegos){
        if(juego.id === id){
            const eliminado = juego;
            juegos.splice(juegos.indexOf(juego), 1);
            return eliminado;
        }
    }
    return null;
}

export default coleccionService;
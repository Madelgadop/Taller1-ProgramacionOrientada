const coleccionService = {};

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

coleccionService.addJuego = (id, nombre, minj, maxj, duracion, fecha, estado) =>{
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
function coordenadaMultiple(){
    //obtenemos los pares de coordenadas del textarea
    var coord = document.getElementById("entradaXY").value;
    //convertimos a un array
    var coord_array = coord.split(" ").map(Number);
    //agrupamos en pares [x,y] dentro de una gran lista
    var coord_pares = [];
    for (let i=0; i<coord_array.length; i+=2){
        coord_pares.push([coord_array[i], coord_array[i+1]])
    }
    // Limpiar el div cuyo ID es salida antes de procesar
    document.getElementById("salida").innerHTML = "";
    // empleamos la funcion transformar coordenada de par en par de coordenadas en un for
    for (const[x,y] of coord_pares){
        conviertePunto(x,y);
    }
}
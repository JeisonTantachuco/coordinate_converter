function conviertePunto(x,y) {
    console.log("aquí transformaremos las coordenadas");
    //Definimos los sistemas de referencia de entrada y salida
    var epsgEntradaValor = document.getElementById("EPSGEntrada").value;
    var epsgEntrada = proj4(epsgEntradaValor);
    var epsgSalidaValor = document.getElementById("EPSGSalida").value;
    var epsgSalida = proj4(epsgSalidaValor);
    //Acceder a la definicion registrada para el epsg de salida
    var defString = proj4.defs(epsgSalidaValor);
    console.log(defString);
    //extrayendo la propiedad de elipsoide
    var ellps = defString.ellps
    console.log("Elipsoide:", ellps);
    //obtenemos el valor de entrada del punto
    var coordenadaX = parseFloat(x);
    var coordenadaY = parseFloat(y);
    //creamos el punto de entrada con los valores del formulario
    var pEntrada = proj4.toPoint([coordenadaX,coordenadaY]);
    //transformamos las coordenadas del punto de entrada
    var pSalida = proj4(epsgEntrada,epsgSalida,pEntrada);
    //mostramos el resultados en los campos de salida
    document.getElementById("salida").innerHTML += "Resultado de la transformación de las coordenadas: " + coordenadaX + 
    ","+coordenadaY+" en <b>"+epsgEntradaValor+"</b> al <b>"+epsgSalidaValor+"</b> = "+pSalida.x+","+pSalida.y+"<br/>";
}
function vezesLetraAparece(frase, letra) {
    var resultado = 0;
  
    for (var indiceLetra = 0; indiceLetra < frase.length; indiceLetra++) {
      if (frase[indiceLetra] === letra) {
        resultado++; // Somamos 1 ao contador.
      }
    }
    
    return resultado;
  }
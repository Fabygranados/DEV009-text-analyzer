const analyzer = {  
  getWordCount: (text) => {
    const wordCount = text.split(" ").length;
    return wordCount;
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCount: (text) => {
    const caracteres = text.length;
    return caracteres;
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCountExcludingSpaces: (text) => {
    const cleanText = text.replace(/[^\w]/g, ''); //expresion regular para limpiar texto de estacios y signos de puntuacion
    const contadorCar = cleanText.length;
    return contadorCar;
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },
  getAverageWordLength: (text) => {   
    const palabras = text.split(" "); 
    let sumaLongitud = 0;
    let cantidadPalabras = 0;

    for (let i = 0; i < palabras.length; i ++){ //
      sumaLongitud += palabras[i].length;
      cantidadPalabras++;
    }
    let promedio = sumaLongitud /cantidadPalabras;
    promedio = promedio.toFixed(2);

    return Number(promedio);
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {
    const expReg = /\b\d+(\.\d+)?\b/g; // expresion regular para encontrar numeros que no esten pegados a una letra
    const match = text.match(expReg); //utiliza match() para devolver un array de numeros
    if (match === null){ //si no se encuentran numeros devolvera 0
      return 0;
    }
    return match.length; //si se encuentran numeros, devuelve la cantidad de elementos.
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
    const numeros = text.match(/\b\d+(\.\d+)?\b/g); //expresion regular para extraer solo numeros de un texto

    if (numeros === null){ //si no se encuentran numeros se regresara 0
      return 0;
    }

    let sum = 0;
    for (let i = 0; i < numeros.length; i++) { //este ciclo for corre cada elemento del arry numeros y en cada vuelta agrega elnumero al valor variable sum
      sum += parseFloat(numeros[i]); //toma un string como parametro y devulve un numero entero, convierte el valor numeros[i] en numero entero antes de sumarlo
    }
    return sum;
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
};

export default analyzer;

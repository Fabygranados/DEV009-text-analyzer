import analyzer from './analyzer.js';
const textarea = document.querySelector('textarea');

textarea.addEventListener("keyup", function(){
    const mensaje = textarea.value;
    const caracteres = analyzer.getCharacterCount(mensaje);
    const wordCount = analyzer.getWordCount(mensaje);
    const noEspacios = analyzer.getCharacterCountExcludingSpaces(mensaje);
    const longitudProm = analyzer.getAverageWordLength(mensaje);
    const lonPromedio = document.querySelector(".Promedio");
    const sinEspacios = document.querySelector(".sinEspacios");
    const Palabras = document.querySelector(".palabras");
    const contador = document.querySelector(".caracteres");
    lonPromedio.innerHTML= longitudProm;
    sinEspacios.innerHTML = noEspacios;
    Palabras.innerHTML = wordCount;
    contador.innerHTML = caracteres;
});


const resetMetricas = document.getElementById('reset-button');

resetMetricas.addEventListener('click', function() {
  textarea.value = '';
  let caracteres = document.querySelector('.caracteres');
  caracteres.innerHTML = "0";
  let palabras = document.querySelector(".palabras");
  palabras.innerHTML = "0";
  let sinEspacios = document.querySelector(".sinEspacios");
  sinEspacios.innerHTML = "0";
  let lonPromedio = document.querySelector(".Promedio");
  lonPromedio.innerHTML = "0";
});
//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
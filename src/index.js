import analyzer from './analyzer.js';
const textarea = document.querySelector('textarea');

textarea.addEventListener("keyup", function(){
  const mensaje = textarea.value;
  const caracteres = analyzer.getCharacterCount(mensaje);
  const wordCount = analyzer.getWordCount(mensaje);
  const noEspacios = analyzer.getCharacterCountExcludingSpaces(mensaje);
  const longitudProm = analyzer.getAverageWordLength(mensaje);
  const NumCont = analyzer.getNumberCount (mensaje);
  const SumNum = analyzer.getNumberSum(mensaje);
  const NumSum = document.querySelector(".suma");
  const ContNumeros = document.querySelector(".numeros");
  const lonPromedio = document.querySelector(".Promedio");
  const sinEspacios = document.querySelector(".sinEspacios");
  const Palabras = document.querySelector(".palabras");
  const contador = document.querySelector(".caracteres");
  NumSum.innerHTML = SumNum;
  ContNumeros.innerHTML = NumCont;
  lonPromedio.innerHTML= longitudProm;
  sinEspacios.innerHTML = noEspacios;
  Palabras.innerHTML = wordCount;
  contador.innerHTML = caracteres;
});


const resetMetricas = document.getElementById('reset-button');

resetMetricas.addEventListener('click', function() {
  textarea.value = '';
  const caracteres = document.querySelector('.caracteres');
  caracteres.innerHTML = "0";
  const palabras = document.querySelector(".palabras");
  palabras.innerHTML = "0";
  const sinEspacios = document.querySelector(".sinEspacios");
  sinEspacios.innerHTML = "0";
  const lonPromedio = document.querySelector(".Promedio");
  lonPromedio.innerHTML = "0";
  const ContNumeros = document.querySelector(".numeros");
  ContNumeros.innerHTML = "0";
  const NumSum = document.querySelector(".suma");
  NumSum.innerHTML = "0";
});
//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
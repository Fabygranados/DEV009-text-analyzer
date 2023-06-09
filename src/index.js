import analyzer from './analyzer.js';
const textarea = document.querySelector('textarea');

textarea.addEventListener("keyup", function(){
    const mensaje = textarea.value;
    const caracteres = analyzer.getCharacterCount(mensaje);
    const contador = document.querySelector(".caracteres");
    contador.innerHTML = caracteres;
});




const resetMetricas = document.querySelector('#reset-button');

resetMetricas.addEventListener('click', function() {
  textarea.value = '';
  let caracteres = document.querySelector('.caracteres');
  caracteres.innerHTML = "0";
});
//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
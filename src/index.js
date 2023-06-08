import analyzer from './analyzer.js';
const contadorCaracteres = document.querySelector('textarea[name="user-input"]');

contadorCaracteres.addEventListener("keyup", function(){
    const mensaje = contadorCaracteres.value;
    const caracteres = analyzer.getCharacterCount(mensaje);
    const contador = document.querySelector(".caracteres");
    contador.innerHTML = caracteres;
});
//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
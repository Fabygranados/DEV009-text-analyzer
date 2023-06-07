import analyzer from './analyzer.js';
var actualizarCaracteres = document.querySelector('textarea[name="user-input"]');

actualizarCaracteres.addEventListener("onkeyup", function(){
    var mensaje = document.querySelector('textarea[name="user-input"]').value;
    var caracteres = mensaje.length;
    //contador
    var contador = document.querySelector("#caracteres");
    contador.innerHTML = caracteres;
});
//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
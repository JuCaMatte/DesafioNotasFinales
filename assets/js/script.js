var nota1 = 0;
var nota2 = 0;
var nota3 = 0;
var total = 0;

// Obtener el total de notas
//function obtenerTotal() {
//    return ((nota1 + nota2 + nota3)/3)
//}

function obtenerPromedio(){
    return (((nota1 + nota2 + nota3)/3).toFixed(2))
}

function pedirDatos(asignatura){
    nota1 = +prompt("Ingrese la primera nota del curso de " + asignatura);
    nota2 = +prompt("Ingrese la segunda nota del curso de " + asignatura);
    nota3 = +prompt("Ingrese la tercera nota del curso de " + asignatura);
}

// seleccionar los botones en el documento
var botonHtml = document.getElementById("btn_html");
var botonCss = document.getElementById("btn_css");
var botonJs = document.getElementById("btn_js");

botonHtml.onclick = function() {
  pedirDatos("html");
  document.getElementById("html-nota1").textContent = nota1;
  document.getElementById("html-nota2").textContent = nota2;
  document.getElementById("html-nota3").textContent = nota3;
  document.getElementById("html-promedio").textContent = obtenerPromedio();
}

botonCss.onclick = function(){
  pedirDatos("css");
  document.getElementById("css-nota1").textContent = nota1;
  document.getElementById("css-nota2").textContent = nota2;
  document.getElementById("css-nota3").textContent = nota3;
  document.getElementById("css-promedio").textContent = obtenerPromedio();
}

botonJs.onclick = function(){
  pedirDatos("javaScript");
  document.getElementById("js-nota1").textContent = nota1;
  document.getElementById("js-nota2").textContent = nota2;
  document.getElementById("js-nota3").textContent = nota3;
  document.getElementById("js-promedio").textContent = obtenerPromedio();
}

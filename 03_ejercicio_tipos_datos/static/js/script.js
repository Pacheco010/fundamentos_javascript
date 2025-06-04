// Declaración de variables
let anioNacimiento = 2008;
let numeroDecimal = 3.14;
let cadenaTexto = "Hola, mundo";
let valorBooleano = true;
let arregloNumeros = [1, 2, 3, 4];
let objetoPersona = { nombre: "Ana", edad: 30 };
let valorIndefinido;
let valorNulo = null;
let Edad = 28;
let Rut = 1105689318;
let Altura = 165;
let Fecha = 2025;
const mes = "Junio";

// Funciones para mostrar cada valor con alert()
function mostrarAnioNacimiento() {
  alert("anioNacimiento: " + anioNacimiento);
}

function mostrarNumeroDecimal() {
  alert("Número decimal: " + numeroDecimal);
}

function mostrarCadenaTexto() {
  alert("Cadena de texto: " + cadenaTexto);
}

function mostrarBooleano() {
  alert("Valor booleano: " + valorBooleano);
}

function mostrarArreglo() {
  alert("Arreglo de números: " + arregloNumeros);
}

function mostrarObjeto() {
  alert("Objeto persona: " + JSON.stringify(objetoPersona));
}

function mostrarIndefinido() {
  alert("Valor indefinido: " + valorIndefinido);
}

function mostrarNulo() {
  alert("Valor nulo: " + valorNulo);
}

function mostrarFecha() {
  alert("Fecha: " + Fecha);
}

function mostrarEdad() {
  alert("Edad: " + Edad);
}

function mostrarAltura() {
  alert("Altura: " + Altura);
}

function mostrarRut() {
  alert("Rut: " + Rut);
}
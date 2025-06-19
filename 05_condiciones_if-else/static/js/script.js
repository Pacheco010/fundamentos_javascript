// Ejercicios Condiciones IF - ELSE
console.log("Conexion con js establecido...");

/*Edad para votar
 Solicita la edad del usuario mediante prompt
 (). Muestra con alert() si puede votar
 (18 años o mas) o no.
 */
function edadVotar() {
  let edad = parseInt(prompt("ingrese su edad: ")); // Input conversion string a numero
  // Condicion if - else if - else
  if (edad >= 18) {
    alert("Su edad " + edad + " aprobada para votar.");
  } else if (edad >= 0 && edad < 18) {
    //&& compuerta AND
    alert("Su edad " + edad + " no esta aprobada para votar.");
  } else {
    alert("Ingrese un valor valido");
  }
}

/* Pide una contraseña con prompt(). Si es igual a "1234", 
muestra un mensaje de acceso permitido. 
En caso contrario, muestra acceso denegado.
*/
function passwordValida() {
  let clave = "1234";
  let pass = prompt("Ingrese su contraseña: ");
  // Condicion estructura if - else
  if (pass == clave) {
    alert("Acceso Permitido...");
  } else {
    alert("Acceso Denegado");
  }
}

/*Verificar par o impar
 Pide un número por prompt().
  Evalúa si el número es par o impar
  y muestra el resultado con alert() */
function numeroParoImpar() {
  let numero = prompt("Introduce un número:");
  numero = parseInt(numero);
  if (isNaN(numero)) {
    alert("Por favor, introduce un número válido.");
  } else {
    if (numero % 2 === 0) {
      alert("El número es par.");
    } else {
      alert("El número es impar.");
    }
  }
}

/*Temperatura ambiental
 Solicita la temperatura actual. Si es mayor o igual a 30
 , muestra “Hace calor”, 
 de lo contrario muestra “Clima agradable” */

function temperaturaAmbiental() {
  let temperatura = parseInt(prompt("Ingresar Temperatura"));
  if (temperatura >= 30 && temperatura <= 50) {
    alert("Hace Calor");
  } else if (temperatura >= 15 && temperatura < 30) {
    alert("Agradable");
  } else if (temperatura >= -5 && temperatura <= 15) {
    alert("Hace Frio");
  } else {
    alert("Ingrese un valor Valido");
  }
}

function comparardosNumeros(){
    let a = parseInt(prompt("Ingresa primer numero"));
    let b = parseInt(prompt("Ingresar segundo numero"));
    if (a == b){
        alert( a + " es igual a " + b );
    } else if ( a > b ){
        alert(a + " es mayor a " + b);
    } else {
        alert(b + " es mayor a " + a);
    }
};

function calificarNota(){
    let Nota = parseInt(prompt("Ingresar Nota"));
    if(Nota >= 4){
        alert("Aprobado");
    } else {
        alert("Reprobado");
    }
};

function validarNombre(){
    let Usuario = prompt("Ingrese palabra");
    let usu = "admin";
    if (Usuario == usu){
        alert("Acceso Permitido");
    } else {
        alert("Acceso Denegado");
    }
};

function empiezaconA(){
    let letra = prompt("Ingrese palabra");
    let letraA = "A"
    if (letra[0] == letraA){
        alert("Palabra con A");
    } else {
        alert("Tu palabra no empieza con mayuscula")
    }
};

function tieneDescuento(){
    let producto = parseInt(prompt("Ingrese precio"));
    if (producto >= 10000){
        alert("Obtienes tu descuento")
    } else if (producto <= 9999){
        alert("No tienes descuento")
    }
};

function puedesConducir(){
    let respuesta = "si";
    let edad = parseInt(prompt("Ingresar edad"))
    let licencia = prompt("¿Tienes Licencia?")
    if (edad >= 18 && licencia == respuesta){
        alert("Puedes conducir")
    } else {
        alert("No puedes conducir")
    }
};
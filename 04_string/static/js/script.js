// uso de stribgs ejemplo 

let nombre = "Leonardo"; // Variable tipo texto
// Uso de Length --> Largo de una variable

function usarString(){
  let primeraLetra = nombre[0]; 
  // Asignamos valor a primera letra con posicion 0 de un nombre
  let ultimaLetra = nombre[nombre.length - 1];
 alert("Primera letra es: " + primeraLetra + 
  "\nUltima letra es: " + ultimaLetra, 
  ); // Mostrar resultado 
}

// Tarea Imprimir segunda letra 
// y penultima de el apellido 

let apellido = "Pacheco"; // Variable tipo texto
// Uso de Length --> Largo de una variable

function manipularApellido(){
  let apellido = prompt("Ingrese su Apellido: ");
  let segundaLetra = apellido[1]; 
  let penultimaLetra = apellido[apellido.length - 2];
 
  alert("Segunda letra es: " + segundaLetra + 
  "\nPenultima letra es: " + penultimaLetra);
}
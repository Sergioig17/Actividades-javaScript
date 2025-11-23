//Depuracion 1
/*let nombre = "Ana
console.log(nombre);
*/
//Correcto
let nombre = "Ana";
console.log(nombre);//Comillas no estan cerradas

/* Depu 2
console.log(edad);
let edad = 20;*/
let edad = 20;
console.log(edad);//El let tiene que ocurrir antes que el console.log

/* Depu 3
let a = 5;
let b = 10;
if (a = b) {
  console.log("a es igual a b");
}*/
//Falta un igual en la comparacion
let a = 5;
let b = 10;
if (a == b) { 
  console.log("a es igual a b");
}

/*Depu 4
let i = 0;
while (i < 5) {
  console.log(i);
}*/
//i no tiene incremento es infinito
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
/*Depu 5
function saludar() {
  console.log("Hola " + nombre);
}
saludar();*/
//nombre no inicializado
function saludar() {
  var nombre=prompt("Dime tu nombre");
    console.log("Hola " + nombre);
}
saludar();

//Depu 6
/*
    let frutas = ["manzana", "banana", "pera"];
console.log(frutas[3]);
*/
//los arrays comienzan en 0
let frutas = ["manzana", "banana", "pera"];
console.log(frutas[2]);

/*Depu 7
let persona = { nombre: "Ana", edad: 25 };
console.log(persona.apellido.toUpperCase());
*/
//cambiar a nombre
let persona = { nombre: "Ana", edad: 25 };
console.log(persona.nombre.toUpperCase());

/*Depu 8
let a = 5;
let b = "10";
console.log(a + b);
*/
let a2 = 5;
let b2 = 10;
console.log(a + b);

/*Depu 9
let nota = 8;
if (nota > 5);
{
  console.log("Aprobado");
} else {
  console.log("Reprobado");
}*/
//; despues del if quitandole su funcion
let nota = 8;
if (nota > 5)
{
  console.log("Aprobado");
}else{
  console.log("Reprobado");
}

/*Depu 10 
let numeros = [1, 2, 3, 4, 5];
for (let i = 0; i <= numeros.length-1; i++) {
  console.log(numeros[i]);
}
*/ 
//El metodo te dice el tamaño del array que es 1 más que la ultima posición al recorrerlo
let numeros = [1, 2, 3, 4, 5];
for (let i = 0; i <= numeros.length-1; i++) {
  console.log(numeros[i]);
}
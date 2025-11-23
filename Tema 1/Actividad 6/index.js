/*//Actividad 1
let numero = 10;
if (numero > 5) {
  numero == 20;//Esto es una comprobación
}
console.log(numero);
*/
//Correcion
let numero = 10;
if (numero > 5) {
  numero = 20;
}
console.log(numero);

/*Actividad 2
let ciudad = "Madrid";
console.log(Ciudad); Variable con C mayuscula no existe
*/
let ciudad = "Madrid";
console.log(ciudad);

/*Actividad 4
function sumar(a, b) {
  let resultado = a + b;
} Falta return
console.log(sumar(2, 3));
*/
function sumar(a, b) {
  let resultado = a + b;
    return resultado;
}
console.log(sumar(2, 3));

/*Actividad 5
let saludo = "Hola";
let nombre = "Luis";
console.log(saludo + , nombre);     La coma debe estar entre " y un "+"
*/
let saludo = "Hola";
let nombre = "Luis";
console.log(saludo + "," +nombre);

/*Actividad 6
let dias = ["Lunes", "Martes", "Miércoles"];
console.log(dias[3]); Se sale del array dias la posiciones empiezan en 0
*/
let dias = ["Lunes", "Martes", "Miércoles"];
console.log(dias[2]);

/*Actividad 7
let usuario = { nombre: "Ana", edad: 25 };//se escribe to LowerCase
console.log(usuario.nombre.toLowerCasee());  
*/
let usuario = { nombre: "Ana", edad: 25 };
console.log(usuario.nombre.toLocaleLowerCase());

/*Actividad 8

let edad = 18;
if (edad = 18) { //Falta  otro = para ser comparacion
  console.log("Tienes 18 años");
}
  */
 let edad = 18;
if (edad == 18) {
  console.log("Tienes 18 años");
}

/*Actividad 9
let numeros = [1, 2, 3, 4, 5];
for (let i = 0; i < numeros.length; i++); { El ; despues de la sentencia del for lo corta inutilizandolo
  console.log(numeros[i]);
}
  */
let numeros = [1, 2, 3, 4, 5];
for(let i=0; i < numeros.length; i++) { 
    console.log(numeros[i]);
}

/*Actividad 10
let palabra = "javascript";
for (let i = 0; i <= palabra.length; i++) { .length te dice el tamaño del array no la posicion final ya que las posiciones empiezan en 0 y el tamaño en 1
  console.log(palabra[i]);
}*/
let palabra = "javascript";
for (let i = 0; i < palabra.length; i++) { 
  console.log(palabra[i]);
}

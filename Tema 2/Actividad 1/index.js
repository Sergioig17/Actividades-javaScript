//Convierte las cadenas "123", "3.14" y "abc" en números usando Number(), parseInt() y parseFloat(). Explica la diferencia en los resultados.

var num=Number("123");
var flot=parseFloat(3.14);
var letra=parseInt("abc");

console.log(num);
console.log(flot);
// console.log(letra);

function comEntero(num){
    return (Number.isInteger(num))
}
console.log(comEntero(2));


console.log(" valores: NaN, hello, undefined, 0/0, parseInt(abc).")
console.log(Number.isNaN(NaN)+".."+Number.isNaN("hello")+".."+Number.isNaN(undefined)+".."+Number.isNaN(0/0)+".."+Number.isNaN(parseInt("abc")));
let correcto= Number.isFinite(1/0);
console.log("1/0 es infinito?"+correcto);


//Nivel 2

// Número con decimales fijos
// Dado el número 3.141592, muéstralo con 2, 4 y 6 decimales usando .toFixed.

var pi=3.141592;

console.log("6 decimales: "+ pi.toFixed(6));
console.log("4 decimales: "+pi.toFixed(4));
console.log("2 decimales: "+ pi.toFixed(2));



// Representación exponencial
// Convierte 123456 a notación científica con .toExponential(2).
var num=123456
console.log("Notación cientifica: " + num.toExponential(2));
// Conversión a string con base
// Convierte el número 255 a:
// usando .toString(base).
// Binario
console.log("Binario: "+ num.toString(2));
// Octal
console.log("Octal: "+ num.toString(8));
// Hexadecimal
console.log("Hexadecimal: "+ num.toString(16));

// Precisión controlada
// Usa .toPrecision para representar 123.456789 con 4 y 7 cifras significativas.
console.log("Siete cifras "+ 123.456789.toPrecision(7));

console.log("Cuatro cifras: "+ 123.456789.toPrecision(4));



// Nivel 3 – Retos aplicados
// Validador de números
// Escribe una función que reciba una cadena y devuelva:
// Si es un número válido
// Si es entero o decimal
function ValidarNum(num){
    let resultados="Es valido";
    if(isNaN(num))
        resultados="No es valido"
    else{
        if(Number.isInteger(Number(num))){
            resultados+=". Es entero";
        }
        else{
            resultados+=". Es decimal";
        }
    }
    return resultados;
}
var num2=prompt("Dime un numero y te dire si es valido");
console.log(ValidarNum(num2));
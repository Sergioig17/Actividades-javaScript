// Nivel 1 – Manipulación básica
// Longitud de un string
// Declara la cadena "JavaScript" y muestra cuántos caracteres tiene usando .length.
var cadena= "JavaScript";
console.log(cadena.length);
// Acceso a caracteres
// Obtén el primer y último carácter de la cadena "Hola mundo".
cadena="Hola mundo";
console.log("Primer caracter: "+cadena.charAt(0)+". Ultimo caracter: "+cadena.charAt(cadena.length-1));
// Mayúsculas y minúsculas
// Convierte la frase "Programar es divertido" a:
// Mayúsculas (.toUpperCase())
console.log("Programar es divertido".toUpperCase());
// Minúsculas (.toLowerCase())
console.log("Programar es divertido".toLowerCase());

// Concatenación
// Une las cadenas "Hola" y "Mundo" usando el operador + y el método .concat.
console.log("Hola"+" mundo"+"//"+ "Hola".concat(" mundo"));
// Nivel 2 – Búsqueda y extracción
// Índices de caracteres
// Encuentra en qué posición aparece la primera y la última vez la letra "o" en "Hola mundo".
console.log("Primera vez que aparece: " + "Hola mundo".indexOf('o')+". Ultima vez q aparece: "+ "Hola mundo".lastIndexOf('o'))
// Subcadenas
// Dada la cadena "JavaScript es genial", extrae "JavaScript" y "genial" usando .substring o .slice.
var cadena2= "JavaScript es genial";
console.log(cadena2.substring(cadena2.indexOf("JavaScript"),cadena2.indexOf(" ",cadena2.indexOf("JavaScript"))));
console.log(cadena2.substring(cadena2.indexOf("genial")));
// Reemplazo de texto
// Reemplaza "perro" por "gato" en la frase "El perro corre rápido".
var cadenares="El perro corre rapido";
console.log(cadenares.substring(0,cadenares.indexOf(" "))+ " gato"+ cadenares.substring(cadenares.indexOf(" ", cadenares.indexOf(" ")+1),cadenares.length));
// Incluye o empieza con
// Verifica si la cadena "Frontend Developer":
var cadena3 = "Frontend Developer";
// Incluye "end" (.includes)
console.log(cadena3);
console.log("contiene   con end: "+cadena3.includes("end"));
// Empieza con "Front" (.startsWith)
console.log("Empueza con Front: "+cadena3.startsWith("Front"));
// Termina con "per" (.endsWith)
console.log(cadena3.endsWith("per"));
// Nivel 3 – Transformaciones avanzadas
// Dividir un string
// Convierte la frase "rojo,verde,azul,amarillo" en un array usando .split.
var palabras= "rojo,verde,azul,amarillo".split(",");
console.log(palabras);

// Repetir texto
// Repite la palabra "Hola" 5 veces con .repeat.
console.log("Hola".repeat(5));
// Eliminar espacios
// Elimina los espacios al inicio y al final de la cadena "   Hola mundo   " usando .trim.
console.log("   Hola mundo   ".trim());
// Padding
// Rellena el número "7" a la izquierda con ceros hasta tener "007" usando .padStart.
console.log(("7").padStart(3,"0"));



// Nivel 4 – Retos aplicados
// Contar vocales
// Escribe una función que cuente cuántas vocales hay en una cadena.
function contarvo(cadena){
    var contador=0;
    cadena.toLowerCase();
    for(let i=0;i<cadena.length;i++){
        if(cadena.charAt(i)=='a'||cadena.charAt(i)=='e'||cadena.charAt(i)=='i'||cadena.charAt(i)=='o'||cadena.charAt(i)=='u')
            contador++;
    }
    return contador;
}
    console.log("En \"Hola mundo\""+" hay: "+contarvo("Hola mundo")+" vocales");

// Palíndromo
// Crea una función que verifique si una palabra (ej. "radar") es un palíndromo.
var cadena4="Esternocleidomastoideo";
function palindromo(cadena){
    var cadenaresul="";
    for(let i=cadena.length;i>=0;i--){
        cadenaresul+=cadena.charAt(i);
    }
    return cadena==cadenaresul;
}
console.log(palindromo(cadena4));

// Invertir string
// Invierte la cadena "JavaScript" para que quede "tpircSavaJ".

cadena="JavaScript";
var cadenavuelta;
    for(let i=cadena.length;i>=0;i--){
        cadenavuelta+=cadena.charAt(i);
    }
console.log(cadenavuelta);

// Capitalizar frase
// Escribe una función que convierta "hola mundo desde javascript" en "Hola Mundo Desde Javascript".
function capitalizar(){
    var cadenan="hola mundo desde javascript";
    var resultado= ""+ cadenan.charAt(0).toUpperCase();
    for(let i=1;i<cadenan.length;i++){
        if(cadenan.charAt(i)==' '){
            resultado+= " "+cadenan.charAt(i+1).toUpperCase();
            i++;
        }
        else
            resultado+=cadenan.charAt(i);
    }
    return resultado;
}
console.log(capitalizar());



// Ocultar parte de un string
// Dado un número de tarjeta "1234567812345678", muéstralo como "************5678".
var tarjeta="1234567812345678";
var resul=tarjeta.slice(tarjeta.length-4);
console.log(resul.padStart(tarjeta.length,"*"));

// Contador de palabras
// Dada la frase "El lenguaje JavaScript es muy poderoso", cuenta cuántas palabras tiene.
var cadenault="El lenguaje JavaScript es muy poderoso";
console.log("El lenguaje JavaScript es muy poderoso" +". Tiene: " + cadenault.split(" ").length +" palabras");

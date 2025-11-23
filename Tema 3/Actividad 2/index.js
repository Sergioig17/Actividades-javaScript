// 1 Crear un array con los nombres de 5 frutas e imprimir la primera y última.
// Métodos: length, acceso por índice [ ].
var frutas=["manzana","pera","platano","granada"];
console.log("Primera:"+ frutas[0]+" Ultima:"+frutas[frutas.length-1]);

// 2 Añadir y eliminar elementos al inicio y al final del array.
// Métodos: push(), pop(), unshift(), shift().
frutas.push("piña");
console.log("Despues del push: "+frutas);
frutas.pop();
console.log("Despues del pop: "+frutas);
frutas.unshift("mandarina");
console.log("Despues del unshift: "+frutas);
frutas.shift();
console.log("Despues del shift: "+frutas);

// 3 Recorrer un array e imprimir sus elementos.
// Métodos: for, for...of, forEach().
for(let i=0;i<frutas.length;i++){
    console.log("Elemento por for numero "+i+":"+frutas[i]);
}
for(i of frutas) {
   console.log("Elemento por for of: "+i);
} 

frutas.forEach(fruta => {
    console.log("elemento de foreach:"+fruta);
});
// 4 Buscar un elemento en un array de números.
// Métodos: indexOf(), includes().
console.log(frutas.indexOf("manzana"));
console.log(frutas.includes("pera"));

// 5 Concatenar arrays y mostrar el resultado.
// Métodos: concat(), spread operator ....
var verduras=["zanahoria","lechuga","boniato"];
console.log("Arrays con concat: "+frutas.concat(...verduras));
var conjunto=[...frutas,...verduras];
console.log("Arrays con spread: "+conjunto);

// 🟡 Nivel Intermedio – Transformación y Filtrado
//Objetivo: aprender a transformar, filtrar y ordenar arrays.
// 6 Duplicar los valores de un array numérico.
// Método: map().
var numeros=[2,3,6,1,23,34,4];
console.log(numeros.map(numero=>numero*2));


// 7 Filtrar los números pares de un array.
// Método: filter().

console.log(numeros.filter(numero=>numero%2===0));


// Sumar todos los valores de un array.
// Método: reduce().
console.log(numeros.reduce((total,numero)=>total+numero,0));

// Ordenar un array de nombres alfabéticamente y en orden inverso.
// Métodos: sort(), reverse().
console.log(frutas.sort()) ;

console.log(frutas.reverse());

// Convertir un array en una cadena de texto separada por comas.
// Método: join().
console.log(frutas.join(","));

// Dividir una cadena de texto en un array.
// Método: split().
console.log("A ANTE BAJO CON CONTRA ES PARA POR SI SEGUN QUE".split(" "));

// 🔵 Nivel Avanzado – Manipulación y Combinaciones
// Objetivo: combinar métodos y resolver problemas prácticos.
// 12Eliminar duplicados de un array.
// Métodos: filter(), indexOf(), o Set.
let arrareps=[2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,10,10];
let arranoreps=[];
arranoreps=arrareps.filter(numero=>arrareps.indexOf(numero,arrareps.indexOf(numero)+1)<arrareps.indexOf(numero));
console.log(arrareps);
console.log(arranoreps);
// 13Encontrar el número mayor y menor en un array.
// Métodos: Math.max(), Math.min(), spread operator ....
console.log(Math.max(...arrareps));
console.log(Math.min(...arrareps));

// 14Aplanar un array de arrays.
// Ejemplo: [[1,2],[3,4]]→ [1,2,3,4]
// Método: flat().
let darray=[[1,2],[2,3]];
console.log(darray.flat())
// 15Contar cuántas veces aparece un elemento en un array.
// Métodos: reduce() o forEach().


arrareps=[1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,10];
let inicial=0;
let buscar=1;
let acumulador=0;
arrareps.forEach(elemento=>{
    console.log("Elemento "+elemento+" se repite: "+(arrareps.reduce((acumulador,v)=>{
    if(v==elemento)
        return  acumulador+1;
    else
        return  acumulador;

},0)))
});

// 16 Transformar un array de objetos en un array de una sola propiedad.
// const personas = [
//   { nombre: "Ana", edad: 23 },
//   { nombre: "Luis", edad: 30 }
// ];
// // Resultado esperado: ["Ana", "Luis"]
// Método: map().

const personas = [
   { nombre: "Ana", edad: 23 },
   { nombre: "Luis", edad: 30 }
 ];

 console.log(personas.map(nombre=>nombre.nombre));
//17 Combinar dos arrays (por ejemplo, de nombres y edades) en uno de objetos.
// Método: map().


const personas2 = [
   { nombre: "Ana", apellido:"Gomez" },
   { nombre: "Luis", apellido: "Perez" }
 ];
console.log(personas2.map(elemento=>elemento.nombre+" "+elemento.apellido ));


//18 Ordenar un array de objetos según una propiedad.
// const usuarios = [
//   { nombre: "Ana", edad: 25 },
//   { nombre: "Luis", edad: 30 },
//   { nombre: "Marta", edad: 20 }
// ];
// usuarios.sort((a, b) => a.edad - b.edad);
const usuarios = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 30 },
  { nombre: "Marta", edad: 20 }
];

console.log(usuarios.sort((a,b)=>a.edad-b.edad))
    //19 Extraer elementos únicos y ordenarlos de menor a mayor.
    // Métodos: Set, sort().
console.log(usuarios.map(elemento => elemento.edad).sort((a,b)=>a-b));

//20 Usar encadenado de métodos: Dado un array de números, debes calcular la suma de los cuadrados de los números pares.
// Métodos: map(), filter(), reduce() en cadena
const numeros2=[1,2,3,4,5,6,7,8,9,10]; 
console.log(numeros2.filter(elemento =>elemento%2==0).map(elemento =>Math.pow(elemento,2)).reduce(((acumulador,numero)=>acumulador+=numero),0))



function fact(n){
    let acumulador=1;
    for(let i=n;i>0;i--){
        acumulador*=i;
    }
    return acumulador;
}

console.log(fact(5));
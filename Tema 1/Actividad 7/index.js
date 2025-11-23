/*//Actividad 1
let num1 = Number(prompt("Ingrese el primer número"));
let num2 = Number(prompt("Ingrese el segundo número"));

// Tu código aquí para mostrar suma, resta, multiplicación y división
console.log(num1+num2);
//Actividad 2
let numero = Number(prompt("Ingrese un número"));
// Usa un condicional para determinar si es par o impar
console.log((numero%2==0)?"Es par":"Es impar");

//Actividad 3
let a = Number(prompt("Número 1"));
let b = Number(prompt("Número 2"));
let c = Number(prompt("Número 3"));
// Escribe un condicional para encontrar el mayor
if(a>=b && a>=c)
    console.log("El  mayor es:" +a);
else
    if(b>=a && b>=c)
        console.log("El mayor es:"+b);
    else
        console.log("El mayor es:"+c);

//Actividad 4
let num = Number(prompt("Ingrese un número"));
// Usa un bucle for para mostrar la tabla de multiplicar
for(let i=1;i<=10;i++){
//    document.writeln("<h4>"+i+" X "+num+"="+i*num+"</h4>");
    document.writeln(`<h4> ${i} X ${num} = ${i*num} </h4>`);

}
//Actividad 5
let N = Number(prompt("Ingrese un número"));
// Usa un bucle for y una variable acumuladora para sumar
let resultado=0;
for(let i=0;i<=N;i++){
    resultado=resultado+i;
}
console.log("El resultado es:"+resultado);


//Actividad 6
let positivos = 0;
let negativos = 0;

for(let i = 0; i < 5; i++) {
    let num = Number(prompt(`Ingrese el número ${i+1}`));
    // Incrementa positivos o negativos según corresponda
    num>0?positivos++:negativos++;
}
console.log("Numeros positivos"+positivos);
console.log("Numeros negativos"+negativos);
*/

//Actividad 7
let num3 = Number(prompt("Ingrese un número"));
// Usa un bucle para verificar si es divisible por algún número menor que él
let result=true;
let contador=2;

while(contador<num3 && result){
    if(num3%contador==0)
        result=false;
    contador++;
}
console.log(result?"El numero es primo" : "El numero no es primo");
/*
//Actividad 8
let numero2 = Number(prompt("Ingrese un número"));
let factorial = 1;
// Calcula el factorial con un bucle
for(let i=1;i<=numero2;i++){
    factorial*=i;
}
console.log(factorial);

//Actividad 9
let N2 = Number(prompt("Ingrese un número"));
// Usa un bucle y el operador % para imprimir los pares
console.log("Los numeros pares son:")
for(let i=0;i<=N2;i++){
    if(i%2==0)console.log(i);
}

//Actividad 10
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intento;

while(intento !== numeroSecreto) {
    intento = Number(prompt("Adivina el número entre 1 y 10"));
    // Indica si el intento es mayor, menor o correcto
    console.log(intento>numeroSecreto?"El numero a adivinar es menor":"El numero a adivinar es mayor");
}
console.log("NumeroSecreto adivinado");
*/
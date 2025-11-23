// Nivel 1 – Básicos
// Número absoluto
// Escribe una función que reciba un número y devuelva su valor absoluto usando Math.abs.
function Absoluto(num)
{
    return Math.abs(num);
}
// Redondeo simple
// Pide al usuario un número decimal y muestra:
var num=prompt("Dime un numero");
// Su valor redondeado (Math.round)
console.log("Valor redondeado: "+ Math.round(num));
// Su redondeo por exceso (Math.ceil)
console.log("Valor redondeado por exceso: "+ Math.ceil(num));
// Su redondeo por defecto (Math.floor)
console.log("Redondeo por defecto: " + Math.floor(num));

// Potencias y raíces
// Calcula ( 5^3 ) con Math.pow.
console.log("5^3="+Math.pow(5,3));
// Calcula la raíz cuadrada de 81 con Math.sqrt.
console.log("La raiz cuadrada de 81: "+ Math.sqrt(81));
// Valor máximo y mínimo
// Dado el array [10, -5, 3, 99, 42], encuentra el número más grande y el más pequeño usando Math.max y Math.min.
var array=[10, -5, 3, 99, 42];
console.log("El numero mas grande del array es: "+Math.max(...array));
console.log("El numero mas pequeño del array es: "+Math.min(...array));

// Nivel 2 – Aleatoriedad
// Número aleatorio entre 0 y 1
var aleatori=Math.random();
// Genera un número aleatorio con Math.random y muéstralo.
console.log(aleatori);
// Dado virtual (1–6)
// Usa Math.random y Math.floor para simular el lanzamiento de un dado que devuelva un número del 1 al 6.
console.log(Math.round(aleatori*10));
// Número aleatorio en un rango
// Crea una función que reciba dos números (min, max) y devuelva un número entero aleatorio en ese rango.
function aleatorio(numin,numax){
    return Math.round(aleatori*(numax-numin)+numin);
}
var numin,numax;
numin=Number(prompt("Dime el minimo"));
numax=Number(prompt("Dime el maximo"));
console.log("El aleatorio es: "+aleatorio(numin,numax));
// Nivel 3 – Trigonometría y logaritmos
// Seno y coseno
// Calcula el seno y coseno de 45° (recuerda que Math.sin y Math.cos trabajan en radianes, no en grados).
const pi=Math.PI;
var radianes=45*pi/(45*4);
console.log("El valor del seno de 45 es: "+Math.sin(radianes));
console.log("El valor del coseno de 45 es: "+Math.cos(radianes));
// Tangente y arco tangente
console.log(radianes);
console.log("El valor de la tangente de 45 es: "+Math.tan(radianes));
console.log("El valor de la arcotangente de 45 es: "+Math.atan(radianes));
// Calcula la tangente de 60°.
radianes=60*(pi/180);
console.log("La tangente de 60 grados es: "+ Math.atan(radianes));
// Convierte un valor usando Math.atan a grados.
console.log((Math.atan(radianes))*180/pi);
// Logaritmos

// Calcula el logaritmo natural de 10 (Math.log).
console.log("Logaritmo natural de 10: "+Math.log(10));

// Nivel 4 – Retos aplicados
// Juego: adivina el número
// Genera un número aleatorio entre 1 y 100 y pide al usuario adivinarlo. Indica si el número ingresado es mayor o menor hasta que acierte.
var numalea=Math.round(Math.random()*(100-1)+1);
var intento;
do{
    intento=Number(prompt("Intento para adivinar el numero: "));
    if(intento>numalea){
        console.log("El numero a adivinar es menor")
    }else
        if(intento<numalea)
            console.log("El numero a adivinar es mayor");
}while(numalea!=intento)
console.log("¡Acertaste!")

// Distancia entre dos puntos
// Dadas las coordenadas (x1, y1) y (x2, y2), calcula la distancia usando la fórmula:
// [ \sqrt{(x2 - x1)^2 + (y2 - y1)^2} ]
var x1=prompt("Dime el punto x1");
var x2=prompt("Dime el punto x2");
var y1=prompt("Dime el punto y1");
var y2=prompt("Dime el punto y2");
console.log((Math.sqrt(x2 - x1)^2 + (y2 - y1)^2))

// Simulación de ruleta
// Simula una ruleta que tenga 36 números. Usa Math.random para elegir el número ganador.
console.log(Math.round(Math.random()*(36-1)+1));
// Generador de contraseñas simples
// Usa Math.random y un conjunto de caracteres para crear una contraseña aleatoria de 8 caracteres.
var contraseña="";
var letraalea="ABCDEFGHIJKLMNÑOPQRSTUVWZ"
for(let i=0;i<=8;i++){
    let aleatori2=Math.round(Math.random()*10);
    if(aleatori2%2==0)
        contraseña+=""+Math.round(Math.random()*10);
    else
        contraseña+= letraalea.charAt(Math.random()*24);
}
console.log("La contraseña es:" + contraseña);

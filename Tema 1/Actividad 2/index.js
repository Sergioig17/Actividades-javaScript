var numero= Number(prompt("Dame un numero"));

 if(numero>0){
    console.log("Es positivo");
 }else
    if(numero<0)
        console.log("Es negativo");
    else
        console.log("Es cero");

numero=Number(prompt("Dime tu edad"));
if(numero>=18){
    console.log("Eres mayor de edad");
}
else{
    console.log("Eres menor de edad");
}


numero=Number(prompt("Dime un numero"));
if(numero%2==0){
    console.log("Es par")
}else
    console.log("Es impar")

numero=Number(prompt("Dame tu nota"));
if(numero>=5)
    console.log("Estas aprobado");
else
    console.log("Estass suspenso");

//Ejercicio 5
 var num1=prompt("Dime un numero");
 numero=prompt("Dime otro numero");
 if(numero==num1)
    console.log("Son iguales");
else
    if(numero>num1)
        console.log(numero+" es el numero mayor");
    else
        console.log(num1+" es el numero mayor");


//Ejercicio 6

switch(numero){
    case "1": console.log("Lunes"); 
    break;
    case "2": console.log("Martes");
    break;
    case "3": console.log("Miercoles");
    break;
    case "4": console.log("Jueves");
    break;
    case "5": console.log("Viernes");
    break;
    case "6": console.log("Sabado");
    break;
    case "7": console.log("Domingo");
    break;
    default:console.log("Numero incorrecto");
}

//Ejercicio 7
numero=prompt("Dime una opcion");
switch(numero){
    case "1": console.log("Opción A seleccionada"); 
    break;
    case "2": console.log("Opción B seleccionada");
    break;
    case "3": console.log("Opción C seleccionada");
    break;
    default: console.log("Opción no válida");
}

//Ejercicio 8
var opcion= prompt("Dime un color de semaforo");
switch(opcion){
    case "rojo":console.log("Alto");
    break;
    case "verde":console.log("Avanza");
    break;
    case "amarillo":console.log("Precaución");
}

//Ejercicio 9
opcion=prompt("Dime una fruta");
switch(opcion){
    case "Manzana": console.log("Es una manzana roja");
    break;
    case "Platano": console.log("Es un platano amarillo");
    break;
    case "Uva":console.log("Es una uva morada");
    break;
    default:console.log("Fruta no reconocible");
}

opcion=prompt("Dime una nota escolar");
switch(opcion){
    case "A":console.log("Excelente");
    break;
    case "B":console.log("Muy bien");
    break;
    case "C":console.log("Bien");
    break;
    case "D":console.log("Suficiente");
    break;
    case"F":console.log("Reprobado");
    break;
}
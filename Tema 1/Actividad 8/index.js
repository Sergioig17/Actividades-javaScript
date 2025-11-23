//Actividad 1
let edad = Number(prompt("Ingrese su edad"));
let permiso = prompt("¿Tiene permiso de sus padres? (sí/no)");
// Usa un condicional con && para determinar si puede entrar
if(edad>=18 && permiso=='si'){
    console.log("Si tiene permiso");
}
else
    console.log("No tiene permiso");

//Actividad 2
let matematicas = prompt("¿Aprobó matemáticas? (sí/no)");
let fisica = prompt("¿Aprobó física? (sí/no)");
let quimica = prompt("¿Aprobó química? (sí/no)");
// Usa un condicional con || para determinar si pasa al siguiente nivel
if(matematicas=="si"||fisica=="si"||quimica=="si")
    console.log("Pasas al siguiente curso");
else
    console.log("No pasas al siguiente curso");

// Actividad 3
let contraseña = prompt("Ingrese la contraseña");
// Usa ! para comprobar si no es correcta
let intentoCon=prompt("¿Cual es la contraseña?");
if(intentoCon!=contraseña)
    console.log("Contraseña incorrecta");

//Actividad 4
let numero = Number(prompt("Ingrese un número"));
// Usa && para verificar el rango
if(numero>=10 && numero<=50){
    console.log("El numero esta dentro de un rango");
}
else
    console.log("El numero NO esta dentro de un rango");
    
//Actividad 5
let edad2 = Number(prompt("Ingrese su edad"));
let tutor = prompt("¿Tiene tutor presente? (sí/no)");
// Usa && y || según corresponda
if(edad2>=18 || tutor=="si"){
    console.log("Puede entrar");
}
if(edad<18 && tutor=="no"){
    console.log("No puede entrar");
}

//Actividad 6
let usuario = prompt("Ingrese su usuario");
let contraseña2 = prompt("Ingrese su contraseña");
// Condicional usando && y ||
if((usuario==admin && contraseña2=="1234")|| usuario=="invitado"){
    console.log("Acceso concedido");
}

//Actividad 7
let numero2 = Number(prompt("Ingrese un número"));
// Usa operadores lógicos para evaluar ambas condiciones
if(numero2<0){
    console.log("El numero es negativo");
}
else{
    console.log("El numero es positivo");
    if(numero2<100)
        console.log("Es menor a 100");
    else    
        console.log("Es mayor a 100");
}

//Actividad 8
let dia = prompt("Ingrese un día de la semana");
// Usa || para comparar con lunes, martes, miércoles, jueves, viernes
if(dia =="lunes"||dia =="martes"||dia =="miercoles"||dia=="jueves"||dia =="viernes"){
    console.log("Es un dia laboral");
}else
    console.log("No es un dia laboral");

//Actividad 9
let edad3 = Number(prompt("Ingrese su edad"));
let nacionalidad = prompt("Ingrese su nacionalidad");
// Usa && y >= para verificar la condición
if(edad3>=18 && nacionalidad=="España")
    console.log("Tiene permitido votar");
else
    console.log("No tiene permitido votar");
//Actividad 10
let usuario2, contraseña3;

while (!(usuario2 === "admin" && contraseña3 === "1234")) {
    usuario = prompt("Usuario:");
    contraseña = prompt("Contraseña:");
    // Mensaje de error si no es correcto
    if(usuario!="admin" && contraseña3!="1234")
        console.log("Contraseña o usuario no valido")
}
console.log("¡Acceso permitido!");
var numero=10;
//Ejercicio 1
for(let i=1; i<=numero; i++){

    console.log(i);
}

//Ejercicio 2
numero=5;
var resultado=0;
for(let i=1;i<=numero;i++){
    resultado+=i;
}
console.log(resultado);

//Ejercicio 3
var tabla=Number(prompt("Dime un numero"));

for(let i=1;i<=10;i++){
    console.log(i*tabla);
}

//Ejercicio 4

var numero2=10;
while(numero2>0){
    console.log(numero2);
    numero2--;
}

//Ejercicio 5
resultado2=0;
numero2=1;
while(resultado2<20){
    resultado2+=numero2;
    numero2++;
}
console.log(resultado2);

//Ejercicio 6
var contrasenia;
do{
    contrasenia=prompt("Dime la contraseña");

}while(contrasenia!="1234")
console.log("Contraseña correcta");

//Ejercicio 7
numero2=1;
do{
    console.log(numero2);
    numero2++;
}while(numero2<=5)


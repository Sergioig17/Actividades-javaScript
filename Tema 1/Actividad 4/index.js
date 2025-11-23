const tipo="h";
/*
for(let i=1;i<=6;i++){
    document.writeln("<"+tipo+i+"> Cabezera "+tipo+i+"</"+tipo+i+">");
}

var numcolumnas;
var numalto;
var numancho;
var anchuratotal;

numcolumnas=Number(prompt("Dime el numero de columnas"));
numalto=Number(prompt("Dime el numero de altura"));
numancho=Number(prompt("Dime el numero de ancho"));
anchuratotal=numancho*numcolumnas;

//Ejercicio 4.11
document.writeln("<table border=\"0\" cellspacing=\"2\" bgcolor= \"black\" width= \""+anchuratotal+"\">");
document.writeln("<tr bgcolor= \"white\" height=\""+numalto+"\">")
for(let i=0;i<numcolumnas;i++){
    document.writeln("<td width= \""+numancho+"\">&nbsp</td>");
}
document.writeln("</tr>");
document.writeln("</table>");


//Ejercicio 4.12
numcolumnas=Number(prompt("Dime el numero de columnas"));
numalto=Number(prompt("Dime el numero de altura"));
numancho=Number(prompt("Dime el numero de ancho"));
anchuratotal=numancho*numcolumnas;
document.writeln("<table border=\"0\" cellspacing=\"2\" bgcolor= \"black\" width= \""+anchuratotal+"\">");
document.writeln("<tr bgcolor= \"white\" height=\""+numalto+"\">")
for(let i=0;i<numcolumnas;i++){
    document.writeln("<td width="+numancho+"\" bgcolor=\"black\">&nbsp</td>");
    i++
    document.writeln("<td width="+numancho+"\" bgcolor=\"white\">&nbsp</td>");
}
document.writeln("</tr>");
document.writeln("</table>");

/*
//Ejercicio 4.13
numcolumnas=Number(prompt("Dime el numero de columnas"));
numalto=Number(prompt("Dime el numero de altura"));
numancho=Number(prompt("Dime el numero de ancho"));
anchuratotal=numancho*numcolumnas;
var num=1;

document.writeln("<table border=\"0\" cellspacing=\"2\" bgcolor= \"black\" width= \""+anchuratotal+"\">");
document.writeln("<tr bgcolor= \"white\" height=\""+numalto+"\">")
while(num<=numcolumnas){
    document.writeln("<td width= \""+numancho+"\">&nbsp</td>");
    num++;
}
document.writeln("</tr>");
document.writeln("</table>");
*/

//Ejercicio 4.14
var num2=1;
numcolumnas=Number(prompt("Dime el numero de columnas"));
numalto=Number(prompt("Dime el numero de altura"));
numancho=Number(prompt("Dime el numero de ancho"));
anchuratotal=numancho*numcolumnas;

document.writeln("<table border=\"0\" cellspacing=\"2\" bgcolor= \"black\" width= \""+anchuratotal+"\">");
document.writeln("<tr bgcolor= \"white\" height=\""+numalto+"\">")
while(num2<=numcolumnas){
  document.writeln("<td width="+numancho+"\" bgcolor=\"black\">&nbsp</td>");
    num2++
    document.writeln("<td width="+numancho+"\" bgcolor=\"white\">&nbsp</td>");
}
document.writeln("</tr>");
document.writeln("</table>");

//Ejercicio 4.15
var numClave=0;
let intento;
    numClave=prompt("Dime el numero clave jugador 1");
while(numClave!=intento){
    intento=prompt("Dime el numero que crees que es la clave Jugador 2");
    if(numClave>intento)
        alert("El numero es mayor");
    else
        if(numClave<intento)
            alert("El numero es menor");
}

//Ejercicio 4.16
/*
var numClave2;
var intento2;
    numClave2=prompt("Dime el numero clave jugador 1");
do{
    intento2=prompt("Dime el numero que crees que es la clave Jugador 2");
    if(numClave2>intento2)
        alert("El numero es mayor");
    else
        if(numClave<intento2)
            alert("El numero es menor");
}while(numClave2!=intento2);
*/
//Ejercicio 4.17
for(let i=0;i<=10;i++){
    document.writeln("<H2>Tabla del " +i+"</H2>");
    for(let j=0;j<=10;j++){
        document.writeln("<p>"+j+"x"+i+ "="+j*i+"</p>");
    }
}

/*
//Ejercicio 4.18

numcolumnas=Number(prompt("Dime el numero de columnas"));
numalto=Number(prompt("Dime el numero de altura"));
numancho=Number(prompt("Dime el numero de ancho"));
var numfilas=Number(prompt("Dime el numero de filas"));
anchuratotal=numancho*numcolumnas;

document.writeln("<table border=\"0\" cellspacing=\"2\" bgcolor= \"black\" width= \""+anchuratotal+"\">");
for(let i=0;i<numfilas;i++){
    document.writeln("<tr bgcolor= \"white\" height=\""+numalto+"\">")    
    for(let j=0;j<numcolumnas;j++){
    document.writeln("<td width= \""+numancho+"\">&nbsp</td>");    
    }
    document.writeln("</tr>");
}
document.writeln("</table>");
*/
//Ejercicio 4.19 OPCION A
numcolumnas=8;
numfilas=8;
numancho=Number(prompt("Dime el numero de alto y ancho"))
anchuratotal=numancho*numcolumnas;
var color1,color2;
document.writeln("<table border=\"0\" cellspacing=\"2\" bgcolor= \"black\" width= \""+anchuratotal+"\">");
for(let i=0;i<numfilas;i++){
    document.writeln("<tr bgcolor= \"white\" height=\""+numancho+"\">")    
    if(i%2==0){ //Compruebo si la fila es par(Comenzando en 0 q lo cuenta como par) empieza pintando en negro
        color1="white";
        color2="black";
    }
    else{//En caso de que la fila sea impar empieza en blanco
       color1="black";
        color2="white";
    }
      for(let j=0;j<numcolumnas;j++){
        document.writeln("<td width= \""+numancho+"\"bgcolor= \""+color2+"\">&nbsp</td>");    
        j++
        document.writeln("<td width= \""+numancho+"\"bgcolor= \""+color1+"\">&nbsp</td>");
        }
    document.writeln("</tr>");
}
document.writeln("</table>");

//Ejercicio 4.19 OPCION B
numcolumnas=8;
numfilas=8;
numancho=Number(prompt("Dime el numero de alto y ancho"))
anchuratotal=numancho*numcolumnas;
var aumentofilcolum=0;
var descensofilcolum=0;
document.writeln("<table border=\"0\" cellspacing=\"2\" bgcolor= \"black\" width= \""+anchuratotal+"\">");
for(let i=0;i<numfilas;i++){
    document.writeln("<tr bgcolor= \"white\" height=\""+numancho+"\">")    
    descensofilcolum=i;
    for(let j=0;j<numcolumnas;j++){
        if(j==aumentofilcolum+i){
            document.writeln("<td width= \""+numancho+"\"bgcolor= \"black\">&nbsp</td>");
            aumentofilcolum+=2;            
        }else
            if(i%2==0){
                if(j==i-descensofilcolum){
                    document.writeln("<td width= \""+numancho+"\"bgcolor= \"black\">&nbsp</td>");
                    descensofilcolum-=2;
                }
                else
                document.writeln("<td width= \""+numancho+"\"bgcolor= \"white\">&nbsp</td>");
            }else
                if(j==i-descensofilcolum+1){
                    document.writeln("<td width= \""+numancho+"\"bgcolor= \"black\">&nbsp</td>");
                    descensofilcolum-=2;
                }else
                document.writeln("<td width= \""+numancho+"\"bgcolor= \"white\">&nbsp</td>");    
    }
    aumentofilcolum=0;

    document.writeln("</tr>");
}
document.writeln("</table>");
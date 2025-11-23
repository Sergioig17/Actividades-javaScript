// Aleatoriedad avanzada
// ACT 1 Generador de matrículas aleatorias
// Crea un generador que devuelva matrículas tipo ABC-1234 con letras y números aleatorios.
var letraalea="ABCDEFGHIJKLMNÑOPQRSTUVWZ";
var matricula="";
for(let i=0;i<3;i++){
    matricula+=letraalea[Math.round(Math.random()*(letraalea.length-1))]
}
matricula+="-";
    matricula+=Math.ceil(Math.random()*(9999-1111)+1111);
console.log(matricula);

//ACT 2 Simulador de dados múltiples
// Simula lanzar n dados de m caras. Devuelve un string con los resultados y su suma total.
// Ejemplo: 3 dados de 6 caras → "4, 2, 6 → total 12"
var suma=0;
var dados=20;
var caras=30;
var tirada;
console.log(dados +" dados de "+caras+" caras -");
var resulc="";
for(let i=0;i<dados;i++){
    tirada=Math.ceil(Math.random()*caras);
    suma+=tirada;
    resulc+=tirada +", ";

}
console.log(resulc+ "-> total "+suma);

//ACT 3 Generador de identificadores únicos
// Genera un string alfanumérico aleatorio de 16 caracteres usando Math.random y .toString(36).
// var max="9";
// var min="1";
// var numaale=Math.round(Math.random()*(max.repeat(16)));
// console.log(numaale.toString(36).substring(0,16));
var identificador="";
for(let i=0;i<=16;i++){
    let aleatori2=Math.round(Math.random()*10);
    if(aleatori2%2==0)
        identificador+=""+Math.round(Math.random()*10);
    else
        identificador+= letraalea.charAt(Math.random()*24);
}
console.log(identificador);
// Manipulación de Strings compleja
// Act 4
// Validador de contraseñas
// Escribe una función que valide si una contraseña cumple con:
// Al menos 8 caracteres
// Una mayúscula
// Un número
// Un símbolo especial
// Devuelve un string indicando si es válida o qué reglas no cumple.
function validarcon(contraseña){
    var mayus=false;
    var num=false;
    var espe=false;
    var tamaño=false;
    var resulc;
    var listespe="?¿*!¡|\\ª=$·#@&¬()-_.,-";
    var letrasi;
    if(contraseña.length>=8){
        tamaño=true;
        letrasi=true;
        for(let i=0;i<contraseña.length;i++){
            if(!(isNaN(Number(contraseña[i]))) && num==false){
                num=true;
                letrasi=false;
            }
            if(espe==false)
                for(let j=0;j<listespe.length;j++){
                    if(listespe[j]==contraseña[i]){
                        espe=true;
                        letrasi=false;
                        j=listespe.length;
                    }
                }
            if(letrasi&&(contraseña[i]==(contraseña[i].toUpperCase()))&& mayus==false)
              mayus=true;

   
        }
    }
    if(mayus&&num&&espe){
        resulc="La contraseña es correcta.";
    }
    else
        resulc="Contraseña no valida la contraseña cumple con Tamaño:"+ tamaño+" Mayusculas: "+mayus+" Numeros:" +num +" Especiales:" + espe;    
    return resulc;    
}   
console.log(validarcon("Mellamoberto19!"));
// Act 5
//Compresor de texto (RLE)
// Implementa un compresor de cadenas con Run-Length Encoding:
// "aaabbcddd" → "a3b2c1d3"

function compresor(cadena){
    let resul="";
    var letra="";
    var contador;
    
    for(let i=0;i<cadena.length;i+=contador){
        contador=1;
        letra=cadena[i];
        
        while(letra==cadena[i+contador]){
            contador++; 
        }
        
        resul+=letra+contador;
    }
    
    return resul;
}
console.log(compresor("aaabbcddd"));
//Act 6
//Decodificador de texto (RLE)
// Haz la función inversa:

// "a3b2c1d3" → "aaabbcddd"

function descompresor(cadena){
    let resul="";
    let contador=1;
    for(let i=0;i<cadena.length;i=(i+contador)){
        contador=1;
        while(!isNaN(Number(cadena[i+contador])))
            contador++;

        resul+=cadena[i].repeat(cadena.substring(i+1,i+contador));
    }
    
    return resul;

}


console.log(descompresor("a34b2c1d3"));


// Juego: adivina el número con intentos limitados
// Genera un número aleatorio entre 1 y 100. El usuario tiene 7 intentos. Devuelve mensajes en string indicando si debe subir o bajar, o si ganó.
var adivinar=Math.ceil(Math.random()*(100-1)+1);
var intentos=7;
var oportunidad;
do{
    oportunidad=Number(prompt("Estas en el intento "+intentos+ ". Di un numero:"));
    if(adivinar==oportunidad){
        console.log("Correcto felicidades");
    }
    else{
        if(oportunidad>adivinar)
            console.log("El numero a adivinar es menor");
        else
            console.log("El numero a adivinar es mayor");
    }
    intentos--;
}while(intentos>0 && adivinar!=oportunidad)
    if(intentos==0 && adivinar!=oportunidad)
        console.log("Has perdido el numero era:" + adivinar);
    else
        console.log("Has ganado con " + (intentos+1)+ " intentos");



    //Actividad 8
        function generartarjeta(){
            var tarjeta=(Math.round(Math.random()*(999999999999999-111111111111111)+111111111111111)).toString();
            var suma=0;
            var  numero;
            var valido=false;
            var resul="";
            for(let i=tarjeta.length-1;i>=0;i--){
                if(i%2==0){
                    numero=(tarjeta[i]*2).toString();
                    if(numero.length==1){
                        suma+=Number(numero);
                    }
                    else{
                        do{
                            valido=false;
                            numero=Number(numero[0])+Number(numero[1]);
                            if(numero.toString().length!=1){
                                numero=numero.toString();
                            }
                            else
                                valido=true;
                        
                        }while(!valido);
                        suma+=numero;
                
                    }
                }else
                    suma+=(Number(tarjeta[i]));
            }
            valido=false;
            tarjeta=suma%10==0?tarjeta.concat("0"):tarjeta.concat((10-suma%10).toString());

            for(let i=0;i<tarjeta.length;i=i+4){
                if(i+4==tarjeta.length)
                    resul+=tarjeta.substring(i);
                else
                    resul+=tarjeta.substring(i,i+4)+"-";
            }
            return resul;
        }
        console.log(generartarjeta());


// 9  Analizador de dataset en texto
// Dado un string con números separados por espacios:
// "10 20 30 40 50 60"
// Convierte a array de números y calcula:
// Promedio
// Mediana
// Desviación estándar (Math.sqrt y fórmulas )
var numeros= "10 20 30 40 50 60".split(" ");
function promedionum(numeros){
    let  promedio=0;
    for(let i=0;i<numeros.length;i++){
        promedio+=Number(numeros[i]);
    }
return Math.round(promedio/numeros.length);
}
function mediana(numerosc){
    let numerosn=[];
    for(let i=0;i<numerosc.length;i++){
        numerosn.push(Number(numerosc[i]));
    }
    let mediana=numerosn.length%2==0?(numerosn[numerosn.length/2 -1]+numerosn[numerosn.length/2])/2:numerosn[Math.floor(numerosn.length/2)]
    return mediana;
}

function desviacion(numeros){
    let promedio=promedionum(numeros);
    let desviacion=0;
    for(let i=0;i<numeros.length;i++){
        desviacion+=Math.pow(Number(numeros[i])-promedio,2);
    }   
    return Math.round(Math.sqrt(desviacion/numeros.length-1));
}

console.log("El promedio es:" + promedionum(numeros)+" Mediana:"+mediana(numeros)+" Desviacion:"+ desviacion(numeros));


// 10 Juego de ahorcado simple
// Implementa una versión básica del ahorcado con strings:
// Palabra oculta como "javascript"
// Muestra "j _ v _ s c r i p t"
// Actualiza con cada intento de letra
function ahorcado(secreta){
    secreta=secreta.toLowerCase();
    let pista="|_".repeat(secreta.length).split("|")
    let respuesta;
    let contador=0;
    let intentos=secreta.length;
    let posicionpista=0;
    do{
        if(intentos>0){
            for(i=0;i<(secreta.length-intentos);i++){
                
                posicionpista=Math.floor(Math.random()*secreta.length);
                pista[posicionpista]=secreta[posicionpista];
 
            }
            console.log(pista.toString().replace(/,/g," "));
            respuesta=prompt("Dime tu intento. Te quedan:" + intentos +" intentos").toLowerCase();
            
            if(respuesta==secreta){
                console.log("Correcto");
            }
            else{
                intentos--;
            }

        }
    }while(respuesta!=secreta && intentos!=0)
}
ahorcado("javascript");
window.onload=()=>{
    //ejercicio1();
    //ejercicio2(12);
    //console.log(ejercicio3(")ccc(ccc)cc((ccc(c)))("));
    
    ejercicio4(1);
    //ejercicio5([new Date(),new Date("2005-04-25"),new Date("2005-04-24")]);
    // console.log(ejercicio6([
    //             { id: 1, nombre: "Laptop Gamer", categoria: "Electrónica", precio: 1500, stock: 10 },
    //             { id: 2, nombre: "Silla de Oficina Ergonómica", categoria: "Hogar", precio: 250, stock: 20 },
    //             { id: 3, nombre: "Libro 'Clean Code'", categoria: "Libros", precio: 45, stock: 50 }]
    //             ,"Electrónica")
    //         );
}



//Ejercicio1 recojo una a una las letras de la cadena y si es una vocal aumento el contador de esa vocal luego muestro todos los contadores.
function ejercicio1(cadena){
    let letra="";
    let contadorv=0;

    for(let i=0;i<cadena.length;i++){
        letra= cadena.toLocaleLowerCase().charAt(i);
        if(letra=='a'||letra=='e'||letra=='i'||letra=='o'||letra=='u')
            contadorv++;
    }
    return contadorv;
}



function ejercicio2(numero){
    if(isNaN(numero)){
        numero=100;
    }
    let divisible3=false;
    let divisible5=false;
    let resultado="";
    for(i=1;i<=numero;i++){
        divisible3=(i%3==0);
        divisible5=(i%5==0);
        resultado+=(divisible3&&divisible5?"Div 3 + Div 5,":divisible3?"Div 3,":divisible5?"Div5,":i);
    }

    return resultado;
}


function ejercicio3(cadena){
    let yavistos=[];
    let ultimovisto=0;
    let posicion=0;
    for(let i=0;i<cadena.length;i++){
        if(cadena[i]=="("){
            posicion=ultimovisto==0?cadena.indexOf(")"):cadena.indexOf(")",yavistos[ultimovisto-1]+1);
            if(posicion<i){
                yavistos.push(-1)
            }
            else
                yavistos.push(posicion);
            ultimovisto++;
        }
    }
    return (yavistos.indexOf(-1)==-1)
}



//Coger los minutos y restarles segundo a segundo 
function ejercicio4(minutos){
    let segundos= new Date("2005-04-25 00:"+minutos+":00").getMinutes()*60;
    let queda=1;
    let acabado=false;
    let intervalo=setInterval(()=>{
        if(!acabado){
            segundos-=queda;
            minutos=Math.floor(segundos/60);
            
            console.log(minutos>0?(minutos<10?"0"+minutos:minutos)+":"+(segundos%60<10?"0"+segundos%60:segundos%60):"00:"+(segundos%60<10?"0"+segundos%60:segundos%60));
            if(segundos==0){
                console.log("¡Tiempo terminado!");
                acabado=true;
            }
        }
        else
            clearInterval(intervalo);
    },1000)

}



function ejercicio5(fechas){
    let milisegundos=[];
    let resultado;
    fechas.forEach(fecha => {
        milisegundos.push(fecha.getTime())
    });

    resultado= new Date(Math.min(...milisegundos));
    return resultado;
}


function ejercicio6(objetos,categoria){
    let suma=0;
    if(categoria==undefined){
        objetos.forEach(objeto=>{
            suma+=(objeto["precio"]*objeto["stock"]);
        })
    }
    else{
        objetos.filter(objeto=>objeto["categoria"]==categoria).forEach(objeto=>{
            suma+=(objeto["precio"]*objeto["stock"]);
        })
    }
    return suma
}
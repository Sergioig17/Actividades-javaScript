function creartabla(dimension){
    let mapa=Array(dimension).fill().map(() => Array(dimension));
    let fila,columna,numero;
    let solucion;
    let correcto=true;
    //Impido que la solucion sea 11 para q no se coloque en la posicion 11
    do{
        solucion=(Math.round(Math.random()*(dimension-1)+1))*10+Math.round(Math.random()*(dimension-1)+1);  
    }while(solucion==11)
        //Introduzco la solucion
    fila=Math.floor(solucion/10);
    columna=solucion%10;
    mapa[fila-1][columna-1]=solucion;
    

    do{
        correcto=true;
        fila=Math.floor(Math.random()*(dimension-1)+1);
        columna=Math.floor(Math.random()*(dimension-1)+1);
        if(fila==1 &&columna==1){
            correcto=false;
        }
        if((mapa[fila-1][columna-1]!=undefined)){
            correcto=false;
        }
    }while(!correcto)
    
    numero=fila*10+columna;

    mapa[fila-1][columna-1]=solucion;


    for(let i=0;i<5;i++){
        do{
            correcto=true;
            fila=Math.floor(Math.random()*(dimension-1)+1);
            columna=Math.floor(Math.random()*(dimension-1)+1);
            if(fila==1 &&columna==1){
                correcto=false;
            }
            if((mapa[fila-1][columna-1]!=undefined)){
                correcto=false;
            }
        }while(!correcto)

        mapa[fila-1][columna-1]=numero;
        numero=fila*10+columna;
    }
    mapa[0][0]=numero;

    for(let i=0;i<dimension;i++){
        for(let j=0;j<dimension;j++){
            if(mapa[i][j]==undefined){
                mapa[i][j]=(Math.round(Math.random()*(dimension-1)+1))*10+Math.round(Math.random()*(dimension-1)+1);
            }
        }
    }
        console.log(solucion);
    return mapa

}
var numero=11,columna,fila;
var fin=false;

const mapa=(creartabla(6));

//Muestro la tabla
function Mostrarmapa(mapa){
    let tabla="";
    for(let i=0;i<mapa.length;i++){
        tabla+="+";
        for(let j=0;j<(mapa.length)*5-2;j++){
            tabla+="-";
        }
        tabla+="+\n|";
        for(let j=0;j<mapa[i].length;j++){
            tabla+=mapa[i][j]+" | ";
        }
        tabla+="\n";
    }
    tabla+="+";
    for(let j=0;j<(mapa.length)*5-2;j++){
        tabla+="-";
    }
        tabla+="+";

    return tabla;
}


//BUSQUEDA SOLUCION

document.getElementById("mapa").textContent=Mostrarmapa(mapa);
    do{
    fila=Math.floor(numero/10);
    columna=numero%10;
    if(mapa[fila-1][columna-1]==numero){
        fin=true;
    }
    else{
        numero=mapa[fila-1][columna-1];
        mapa[fila-1][columna-1]=" X ";
        
    }
    document.getElementById("mapa").textContent=Mostrarmapa(mapa);
}while(!fin)
 document.writeln("</br>El numero correcto era:"+numero);
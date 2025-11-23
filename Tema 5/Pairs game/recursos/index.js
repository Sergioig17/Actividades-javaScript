let tiempo;
let funciones=[];
let funcionclick;


window.onload=()=>{
    pares();
}
//Creacion del pares
function pares(){
    let cartas=document.getElementById("cartas");
    tiempo=document.getElementById("tiempo");
    let arraycarta;
    tiempo.innerHTML="01:00";
    
    //bucle para crear todos los espacios de las cartas
    for(let i=1;i<=10;i++){
        let carta=document.createElement("div");
        carta.id="carta"+i;
        let abajo=document.createElement("div");
        abajo.id="abajo";
        abajo.style.zIndex="2";
        let arriba=document.createElement("img");
        arriba.id="arriba";
        arriba.style.zIndex="2";
        arriba.style.opacity="1";
        arriba.src="recursos/imagenes/carta.jpeg";
        abajo.innerHTML="A";
        carta.appendChild(abajo);
        carta.appendChild(arriba);
        cartas.appendChild(carta);
    }
    arraycarta=Array.from(cartas.children);
    rellenarcartas(arraycarta);

    partida(arraycarta);
    
}

//Comienzo del juego
function partida(cartas){
    let buscapar=false;
    let colddown=false;
    let seleccionado=null;
    let correctos=[];
    let primerclick=false;
    let intervalo;
    tiempo.innerHTML="01:00";

    funcionclick=(e)=>{
        let carta=e.target.parentElement;
        if(!primerclick){
            let ahora=59 ;//1 segundo menos que el tiempo de comienzo
            primerclick=true;
            intervalo=setInterval(()=>{
                tiempo.innerHTML=(Math.round(ahora/60)>9?Math.round(ahora/60):("0"+Math.floor(ahora/60)))+":"+(ahora%60>9?ahora%60:("0"+ahora%60));
                ahora--;
                if(ahora<=0){
                    colddown=true;
                    tiempo.innerHTML="Has perdido.Reiniciando...";
                    clearInterval(intervalo);
                    finjuego(cartas);
                }
            },1000);
        }

        if(colddown==false && correctos.indexOf(carta)==-1 && seleccionado!=carta)
        {
            if(!buscapar){
                degradado(carta,1);
                seleccionado=carta;
                buscapar=true;
            }
            else{
                colddown=true;
                buscapar=false;
                degradado(carta,1);
                if(seleccionado.children[0].innerHTML==carta.children[0].innerHTML){
                    correctos.push(seleccionado,carta);
                    colddown=false;
                    if(correctos.length==10){
                        clearInterval(intervalo);
                        tiempo.innerHTML="Felicidades has ganado y te ha sobrado:"+tiempo.innerHTML+". Reiniciando...";
                        cartas.map(carta=>degradado(carta),2);
                        finjuego(cartas);
                    }
                }
                else{
                    setTimeout(()=>{
                        degradado(carta,2);
                        degradado(seleccionado,2);
                        colddown=false;
                    },1000);
                }
            }
        }
    }
    
    cartas.forEach(carta => {
        funciones.push(funcionclick);
        carta.addEventListener("click",funcionclick);
    });

}


function finjuego(cartas)
{
    cartas.forEach(carta =>{
        removeEventListener("click",funcionclick);
    });
    setTimeout(()=>
    {   
        rellenarcartas(cartas)
        partida(cartas);
    },1000);
    
}

//opcion 1 borra opcion 2 aparece
function degradado(carta,opcion){
    let arriba=carta.children[1];
    let fin=0.2;
    let intervalo
    switch (opcion){
        case 1:
            intervalo=setInterval(()=>{
                arriba.style.opacity=(Number(arriba.style.opacity)-fin);

                if(arriba.style.opacity<=0){
                    clearInterval(intervalo);
                }
            },50)
        break;
        case 2:
            
            intervalo=setInterval(()=>{
                arriba.style.opacity=(Number(arriba.style.opacity)+fin);
                if(arriba.style.opacity>=1)
                    clearInterval(intervalo);
            },50);      
        break;
    }
    
}


//Relleno las cartas
function rellenarcartas(cartas){
    let posibles=[["&#128049;","&#128054;","&#128045;","&#128037;","&#129437;"],[0,0,0,0,0]];
    
    cartas.map((carta)=>{
        let abajo=carta.children[0];
        let arriba=carta.children[1];
        arriba.style.opacity="1";
        let aleatorio;
        do{
            aleatorio=Math.floor(Math.random()*posibles[0].length);
        }while(posibles[1][aleatorio]==2)
        
        abajo.innerHTML=posibles[0][aleatorio];
        posibles[1][aleatorio]++;

    })
}



function reiniciar(){

}
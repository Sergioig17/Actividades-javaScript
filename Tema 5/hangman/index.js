const abecedario = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z','-'];
const palabras=['Granada','Madrid','Barcelona','Valencia','Sevilla','Bilbao','Zaragoza','Granada','Malaga','Toledo','Salamanca','Santander','Valladolid','Cordoba','San-sebastian','Murcia'];
let botones;
var vidas;
var felecte;
var feleccl;

window.onload=()=>{
    ahorcado();
}


//La partida
function ahorcado(){
    let pregunta=document.getElementById("pregunta");
    botones=document.getElementById("botones");
    let palabra=palabras[Math.floor(Math.random()*palabras.length)];
    iniciar(palabra);
    botones=botones.children;
    var pulsadas=[];    
    //Al puslatr con tecla esta es la funcion que se ejecuta
    felecte=(e)=>{
        if(abecedario.indexOf(e.key.toLocaleLowerCase())!=-1 && pulsadas.indexOf(e.key)==-1){
            eleccion(botones[e.key.toLocaleLowerCase()],palabra)
            pulsadas.push(e.key);
        }
    };
    document.addEventListener("keydown",felecte);

    //Array de funciones para luego permitirme borrar los eventos
    feleccl=[];
    for(let i=0;i<botones.length;i++){
        feleccl.push((e)=>eleccion(botones[i],palabra));
        botones[i].addEventListener("click",feleccl[i]);
    }

    
}

//Inicio el juego con las vidas a 10 y coloco la palabra secreta en la pantalla
function iniciar(palabra){
    let letras=palabra.split("");
    let boton;
    vidas=10;

    recuento=document.getElementById("vidas");
    recuento.innerHTML="You have "+vidas+" lives";



    for(let i=0;i<letras.length;i++){
        pregunta.innerHTML+="_";
    }

    for(let i=0;i<abecedario.length;i++){
        boton=document.createElement("button");
        boton.id=abecedario[i];
        boton.innerHTML=abecedario[i];
        botones.appendChild(boton);
    }

}


//Funcion que se activa al elegir una letra comprueba si esta en la palabra y la deshabilita
function eleccion(boton,palabra){
    let letra=boton.id;
    if(palabra.toLocaleLowerCase().indexOf(letra)!=-1){
        cambio(palabra,letra);
        boton.style.backgroundColor="blue";
        resultado(palabra);
    }
    else{
        boton.style.backgroundColor="grey";
        resultado();
    }
    boton.disabled=true;
        
}

//Intercambio las letras
function cambio(palabra,acertada){
    let resultado=pregunta.innerHTML.split("");
    let contador=0;
    resultado.map(letra=>{
        if(contador==palabra.toLocaleLowerCase().indexOf(acertada,contador)){
            resultado[contador]=contador==0?acertada.toLocaleUpperCase():acertada;
        }
        contador++;
    },0);
    pregunta.innerHTML=resultado.join("");
}



//Funcion que resta vidas
function resultado(palabra){
    
    if(palabra!=null){
        if(palabra==pregunta.innerHTML){
            document.removeEventListener("keydown", felecte);
            for(let i=0;i<botones.length;i++){
                botones[i].removeEventListener("click",feleccl[i]);
            }
            recuento.innerHTML="You win";
        }
    }
    else{
        vidas--;
        if(vidas<=0){
            document.removeEventListener("keydown", felecte);
            for(let i=0;i<botones.length;i++)
                botones[i].removeEventListener("click",feleccl[i]);
            recuento.innerHTML="You lose";
        }
        else
            recuento.innerHTML="You have "+vidas+" lives";
    }
}

let miBola;
var miBarra;
var marco;
let bloques=[];
let posX;
let posY;
let velocidadX;
let velocidadY;
let primeraejecucion=true;
let intervalo;
let dificultad=1;
let moverbarra;
let pararbarra;
let vidas=3; 
let siguientenivel=false;
window.onload=()=>{
    comienzo();
};

function comienzo(){
    velocidadY=-2;
    velocidadX=3;
    if(primeraejecucion){
        marco=document.getElementById("marco")
        miBarra=document.createElement("div");
        miBarra.id="barra";
        marco.appendChild(miBarra);
        miBola=document.createElement("div");
        miBola.id="bola";
        miBarra.after(miBola);
        primeraejecucion=false;
       creacionMapa(dificultad);
    }
    if(siguientenivel==true){
        creacionMapa(dificultad);
        siguientenivel=false;
    }
    let posicionXbarra=marco.getBoundingClientRect().width*0.5-miBarra.getBoundingClientRect().width/2;
    miBarra.style.marginLeft=posicionXbarra+"px";
    miBarra.style.marginTop=marco.getBoundingClientRect().bottom-(marco.getBoundingClientRect().height*0.2)+"px"

    posY=(miBarra.getBoundingClientRect().y-marco.getBoundingClientRect().y-miBarra.getBoundingClientRect().height);
    posX=((miBarra.getBoundingClientRect().right)-marco.getBoundingClientRect().x-(miBarra.getBoundingClientRect().width/2));
    miBola.style.marginTop=posY+"px";
    miBola.style.marginLeft=posX+"px";


    let primera=true;
    let movimiento=false;
    let ultima;

    let velocidadbarra=4;

    moverbarra=(e)=>{
        if(primera){
            if(e.key=="ArrowLeft")
                velocidadX*=-1;
            if(e.key=="ArrowLeft"||e.key=="ArrowRight"){
                animajuego();
            primera=false;
            }
        }
        if(!movimiento){
            if(e.key=="ArrowRight"&&miBarra.getBoundingClientRect().right<marco.getBoundingClientRect().right){
                ultima=e.key;
                intervalo=setInterval(()=>{
                    if(miBarra.getBoundingClientRect().right<marco.getBoundingClientRect().right &&((!choquebarra(miBola.getBoundingClientRect(),2)))){
                        posicionXbarra +=velocidadbarra;
                        miBarra.style.marginLeft=posicionXbarra+"px";
                        movimiento=true;
                    }                
                },1);
            }
            else{
                if(e.key=="ArrowLeft"&& miBarra.getBoundingClientRect().x>marco.getBoundingClientRect().x){
                    ultima=e.key;
                    intervalo=setInterval(()=>{
                        if(miBarra.getBoundingClientRect().x>marco.getBoundingClientRect().x){
                            posicionXbarra-=velocidadbarra;
                            miBarra.style.marginLeft=posicionXbarra+"px";
                            movimiento=true;
                        }
                    },1);
                }
            }
        }
    };
    pararbarra=(c)=>{   
        if(ultima==c.key){
            clearInterval(intervalo);
            movimiento=false;
        };
    }

    document.addEventListener("keydown",moverbarra);
    document.addEventListener("keyup",pararbarra);
    

}

function creacionMapa(dificultad){
    let insertar=document.getElementById("niveles")
    let bloques_nivel=[]
     let heart = [
[0,0,1,1,0,0,1,1,0,0],
[0,0,1,1,0,0,1,1,0,0],
[0,1,1,1,1,1,1,1,1,0],
[0,1,1,1,1,1,1,1,1,0],
[1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1],
[0,1,1,1,1,1,1,1,1,0],
[0,1,1,1,1,1,1,1,1,0],
[0,0,1,1,1,1,1,1,0,0],
[0,0,1,1,1,1,1,1,0,0],
[0,0,0,1,1,1,1,0,0,0],
[0,0,0,1,1,1,1,0,0,0],
[0,0,0,0,1,1,0,0,0,0],
]

let extra=true;
    if(extra==true){
        for(let i=0;i<heart.length;i++){
            let nivel=document.createElement("div");
            nivel.id="nivel"+i;
            for(let j=0;j<heart[i].length;j++){
                let bloque=document.createElement("div");
                bloque.className="bloque";
                if(heart[i][j]==1){
                nivel.appendChild(bloque);        
                insertar.appendChild(nivel);
                bloque.style.marginTop=((Math.ceil(bloque.getBoundingClientRect().height*i)+marco.getBoundingClientRect().y+marco.getBoundingClientRect().height*0.03)+"px");
                bloque.style.marginLeft=(Math.ceil(bloque.getBoundingClientRect().width)*j)+"px";
                bloques_nivel.push(bloque);    
            }
                //MarginTop tiene en cuenta el margen del marco y el tamaño de este intenta estar en el 4% del margen del borde superior del marco
                
            }
            bloques.push(bloques_nivel);
            bloques_nivel=[];
            nivel="";
        }
    }else{
    for(let i=0;i<dificultad;i++){
        let nivel=document.createElement("div");
        nivel.id="nivel"+i;
        for(let j=0;j<10;j++){
            let bloque=document.createElement("div");
            bloque.className="bloque";
            nivel.appendChild(bloque);        
            insertar.appendChild(nivel);
            //MarginTop tiene en cuenta el margen del marco y el tamaño de este intenta estar en el 4% del margen del borde superior del marco
            bloque.style.marginTop=((Math.ceil(bloque.getBoundingClientRect().height*i)+marco.getBoundingClientRect().y+marco.getBoundingClientRect().height*0.03)+"px");
            bloque.style.marginLeft=(Math.ceil(bloque.getBoundingClientRect().width)*j)+"px";
            bloques_nivel.push(bloque);
        }
        bloques.push(bloques_nivel);
        bloques_nivel=[];
        nivel="";
    }
    }
    
}
let intervalopelota;
function animajuego(){
    intervalopelota=setInterval(()=>{
        posY+=velocidadY;
        posX+=velocidadX;
        miBola.style.marginTop=posY+"px";
        miBola.style.marginLeft=posX+"px";
        
        let bola=miBola.getBoundingClientRect();
        
        choquebloque(bola);
        
        if(choquemarco(bola)){
            final(false);
        }

        choquebarra(bola);

    },3)
}


function choquebloque(bola){
    let borrado=false;
    let niveles=document.getElementById("niveles");
        for(let i=0;i<bloques.length;i++){
            let nivel=document.getElementById("nivel"+i);
            for(let j=0;j<bloques[i].length;j++){   
                let bloque=bloques[i][j].getBoundingClientRect();
                if (bola.bottom >= bloque.top && bola.top <= bloque.bottom 
                 && bola.right  >= bloque.left && bola.left <= bloque.right) { 
                    let arriba = Math.abs(bola.bottom - bloque.top);
                    let horizontalizq = Math.abs(bola.right - bloque.left);
                    let horizontalder = Math.abs(bola.left - bloque.right);
                    let abajo=Math.abs(bola.top-bloque.bottom);
                    let colision=Math.min(arriba, horizontalder, horizontalizq,abajo);
                    nivel.removeChild(bloques[i][j]);
                    if(nivel.childElementCount==0){
                        niveles.removeChild(nivel);
                        if(niveles.childElementCount==0){
                            final(true);
                        }
                    }
                    {if(!borrado)
                        if (colision==arriba ||colision==abajo ) {
                            if(horizontalder<velocidadX ||horizontalizq<velocidadX){
                               velocidadX*=-1;
                               if((arriba<1 && velocidadY>0)||(abajo<1 &&velocidadY<0))
                                velocidadY*=-1;
                            }
                            else
                                velocidadY *= -1;
                            
                        } else {
                            velocidadX *= -1;
                        }
                        borrado=true;
                    }
            }
        }        
    }
}


function choquebarra(bola,opcion){
    let tocar=false;
    let barra=miBarra.getBoundingClientRect();
    if (bola.bottom+Math.abs(velocidadY) > barra.top && bola.top-Math.abs(velocidadY) < barra.bottom 
    && bola.right+Math.abs(velocidadX )> barra.left && bola.left-Math.abs(velocidadX) < barra.right) { 
        let vertical = Math.abs(bola.bottom - barra.top);
        let horizontalizq = Math.abs(bola.right - barra.left);
        let horizontalder = Math.abs(bola.left - barra.right);
        tocar=true;
        if(opcion==null){
            if (Math.min(vertical, horizontalder, horizontalizq)==vertical &&velocidadY>0) {
                velocidadY *= -1;
            } else {
                velocidadX *= -1;
            }
        }
    }
    
    return tocar;
}

function choquemarco(bola){
    let perdiste=false;
        if(bola.y<marco.getBoundingClientRect().y){
            velocidadY*=-1;
        }else{
            if(bola.bottom>marco.getBoundingClientRect().bottom){
                perdiste=true;
            }
        }
        
        if(bola.right>marco.getBoundingClientRect().right || bola.x<marco.getBoundingClientRect().x){
            velocidadX*=-1;
        }
    return perdiste
}


function final(resultado){
    clearInterval(intervalo);
    clearInterval(intervalopelota);
    if(resultado){
        dificultad++;
        document.removeEventListener("keydown",moverbarra);
        document.removeEventListener("keyup",pararbarra);
        siguientenivel=true;
        bloques=[];
        comienzo();
    }
    else{
        let corazones=document.getElementById("vidas");
        vidas--;
        document.removeEventListener("keydown",moverbarra);
        document.removeEventListener("keyup",pararbarra);
        if(vidas>0){
            corazones.children[vidas].children[0].src="recursos/imagenes/Corazon-Vacio.png";
            comienzo();    
        }
        else{
            let perder=document.createElement("div");
            perder.id="lose"
            perder.innerHTML="<img src=recursos/imagenes/you-died.gif></img>";
            perder.style.zIndex="1000px";
            marco.appendChild(perder);
            setTimeout(()=>{
                let reiniciobot=document.createElement("button");
                reiniciobot.innerHTML="¿Reiniciar?";
                perder.innerHTML="<h2>Has perdido</h2>";
                perder.appendChild(reiniciobot);
                reiniciobot.addEventListener("click",reinicio);
                perder.style.backgroundColor="red";
                perder.style.opacity="70%";
                
            },2000);
        }
    }
}

function reinicio(){
    let perder=document.getElementById("lose")
    marco.removeChild(perder);
    let niveles=document.getElementById("niveles");
    let vecesborrar=niveles.childElementCount;
    for(let i=0;i<vecesborrar;i++){
        niveles.removeChild(niveles.children[0]);
    }
    marco.removeChild(miBarra);
    marco.removeChild(miBola);
    niveles.childrens;
    primeraejecucion=true;
    vidas=3;
    
    document.removeEventListener("keydown",moverbarra);
    document.removeEventListener("keyup",pararbarra);
    clearInterval(intervalo);
    clearInterval(intervalopelota);
    comienzo();
}

function nivelesex(){    
    dificultad=4;
    clearInterval(intervalo);
    clearInterval(intervalopelota);
    comienzo();
}
let miBola; //La bola del juego
var miBarra; //Barra del juego
var marco; //Mapa o marco del juego
let intervalopelota; //Movimiento de la bola 
let intervalo; //Movimiento de la barra
let bloques=[]; //array de todos los bloques en la pantalla para la busqueda de su golpeo
let posX; //Posicion que cambia de la bola en X
let posY; //Posicion que cambia de la bola en Y
let velocidadX; //Velocidad x de la bola
let velocidadY; //velocidad Y de la bola
let primeraejecucion=true; //dice si es la primera vez del juego en ejecutarse
let dificultad=1;//Dificultad inicial es decir cuantas filas de bloques son creadas
let moverbarra; //variable del movimiento de la barra
let pararbarra;//nombre variable que detiene la barra
let vidasinic=3;// Vidas iniciales aumentarlas si es necesario no deberia causar fallos
let vidas; //Vidas a lo largo del juego usadas para cambiar las imagenes vidas
let siguientenivel=false; //Avisa si se debe pasar de nivel
let abierto=false; //Abierto es para el final del juego al perder permitir la aparicion del menu y evitar errores con el boton reinicio
//Todo ocurre una vez la ventana es cargada
window.onload=()=>{
    comienzo();
};


function comienzo(){ //Empieza el juego Crea los botones de extra y reinicio la bola  las vidas las cuales son posicionadas con css, la bola y la barra
    let bextra;
    let breinicio;
    velocidadY=-2;
    velocidadX=3;
    if(primeraejecucion){
        vidas=vidasinic;
        let vidasul=document.getElementById("vidas"); 
        //Creo las vidas
        for(let i=1;i<=vidas;i++){
            let li=document.createElement("li");
            li.innerHTML="<img src=\"recursos/imagenes/Corazon-Lleno.png\" alt=\"vida-llena\">"
            vidasul.appendChild(li);
        }
        //Creacion de los botones inicio y extra ademas de añadir su funcion
        breinicio=document.getElementById("breinicio");
        bextra=document.getElementById("bextra");
        breinicio.addEventListener("click",reinicio); 
        bextra.addEventListener("click",nivelesEx);
        //Creo barra y bola
        marco=document.getElementById("marco")
        miBarra=document.createElement("div");
        miBarra.id="barra";
        marco.appendChild(miBarra);
        miBola=document.createElement("div");
        miBola.id="bola";
        miBarra.after(miBola);
        primeraejecucion=false;
        //Creo el primer nivel
       creacionMapa(dificultad);
    }
    //Posiciono la barra y la bola
    let posicionXbarra=marco.getBoundingClientRect().width*0.5-miBarra.getBoundingClientRect().width/2;
    miBarra.style.marginLeft=posicionXbarra+"px";
    miBarra.style.marginTop=marco.getBoundingClientRect().bottom-(marco.getBoundingClientRect().height*0.2)+"px" 
    posY=(miBarra.getBoundingClientRect().y-marco.getBoundingClientRect().y-miBarra.getBoundingClientRect().height);
    posX=((miBarra.getBoundingClientRect().right)-marco.getBoundingClientRect().x-(miBarra.getBoundingClientRect().width/2));

    //Evita que la bola este en el sitio donde ha pasado de nivel al siguiente para que no destruya un bloque por error(Increiblemente lo soluciona)
    do{
        miBola.style.marginTop=posY+"px";
        miBola.style.marginLeft=posX+"px";
    }while(miBola.style.marginTop!=(posY+"px")) 
    
    //Creo el mapa si paso de nivel
    if(siguientenivel==true){
        creacionMapa(dificultad);
        siguientenivel=false;
    }

    //variables para el movimiento de la barra
    let primera=true;
    let movimiento=false;
    let ultima;//Ultima flecha usada
    let velocidadbarra=4;

    moverbarra=(e)=>{
        if(primera){
            if(e.key=="ArrowLeft" && velocidadX>0)
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
                    //Compruebo que no toque a la bola para evitar colisiones extrañas si lo hace se detiene y no se
                    if(miBarra.getBoundingClientRect().right<marco.getBoundingClientRect().right &&!choquebarra(miBola.getBoundingClientRect(),2)){
                        posicionXbarra +=velocidadbarra;
                        miBarra.style.marginLeft=posicionXbarra+"px";
                        movimiento=true;
                    }                
                },1);
            }
            else{
                if(e.key=="ArrowLeft"&& miBarra.getBoundingClientRect().x>marco.getBoundingClientRect().x && !choquebarra(miBola.getBoundingClientRect(),2)){
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

//Funcion de la creacion del mapa le paso el nivel para que cree barras nivel extra dificultad=-1
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
        ];

let extra=dificultad<0;
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
            //MarginTop tiene en cuenta el margen del marco y el tamaño de este intenta estar en el 3% del margen del borde superior del marco
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


//movimiento de la bola
function animajuego(){
    intervalopelota=setInterval(()=>{
        posY+=velocidadY;
        posX+=velocidadX;
        miBola.style.marginTop=posY+"px";
        miBola.style.marginLeft=posX+"px";
        
        let bola=miBola.getBoundingClientRect();
        
        
        choquebloque(bola);
        //Devulve true si toca el borde inferior
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
                if (bola.bottom+1 >= bloque.top && bola.top-1 <= bloque.bottom 
                 && bola.right+1  >= bloque.left && bola.left-1 <= bloque.right) { 
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


//Funcion que controla el choque de la barra devuelve true si ocurre lo que detiene la barra
function choquebarra(bola,opcion){
    let tocar=false;
    let barra=miBarra.getBoundingClientRect();
    if (bola.bottom+Math.abs(velocidadY) > barra.top && bola.top-Math.abs(velocidadY) < barra.bottom 
    && bola.right+Math.abs(velocidadX )> barra.left && bola.left-Math.abs(velocidadX) < barra.right) { 
        tocar=true;
        if(opcion==null){
            let vertical = Math.abs(bola.bottom - barra.top);
            let abajo= Math.abs(bola.y-barra.bottom);
            let horizontalizq = Math.abs(bola.right - barra.left);
            let horizontalder = Math.abs(bola.left - barra.right);
            if (Math.min(vertical, horizontalder, horizontalizq,abajo)==vertical &&velocidadY>0) {
                velocidadY *= -1;
            } else {
                velocidadX *= -1;
            }
        }
    }
    
    return tocar;
}

//Rebota la bola en lso bordes devuelve true si toca el borde inferior
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


//Reinicia el juego y dependiendo del resultado avanza de nivel, pierde una vida o muestra el mensaje de perdido
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
        corazones.children[vidas].children[0].src="recursos/imagenes/Corazon-Vacio.png";
        document.removeEventListener("keydown",moverbarra);
        document.removeEventListener("keyup",pararbarra);
        if(vidas>0){
            comienzo();    
        }
        else{
            abierto=true;
            let perder=document.createElement("div");
            perder.id="lose"
            perder.innerHTML="<img src=recursos/imagenes/you-died.gif></img>";
            perder.style.zIndex="1000px";
            marco.appendChild(perder);
            setTimeout(()=>{
                let reiniciobot=document.createElement("button");
                reiniciobot.id="breinicio";
                perder.innerHTML="<h2>Has perdido</h2>";
                perder.appendChild(reiniciobot);
                reiniciobot.addEventListener("click",()=>reinicio(1));
                perder.style.backgroundColor="red";
                
            },2000);
        }
    }
}

//Funcion que Reinicia el juego
function reinicio(opcion){
    if(opcion==1||abierto){
        abierto=false
        let perder=document.getElementById("lose")
        marco.removeChild(perder);
    }
    if(opcion==2){
        dificultad=-1;
    }
    else{
        dificultad=1;
    }
    let vidasul=document.getElementById("vidas");
    vidasul.innerHTML="";
    bloques=[];
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


//Activa el nivel extra
function nivelesEx(){    
    reinicio(2);
}
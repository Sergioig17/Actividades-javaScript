window.onload=()=>{
    carrera();
};

function carrera(){
    let limite=document.getElementById("limite");
    let progreso=document.getElementById("progreso");
    let buton=document.getElementById("boton");
    let resultado=document.getElementById("resultado");
    let fin=false;
    let maximo=limite.style.width;
    let tamaño=progreso.style.width;
    
    console.log(maximo);    
    buton.addEventListener("click",()=>{
        if(!fin){
            progreso.style.width=Number(tamaño.substring(0,tamaño.indexOf("px")))+10+"px";
            tamaño=progreso.style.width;
        }
        if(Number(tamaño.substring(0,tamaño.indexOf("px")))>=Number( maximo.substring( 0,maximo.indexOf("px") ) ) ){
            resultado.innerHTML="ACABASTE";
            fin=true;    
        }
    });


}
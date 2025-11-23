window.onload=()=> {
reloj();
};


function reloj(){
    /*Recojo todos los valores que uare los 3 botones 
    y el reloj ademas de crear una variable intervalo 
    y un contador de segundos*/

    let botones=document.getElementById("botones");
    let relojvis=document.createElement('div');
    let start=document.getElementById("start");
    start.disabled=false;
    let stop=document.getElementById("stop");
    let reset=document.getElementById("reset");
    let intervalo;
    let ahora=0;

    relojvis.id="reloj";
    relojvis.innerHTML="00:00";
    botones.before(relojvis)


    start.addEventListener("click",()=>{
        start.disabled=true;
        intervalo=setInterval(()=>{
            relojvis.innerHTML=(Math.round(ahora/60)>9?Math.round(ahora/60):("0"+Math.round(ahora/60)))+":"+(ahora%60>9?ahora%60:("0"+ahora%60));
            ahora++;
        },1000);
    });

    stop.addEventListener("click",()=>{
        clearInterval(intervalo);
        start.disabled=false;
    });

    reset.addEventListener("click",()=>{
        clearInterval(intervalo);
        relojvis.innerHTML="00:00";        
        ahora=0;
        start.disabled=false;
    })
}



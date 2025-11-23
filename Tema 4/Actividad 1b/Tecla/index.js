window.onload=()=>{
    juego();
}

function juego(){
    let pregunta=document.getElementById("pregunta");
    let respuesta=document.getElementById("respuesta");
    let tecla;
    let letras="abcdefghijklmnopqrstuvwyz".split("");
    let correcto=false;
    let aleatorio=Math.floor(Math.random()*letras.length);

    pregunta.innerHTML="Pulsa la tecla:\""+letras[aleatorio]+"\"";
    tecla=document.addEventListener("keydown",(e)=>{
        correcto=e.key==letras[aleatorio]?true:false;
        
        respuesta.innerHTML="La respuesta era: " +correcto;
    })


}
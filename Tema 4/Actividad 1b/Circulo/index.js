window.onload=()=>{
    
    circulojuego();   
}
function circulojuego(){
    let circulo=document.getElementById("circulo");
    let solucion=document.getElementById("solucion");
    let tiempo=Math.floor((Math.random()*(5-2) )+2)*1000;
    let click=false;
    circulo.style.backgroundColor="grey";
    solucion.innerHTML="";

    
    let tarde = setTimeout((e)=>{
        alert("DEMASIADO TARDE");
        circulojuego();
    },tiempo+1000)


    let intervalo=setTimeout(() => {
        circulo.style.backgroundColor="green";
        click=true;
       // finalizar=setInterval(circulojuego,tiempo+1000);
    },(tiempo));

   
   

    circulo.addEventListener("click",(e)=>{
        if(click){
            solucion.innerHTML="¡Reflejos rapidos!"        
        }
        else{
            solucion.innerHTML="Demasiado pronto"
        }
        clearTimeout(intervalo);
        clearTimeout(tarde);
        
        setTimeout(circulojuego,2000);
    })

}
window.onload=()=>{
    let colores=document.getElementsByTagName("td");
    let pregunta=document.getElementById("pregunta");
    let respuesta=document.getElementById("resultado");
    let coloralea;

    function colorelegir(){
        let aleatorio=Math.floor(Math.random()*4);
        return colores[aleatorio].id;
    }

    coloralea=colorelegir();

    pregunta.innerHTML="Pulsa el color: "+coloralea;
    
    for(let i=0;i<colores.length;i++){
       colores[i].addEventListener("click",(e)=>{
            if(colores[i].id==coloralea){
                respuesta.innerHTML="Es correcto";
            }
            else{
                respuesta.innerHTML="Es incorrecto";
            }
            coloralea=colorelegir();
            pregunta.innerHTML="Pulsa el color: "+coloralea;

        });
    };
}
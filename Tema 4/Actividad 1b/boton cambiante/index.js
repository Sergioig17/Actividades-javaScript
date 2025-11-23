window.onload=()=>{
    let boton=document.getElementById("boton");
    
    
    boton.addEventListener("mouseover",(e)=>{
        boton.style.backgroundColor="red";
    });


    boton.addEventListener("mouseleave",(e)=>{
        boton.style.backgroundColor="";
    })

    boton.addEventListener("click",(e)=>{
        boton.innerHTML="ME HAS HECHO CLICK";
    })
}
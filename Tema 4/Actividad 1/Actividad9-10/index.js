window.onload=()=>{
    let imagenes=document.getElementsByTagName("img");
    let img;
    let soltar=document.body;
    let cY;
    let cX;
    // for(let i=0;i<imagenes.length;i++){
    //     imagenes[i].addEventListener("click",(e)=>{
    //         if(!clickado){
    //             img=e.target;
    //             clickado=true;
    //             cY=e.clientY-img.offsetTop;
    //             cX=e.clientX-img.offsetLeft;
    //         }
    //         else
    //             clickado=false;
    //     });
    // }

    // document.addEventListener("mousemove", (e)=>{
    //     if (clickado){
    //         console.log(e.clientX+"X+"+e.clientY);
    //         img.style.top=(e.clientY-cY)+"px";
    //         img.style.left=(e.clientX-cX)+"px";
    //     }
    // });
    
    
    for(let i=0;i<imagenes.length;i++){
        imagenes[i].addEventListener("dragstart",(e)=>{
            img=e.target;
            cY=e.clientY-img.offsetTop;
            cX=e.clientX-img.offsetLeft;
        })
    }
  
    soltar.addEventListener("dragover",(e)=>{
        e.preventDefault();
    });

    soltar.addEventListener("drop",(e)=>{
        img.style.left=(e.clientX-cX)+"px";
        img.style.top=(e.clientY-cY)+"px";
    });
}
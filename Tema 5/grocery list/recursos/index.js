let contador=0;
let lista;
window.onload=()=>{
    recoger();
}

function recoger(){
    lista=document.getElementById("lista");
    let botonborrartodo=document.getElementById("limpieza");
    let anadir=document.getElementById("anadir");
    let texto=anadir.children[0];
    let boton=anadir.children[1];
    boton.addEventListener("click",(e)=>{
        e.preventDefault();
        if(texto.value.trim()!="")
            insertar(texto.value);
        texto.value="";
    });
    botonborrartodo.addEventListener("click",()=>limpieza());
}

function insertar(item,posicion){
    contador++;
    const botonedit=document.createElement("img");
    botonedit.id="edit";
    botonedit.src="recursos/editar.png";
    const botonborrar=document.createElement("img");
    botonborrar.id="borrar";
    botonborrar.src="recursos/borrar.png";
    const texto=document.createElement("p");
    let insertar=document.createElement("div");
    
    texto.innerHTML=item;
    insertar.appendChild(texto);
    insertar.appendChild(botonedit);
    insertar.appendChild(botonborrar);
    botonedit.addEventListener("click",(e)=>editar(e.target));
    botonborrar.addEventListener("click",(e)=>borrar(e.target));
    if(posicion==null||lista.childElementCount==0){
        if(posicion==null)
            insertar.id="item"+contador;
        else{
            insertar.id="item"+posicion;
        }
        lista.appendChild(insertar);
    }else{
        insertar.id="item"+posicion;
        contador--;
        let encontrado=false;
        let anterior;
        let articulo;
        let pos_anterior;
        for(let i=lista.childElementCount-1;i>=0&&!encontrado;i--){
            articulo=lista.children[i];
            pos_anterior=Number(articulo.id.substring(articulo.id.lastIndexOf("m")+1,articulo.id.length));
            encontrado=pos_anterior<posicion;
        }
        if(encontrado){
            anterior=document.getElementById("item"+pos_anterior);
            anterior.after(insertar);
        }
        else{
            lista.children[0].before(insertar);
        }
    }
}





function editar(item){
    item=item.parentElement;
    item.innerHTML="";
    let nuevoinsertar=document.createElement("form");
    nuevoinsertar.id="editar";
    let nuevotxt=document.createElement("input");
    let botonconfirm=document.createElement("input");
    botonconfirm.type="submit";
    botonconfirm.name="submit";
    botonconfirm.id="submit";
    botonconfirm.value="Editar";
    nuevotxt.type="text";
    nuevotxt.name="text";
    nuevotxt.id="text";


    nuevoinsertar.appendChild(nuevotxt);
    nuevoinsertar.appendChild(botonconfirm);
    item.appendChild(nuevoinsertar);
    
    botonconfirm.addEventListener("click",(e)=>{
        e.preventDefault();
        let posicion=Number(item.id.substring(item.id.lastIndexOf("m")+1,item.id.length));
        if(nuevotxt.value.trim()!=""){
            insertar(nuevotxt.value,posicion);
            lista.removeChild(item);
        }
    });
}


function borrar(item){
    if(item.id=="borrar")
        item=item.parentElement;

    lista.removeChild(item);  
}




function limpieza(){
   while(lista.childElementCount>0){
        borrar(lista.children[0]);
    }
}

let miDiv1=document.getElementById("div1");
let miDiv2=document.getElementById("div2");


miDiv1.addEventListener("mouseover",cambioColorE);

miDiv1.addEventListener("mouseout",cambioColorS);
miDiv2.addEventListener("click",(e)=>{miDiv1.style.backgroundColor="green"});




document.addEventListener("mousemove",(e)=>{
    if(e.clientX>500){
        e.target.style.backgroundColor="pink";
    }
    else{
        e.target.style.backgroundColor="white";
    }
})

 function cambioColorE(event){
    if(event.altKey)
       miDiv2.style.background="red";
    else if(event.ctrlKey){
        miDiv2.style.background="yellow";
    }else
        miDiv2.style.background="blue";
    
}

function cambioColorS(event){
    event.target.style.background="white";
}
var segundos=0;
var miDiv=document.getElementById("reloj");
function Intervalo(){
    let horaActual = new Date();
    let hora=horaActual.getHours();
    let minutos=horaActual.getMinutes();
    let segundos=horaActual.getSeconds();
   miDiv.innerHTML = ((hora>=10?hora:("0"+hora%10))+":"+(minutos>=10?minutos:"0"+minutos%10)+":"+(segundos>=10?segundos:"0"+segundos%10))
}
Intervalo();
setInterval(Intervalo,1000);
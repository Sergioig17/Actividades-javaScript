
function comprobarGanador(jugador1,jugador2){
    let win=0;
    switch(jugador1){
        case "TIJERA":
                jugador2=="PAPEL"?win=1 : jugador2=="PIEDRA"?win=2 : win=0;
            break;
        case "PAPEL":
            jugador2=="PIEDRA"?win=1:jugador2=="TIJERA"?win=2:win=0;
        break;
        case "PIEDRA":
            jugador2=="TIJERA"?win=1 : jugador2=="PAPEL"?win=2:win=0;
        break;
    }
    return win;
}


function juego(){
    let puntos1=0;
    let puntos2=0;
    let jugador1;
    let jugador2;
    do{
        jugador1=prompt("Jugador 1 INTRODUCE TU JUGADA:(PIEDRA PAPEL O TIJERA):").toLocaleUpperCase().trim();
        while(jugador1!="PIEDRA" && jugador1!="PAPEL"&& jugador1!="TIJERA"){
            jugador1=prompt("INTRODUZCA UNA JUGADA VALIDA:(PIEDRA PAPEL O TIJERA)").toLocaleUpperCase().trim();
        }

        jugador2=prompt("JUGADOR 2 INTRODUCE TU JUGADA:(PIEDRA PAPEL O TIJERA):").toLocaleUpperCase().trim();
        while(jugador2!="PIEDRA"&& jugador2!="PAPEL"&& jugador2!="TIJERA"){
            jugador2=prompt("INTRODUZCA UNA JUGADA VALIDA:(PIEDRA PAPEL O TIJERA)").toLocaleUpperCase().trim();
        }
        
        comprobarGanador(jugador1,jugador2)==1?puntos1++:comprobarGanador(jugador1,jugador2)==2?puntos2++:"";
    }while(puntos1<3 &&puntos2<3
        
    );

    console.log(puntos1==3?"El jugador 1 ha ganado":"El jugador 2 ha ganado");
}

juego();
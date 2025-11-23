
class TresEnRaya{
    tablero;
    jugada;
    jugadas1=[];
    jugadas2=[];    
    nombrejug1;
    nombrejug2
    turno;

    constructor(nombrejug1,nombrejug2){
        this.tabla=Array(3).fill().map(()=>Array(3));
        this.nombrejug1=nombrejug1;
        this.nombrejug2=nombrejug2;
        this.turno=0;
    }

    //0 si se movio y nadie gano
    //1 Si al mover estaba ocupado
    //2 No es tu turno
    //3 Ha ganado
    //4 Tabla llena
    #mover(fila,columna,jugador){
        let jugada;
        let movimiento=1;
        let posicion=fila-1*10+columna-1;
        jugada=jugador==1?"X":"O";
        
        if(this.tabla[fila-1][columna-1]==undefined)
        {
            this.tabla[fila][columna]=jugada;
            jugador==1?this.jugadas1.push(posicion):this.jugadas2.push(posicion);
            movimiento=this.comprobarGanador(jugador)==1?3:0; 
            //Comprobar devuelve 1 si ha ganado 0 si no ha ganado pero ha ganado dentro del programa programa se ve como 3      
        }

        return movimiento;
4
    }


    moverJ1(fila,columna){
        let valor;
        turno++;
        if(turno>9 && turno%2!=0){
            valor=this.#mover(fila,columna,1);
        }
        else
            turno%2!=0?valor=2:4;
        return valor;
    }

    moverJ2(fila,columna){
        let valor;
            //Esto significa que la tabla esta llena
        turno++;
        if(turno>9 && turno%2!=0){
            valor=this.#mover(fila,columna,2
            );
        }
        else
            turno%2!=0?valor=2:4;
        return valor;
    }

    //Devuelve 1 si ha ganado o 0 si no ha ganado
    comprobarGanador(jugador){
        let win=0;
        let piezasalin=0;
        const jugganadoras=[
            [0,1,2],[10,11,12],[20,21,22] //filas
            ,[0,10,20],[1,11,21],[2,12,22]//columnas
            ,[0,11,22],[2,11,20]//diagonales
        ]
        if(jugador==1){
            jugganadoras.forEach(jugada => {
                piezasalin=0;
                jugada.forEach(numero=>{
                    if(jugadas1.indexOf(numero)>-1){
                        piezasalin++;
                    }
                })
                win=piezasalin==3?1:0;
            });
        }
        else{
            jugganadoras.forEach(jugada => {
                piezasalin=0;
                jugada.forEach(numero=>{
                    if(jugadas2.indexOf(numero)>-1){
                        piezasalin++;
                    }
                })
                win=piezasalin==3?1:0;
            })
        }
        return win;
    }

};
// Nivel 1 – Creación y lectura de fechas
// Fecha actual
// Crea un objeto Date que represente la fecha y hora actual.
var actual=new Date();
console.log(actual);
// Fecha específica
// Crea un objeto Date con tu fecha de nacimiento (año, mes, día).
const nacimiento =new Date("2005-5-17");
console.log(nacimiento);
// Obtener partes de una fecha
// Dado un objeto Date, muestra:
// Año (getFullYear)
console.log("Año: "+ actual.getFullYear());
// Mes (getMonth)
console.log("Mes: "+ actual.getMonth());
// Día (getDate)
console.log("Dia: "+actual.getDate());
// Día de la semana (getDay)
console.log("Dia de la semana: "+actual.getDay());
// Hora, minutos y segundos (getHours, getMinutes, getSeconds)
console.log("Hora:"+actual.getHours()+":"+actual.getMinutes()+":"+actual.getSeconds());
// Convertir a string
// Muestra la fecha actual en formato legible usando .toDateString() y .toTimeString().
console.log(actual.toDateString());
console.log(actual.toTimeString());

// Nivel 2 – Operaciones con fechas
// Sumar días
// Escribe una función que reciba una fecha y un número de días, y devuelva la nueva fecha resultante.
function sumaDias(fecha, dias){
    let result;
    dias=dias*24*3600000;
    result=dias+fecha.getTime();
    let fechares= new Date(result);
    return fechares;
}
console.log(sumaDias(actual,15));

// Diferencia entre dos fechas
// Calcula cuántos días faltan desde hoy hasta el próximo 31 de diciembre.
function finano(){
    let fecha= new Date();
    let result;
    let finde=new Date(fecha.getFullYear()+"-12-31");
    result=finde.getTime()-fecha.getTime();
    let diasres=Math.ceil(result/(1000*3600*24));
    return diasres;
}
console.log("Quedan "+finano()+" dias");
// Comparar fechas
// Dadas dos fechas, determina cuál es anterior y cuál posterior.
var fecha1=new Date("2005-04-25");
var fecha2= new Date("2005-04-24");
var fecha1mil= fecha1.getTime();
var fecha2mil= fecha2.getTime();
if(fecha1mil>fecha2mil)
    console.log("El mayor es:"+ fecha1.toDateString());
else
    if(fecha2mil>fecha1mil)
        console.log("El mayor es "+ fecha2.toDateString())
    else
        console.log("Ambas fechas son iguales");

// Primer día del mes
// Crea una función que, dado un año y un mes, devuelva qué día de la semana fue el primer día de ese mes.
actual=new Date()
function primerdia(fecha){
    fecha.setDate("01");
    return fecha.getDay()-1;
}
var semana=["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
console.log(semana[primerdia(actual)]);

// Nivel 3 – Formateo y zonas horarias
// ISO string
// Convierte la fecha actual a formato ISO (.toISOString()).
actual= new Date();
console.log("Version ISO: "+actual.toISOString());
// Fecha local y UTC
// Muestra la misma fecha en hora local y en UTC.
console.log("VERSION LOCAL: "+actual.toLocaleString());
console.log("Version UTC:"+actual.toUTCString());

// Formateo personalizado
// Escribe una función que reciba un objeto Date y devuelva un string con el formato:
// DD/MM/YYYY HH:mm:ss
function formatoFe(fecha){
    return Intl.DateTimeFormat("es").format(actual);
}
console.log(formatoFe(actual));

// Internacionalización
// Usa Intl.DateTimeFormat para mostrar la fecha actual en:
// Español (España)
console.log("Español: "+ new Intl.DateTimeFormat("es").format(actual));
// Inglés (EE.UU.)
console.log("Ingles: "+ new Intl.DateTimeFormat("en-US").format(actual));
// Japonés
console.log("Japon:"+new Intl.DateTimeFormat("ja").format(actual))


// Nivel 4 – Retos aplicados
// Cuenta atrás
// Crea un programa que muestre en consola los días, horas, minutos y segundos que faltan para Año Nuevo.
function anioNuevo(){
    const today= new Date();
    const fin= new Date("2025/12/31");
    let horas = Math.abs(fin.getHours() - today.getHours());
    let meses= fin.getMonth() - today.getMonth();
    let dias = fin.getMonth() - today.getDay();
    let mins = Math.abs(fin.getMinutes() - today.getMinutes());
    let seg = Math.abs(fin.getSeconds() - today.getSeconds());
    let cadena=("Faltan " + meses + " meses, "+ dias +" dias,"+ horas+ " horas,"+ mins+ " min," + seg +" segundos.");
    return cadena;
}

console.log(anioNuevo());
// Edad exacta
// Escribe una función que reciba una fecha de nacimiento y calcule la edad exacta en años, meses y días.
var nac=new Date("2005-05-17");
var actual3=new Date();






// Calendario simple
// Genera un array con todas las fechas de un mes específico (ej. septiembre 2025).

// Próximo viernes 13
// Escribe un programa que encuentre la próxima fecha que sea viernes 13.
function encuentraViernes13(){
    let resultado = new Date();
    let encontrado = false;
    while(!encontrado){
        if(resultado.getDay() == 5 && resultado.getDate()==13)
            encontrado=true;
        else
            resultado.setDate()(resultado.getDate()+1);
    }
    return resultado;
}
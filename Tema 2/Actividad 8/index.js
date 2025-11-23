// Nivel Básico
// 1btener tu ubicación actual (latitud y longitud)
// Usar navigator.geolocation.getCurrentPosition.
// Mostrar las coordenadas en consola.

var map = L.map('map').setView([0,0], 13);
var marker = L.marker([0,0]).addTo(map);


//2 Mostrar la ubicación en la página
// Obtener latitud y longitud.
// Insertarlas en body de tu página
/*
function obtengoPosicion(posicion){
    console.log("Latitud:"+posicion.coords.latitude+"\nLongitud:"+posicion.coords.longitude);
    document.getElementById("localizacion").textContent="Latitud:"+posicion.coords.latitude+"\nLongitud:"+posicion.coords.longitude;

    map.setView([posicion.coords.latitude, posicion.coords.longitude], 20);
   
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
   marker.setLatLng([posicion.coords.latitude,posicion.coords.longitude]);
    console.log(posicion.coords.accuracy);
}


if(navigator.geolocation){
    navigator.geolocation.watchPosition(obtengoPosicion);
}
else
    console.log("No soporta");

// 3 Manejo de errores
// Implementar onError en getCurrentPosition.
// Mostrar mensajes si el usuario deniega permisos o si ocurre un error.
function error(err){
    console.log("Error");
}

//navigator.geolocation.getCurrentPosition(obtengoPosicion,error);

// 🔹 Nivel Intermedio
// 4 Actualizar ubicación en tiempo real
// Usar navigator.geolocation.watchPosition.
// Mostrar en la página cómo cambian las coordenadas al moverte.


// 5Integración con Google Maps o Leaflet

// Mostrar tu ubicación en un mapa interactivo con un marcador.
// El mapa debe actualizarse cuando cambies de posición (con watchPosition).

//6 Mostrar precisión de la ubicación
// Mostrar en pantalla el valor de coords.accuracy.




// 7 Calcular la distancia entre dos ubicaciones
// Guardar dos pares de coordenadas (tu ubicación y otra fija).
// Implementar una función que use la fórmula de Haversine para calcular la distancia.
function harvesine(latitud1,longitud1,latitud2,longitud2){
const R=6371000;
let distancialat= ((latitud2-latitud1)/2)*360/Math.PI;
let distancialng= (longitud2-longitud1)/2*360/Math.PI;
let parte1=Math.pow(Math.sin(distancialat),2);
let parte2=Math.cos(longitud1*360/Math.PI)*Math.cos(longitud2*360/Math.PI)*Math.pow(Math.sin(distancialng),2);
let raiz=Math.sqrt(parte1+parte2);
let  resultado=Math.round((2*R*Math.asin(raiz))/1000);
console.log(resultado+ " metros harvesine ");
}
var long1 = -67.9766140755
var lat1 = 9.36642904389
var long2 = -67.4801781185
var lat2 = 9.48364826587
harvesine(lat1,long1,lat2,long2);

*/
// 🔹 Nivel Avanzado
// 8Trazar ruta en un mapa
// Usar Leaflet o Google Maps.
// Dibujar una polilínea con tus posiciones registradas por watchPosition
var listadoPuntos=[];
var polyline;
var radio=2;
var primerah;
var centro=L.point(0,0);
document.getElementById("localizacion").textContent="Distancia recorrida:"+0;
document.getElementById("tiempo").textContent="El tiempo transcurrido es:00:00:00";


function succes(pos){
    var distancia;
    var punto=[pos.coords.latitude, pos.coords.longitude];
    listadoPuntos.push(punto)
    var diferenciaH;
    var diferenciaS;
    var diferenciaM;
    if(listadoPuntos.length==1){
        map.setView(punto, 20);
        primerah=Date.now();

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        marker.setLatLng(punto);  
        polyline=L.polyline(listadoPuntos).addTo(map);
        
        centro=punto;
        
        var circle = L.circle(punto, {
        color: 'blue',
        fillColor: 'rgba(0, 60, 255, 1)',
        fillOpacity: 0.5,
        radius: radio
        }).addTo(map);
    }
   else{
        map.setView(punto, 20);
        marker.setLatLng(punto);
        polyline.setLatLngs(listadoPuntos);
        distancia=Math.round(map.distance(centro,punto));
        if(distancia>radio){
            marker.bindPopup("Salistes del circulo").openPopup();
        }
        diferenciaS=Math.round(((Date.now()-primerah)/1000)%60);
        diferenciaM=Math.round((((Date.now()-primerah)/1000)/60)%60);
        diferenciaH=Math.round((((Date.now()-primerah)/1000)/60)/60);

        document.getElementById("localizacion").textContent="Distancia recorrida:"+distancia;
        document.getElementById("tiempo").textContent="El tiempo transcurrido es:"+(diferenciaH>10?(diferenciaH):("0"+diferenciaH))+":"+(diferenciaM>10?(diferenciaM):("0"+diferenciaM))+":"+(diferenciaS>10?diferenciaS:("0"+diferenciaS));
    }

}

navigator.geolocation.watchPosition(succes)



//9Geofencing básico
// Definir un área (círculo en el mapa).
// Detectar si entras o sales de esa área según tu posición.




//10App de rastreo de actividad
// Guardar posiciones periódicamente en un array.
// Calcular distancia recorrida y tiempo transcurrido.
// Mostrar resultados en pantalla.

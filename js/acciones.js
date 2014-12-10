// JavaScript Document
$(document).ready(function(e) {
    //WatchId se refiere  a la aceleracion 'actual'
	//
	var watchID = null;
	
	document.addEventListener("deviceready", Dispositivo_Listo, false);
	
	// Cuando esta listo el dispositivo 
	//
	function Dispositivo_Listo() {
		comienza();
	}
	// Empieza la 'observacion' de la aceleracion
	//
	function comienza() {
		//Actualiza la aceleracion cada 2 segundos
		//
		var opciones = { frequency: 2000 };
		
		watchID = navigator.accelerometer.watchAcceleration(correcto, Error, opciones);
		navigator.geolocation.getCurrentPosition(Localiza, ErrorLocalizacion);
	}
	
// Detiene la 'observacion' de la aceleracion
//
 function Detente() {
	 if (watchID) {
		 navigator.accelerometer.clearwatch(watchID);
		 watchID = null;
	 }
 }
 // correcto: Toma una captura de la aceleracion
 //
 function correcto(acceleration) {
	 var element = document.getElementById('acelerometro');
	 element.innerHTML = 'Aceleracion en x: ' + aceleration.x + '<br />' +
	                     'Aceleracion en y: ' + aceleration.y + '<br />' +
						 'Aceleracion en z: ' + aceleration.z + '<br />' +
						 'Intervalo: '   + acceleration.timestamp + '<br />';
 }
 //Error: falla al obtener la aceleracion
 //
 function Error(){
	 alert('Error!');
 }
 //Exito al localizar
 //
 function Localiza(posicion) {
	 var element = document.getElementById('geolocalizacion');
	 element.innerHTML = 'Latitud: ' + posicion.coords.latitude  + '<br />'+
	 'Longitud: ' + posicion.coords.longitude + '<br />' +
	 'Altitud: ' + posicion.coords.altitude + '<br />' +
	 'Precision: ' + posicion.coords.accuracy + '<br />' +
	 'Precision de Altitud: ' + posicion.coords.altitudeAccuracy + '<br />' +
	 'Direccion: ' + posicion.coords.heading + '<br />' +
	 'Velocidad: ' + posicion.coords.speed + '<br />' +
	 'Intervalo: ' + posicion.timestamp  +' <br />';
 }
 //Error en la geoolocalizacion 
 //
 function ErrorLocalizacion(error) {
	 alert('codigo: '+ error.code  + ' \n' +
	     'mensaje: ' + error.message + '\n');
 }
	 
});


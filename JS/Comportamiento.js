
 /*Con este codigo pretendo utilizar el evento click para poder mostrar mi nombre**/
document.getElementById('nombre').onclick = function () {
		document.getElementById('nombre').innerHTML = "Fred Fuller";
}

/*Con este codigo pretendo utilizar el evento click para poder mostrar mi fecha de nacimiento**/
document.getElementById('boton').onclick = function () {
	console.log("Capture el evento click");
	document.getElementById('demo').innerHTML = "18/10/2005";
}
/*Con este codigo pretendo utilizar el evento mover el mouse por encima para mostra informacíon sobre mi**/
document.getElementById('yo').onmouseover = function () {
	document.getElementById('yo').innerHTML = "Soy un joven apasionado por la informática y las matemáticas con muchas ganas de insertarme en el mercado laboral y poner a prueba mis conocimientos. Soy de esas personas que si hay algo que no saben no descansan hasta saberlo."
}
document.getElementById('yo').onmouseout = function () {
	document.getElementById('yo').innerHTML ="Mueve el raton por encima de mí para obtener informacíon adicional"
}
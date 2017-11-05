var button = document.getElementsByTagName("button")[0]; // botón
var textarea = document.getElementsByTagName("textarea")[0]; // formulario

// Evento para que el botón esté desactivado cuando no hay nada escrito
textarea.addEventListener("focus", function(){
	var textarea = document.getElementsByTagName("textarea")[0];
	if (textarea.value.length === 0){
		button.setAttribute("disabled","disabled");
	}
})

var span = document.getElementById("contador"); // Contador

/* Evento para que cuente los carácteres disponibles en el formulario
y  cambie el número del contador en base a ello */
textarea.addEventListener("keyup", function(){
	var textarea = document.getElementsByTagName("textarea")[0];
	var span = document.getElementById("contador");
	var newCounter = textarea.value.length; // Longitud del contenido
	newCounter = 140 - newCounter; // Nuevo contador
	span.textContent = newCounter; // Cambiando el contenido del elemento span
	// Cambiando el color en base a cuántos carácteres disponibles quedan
	if (newCounter < 20){
		span.style.color = "yellow"
	}
	if(newCounter < 10){
		span.style.color = "orange"
	}
		if(newCounter < 0){
		span.style.color = "red";
	}
	if(newCounter > 20){
		span.style.color = "black"
	}
	if(newCounter < 0 || newCounter=== 140){
		button.setAttribute("disabled","disabled");
	}else{
		button.removeAttribute("disabled");
	}
})


/* Evento para agregar un elemento article en section #contenedor-bottom
y que además en él contenga el value del formulario al momento de hacer click
én el botón */
button.addEventListener("click", function(){
	var texto = document.getElementsByTagName("textarea")[0].value;
	if (texto.length > 0){ // Para que no se active el botón hasta escribir algo
		var contenedorBotton = document.getElementById("contenedor-bottom");
		var nuevoElemento = document.createElement("article");
		var nuevoParrafo = document.createElement("p");
		texto = document.createTextNode(texto);
		nuevoParrafo.appendChild(texto);
		nuevoElemento.appendChild(nuevoParrafo);
		contenedorBotton.appendChild(nuevoElemento);
		var time = new Date();
		time = time.getHours() + ":" + time.getMinutes();
		var hora = document.createElement("p");
		var horaContenido = document.createTextNode(time);
		hora.appendChild(horaContenido);
		nuevoElemento.appendChild(hora);
	}
})






/* textarea.addEventListener("keyup",function (){
	var textarea = document.getElementsByTagName("textarea")[0]; // formulario
	
	if (textarea.rows > 10){
		textarea.rows = textarea.rows + 1;
	}
}) */
var button = document.getElementsByTagName("button")[0]; // Botón
var textarea = document.getElementsByTagName("textarea")[0]; // Formulario
var span = document.getElementById("contador"); // Contador

// Evento para que el botón esté desactivado cuando no hay nada escrito
textarea.addEventListener("focus", function(){
	if (textarea.value.length === 0){
		button.setAttribute("disabled","disabled");
	}
})

/* Evento para que cuente los carácteres disponibles en el formulario
y  cambie el número del contador en base a ello */
textarea.addEventListener("keyup", function(){
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
		var contenedorBottom = document.getElementById("contenedor-bottom");
		var nuevoElemento = document.createElement("article");
		var nuevoParrafo = document.createElement("p");
		var firstArticle = contenedorBottom.children[0];
		texto = document.createTextNode(texto);
		nuevoParrafo.appendChild(texto);
		nuevoParrafo.classList.add("parrafo");
		nuevoElemento.appendChild(nuevoParrafo);
		// Para que cada article se posicione por encima del anterior
		contenedorBottom.insertBefore(nuevoElemento, firstArticle);

		// Poniendo nombre y nick antes del estado
		var name = document.createElement("span");
		name.textContent = "Leticia Ferreira"
		name.classList.add("name")
		nuevoElemento.insertBefore(name, nuevoParrafo);

		var nick = document.createElement("span");
		nick.textContent = " @Helvette ";
		nick.classList.add("nick");
		nuevoElemento.insertBefore(nick, nuevoParrafo);

		// Poniendo imagen
		var imagen = document.createElement("img");
		imagen.classList.add("imagen");
		nuevoElemento.insertBefore(imagen, name);
		imagen.setAttribute("src", "assets/images/profile-photo.jpg");

		// Ponieno íconos 
		// corazón
		var heart = document.createElement("i");
		heart.classList.add("fa", "fa-heart", "heart");
		// retweet
		var reTweet = document.createElement("i");
		reTweet.classList.add("fa", "fa-retweet", "fa-retweet");
		// responder
		var message = document.createElement("i");
		message.classList.add("fa", "fa-comment", "comment");
		nuevoElemento.appendChild(heart);
		nuevoElemento.appendChild(reTweet);
		nuevoElemento.appendChild(message);

		// Capturando hora
		var time = new Date();
		var hours = time.getHours();
		var minutes = time.getMinutes();
		// En caso de que la hora o los minutos contengan solo un dígito
		if(hours < 10){
			hours = "0" + hours;
		}
		if(minutes < 10){
			minutes = "0" + minutes;
		}
		time = "Posted on " + hours + ":" + minutes;
		var hora = document.createElement("p");
		var horaContenido = document.createTextNode(time);
		hora.classList.add("hora");
		hora.appendChild(horaContenido);
		nuevoElemento.insertBefore(hora, nuevoParrafo);

		// Limpiar textarea
		textarea.value = "";
		// Regresar textarea a su tamaño original
		textarea.style.height = "100px"
		// Reiniciar botón
		span.textContent = "140"
		// Deshabilitar botón
		button.setAttribute("disabled","disabled");
	}
})

// Función para que el textarea se agrande automáticamente en base a su contenido
textarea.addEventListener("keydown", function(){
  var el = this;
  setTimeout(function(){
    el.style.cssText = 'height:auto; padding:0';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  },0);
})

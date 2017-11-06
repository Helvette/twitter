var button = document.getElementsByTagName("button")[0]; // Botón
var textarea = document.getElementsByTagName("textarea")[0]; // Formulario
var span = document.getElementById("contador"); // Contador

// Evento para que el botón esté desactivado cuando no hay nada escrito
textarea.addEventListener("focus", function(){
	var textarea = document.getElementsByTagName("textarea")[0];
	if (textarea.value.length === 0){
		button.setAttribute("disabled","disabled");
	}
})

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
		var contenedorBottom = document.getElementById("contenedor-bottom");
		var nuevoElemento = document.createElement("article");
		var nuevoParrafo = document.createElement("p");
		var span = document.getElementById("contador"); // Contador
		var firstArticle = contenedorBottom.children[0];
		texto = document.createTextNode(texto);
		nuevoParrafo.appendChild(texto);
		nuevoElemento.appendChild(nuevoParrafo);
		nuevoElemento.classList.add("parrafo");
		// Para que cada article se posicione por encima del anterior
		contenedorBottom.insertBefore(nuevoElemento, firstArticle);

		// Poniendo Nick
		var name = document.createElement("span");
		name.textContent = "Leticia Ferreira"
		name.classList.add("name")
		nuevoElemento.insertBefore(name, nuevoParrafo);

		var nick = document.createElement("span");
		nick.textContent = "@Helvette";
		nuevoElemento.insertBefore(nick, nuevoParrafo);

		// Ponieno íconos 
		var heart = document.createElement("i");
		heart.classList.add("fa", "fa-heart", "heart");
		//creamos icono de basura
		var trash = document.createElement("i");
		trash.classList.add("fa", "fa-trash", "trash");
		nuevoElemento.appendChild(heart);
		nuevoElemento.appendChild(trash);

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
		time = hours + ":" + minutes;
		var hora = document.createElement("p");
		var horaContenido = document.createTextNode(time);
		hora.appendChild(horaContenido);
		nuevoElemento.insertBefore(hora, nuevoParrafo);

		// Limpiar textarea
		document.getElementsByTagName("textarea")[0].value = "";
		// Reiniciar botón
		span.textContent = "140"
		// Deshabilitar botón
		button.setAttribute("disabled","disabled");
	}
})




/* textarea.addEventListener("keyup", function (){
	if (textarea.value.split("\n").length > 3){
		textarea.rows = textarea.rows + 1;
	}else {
		textarea.rows = 3;
	}
})


/* $(document)
    .one('focus.autoExpand', 'textarea.autoExpand', function(){
        var savedValue = this.value;
        this.value = '';
        this.baseScrollHeight = this.scrollHeight;
        this.value = savedValue;
    })
    .on('input.autoExpand', 'textarea.autoExpand', function(){
        var minRows = this.getAttribute('data-min-rows')|0, rows;
        this.rows = minRows;
        rows = Math.ceil((this.scrollHeight - this.baseScrollHeight) / 17);
        this.rows = minRows + rows;
    });

*




/* textarea.addEventListener("keyup",function (){
	var textarea = document.getElementsByTagName("textarea")[0]; // formulario
	
	if (textarea.rows > 10){
		textarea.rows = textarea.rows + 1;
	}
}) */
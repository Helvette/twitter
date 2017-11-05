var texto = document.getElementsByTagName("textarea")[0].value;

var button = document.getElementsByTagName("button")[0];

button.addEventListener("click", function(){
	var texto = document.getElementsByTagName("textarea")[0].value;
	//alert(texto);
	var contenedorBotton = document.getElementById("contenedor-bottom");
	var nuevoElemento = document.createElement("article");
	texto = document.createTextNode(texto);
	nuevoElemento.appendChild(texto);
	contenedorBotton.appendChild(nuevoElemento);
})
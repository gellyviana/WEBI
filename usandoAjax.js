function retornaNome(){
	var httpRequest;
	if(window.XMLHttpRequest){
		httpRequest = new XMLHttpRequest();
	}else if (window.ActiveXObject) {
		httpRequest = new ActiveXObject("Microsoft.XMLHTTp");
	}
	httpRequest.onreadystatechange = function(){
		if(httpRequest.readySatate == 4 && httpRequest.status == 200){
			document.getElementById("resultado").innerHTML = httpRequest.responseText;
		}else{

		}
	};
	httpRequest.open('POST', "localhost:8080/usandoAjax.php", true);
	httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlenconded');
	var params;
	params = "nome="+encondeURIComponent(document.forms.meuform.campoNome.value);
	httpRequest.send(params);
};
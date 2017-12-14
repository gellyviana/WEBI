var vetorImg = ['img/img1.jpg', 'img/img2.jpg', 'img/img3.jpg', 'img/img4.png', 'img/img5.jpg', 'img/img6.jpg', 'img/img7.jpg', 'img/img8.jpg', 'img/img9.jpg', 'img/img10.jpg', 'img/img11.png', 'img/img12.jpg'];
var listaCarrinhos = [];
var listaCompras = [];
var valorTotal = 0;


function Produto(nome, codigo, preco, peso, descricao, foto){
	this.nome = nome;
	this.codigo = codigo;
	this.preco = preco;
	this.peso = peso;
	this.descricao = descricao;
	this.foto = foto;
	this.quantidade = 0;
}

p1 = new Produto("Nome: Bata Feminina de Microfibra", "Código: 001", "100,00", "Peso: 0,450 kg", "Descrição: Bata Feminina de Microfibra, 100% Poliéster", "img/img1.jpg");
p2 = new Produto("Nome: Conjunto para Centro Cirúrgico", "Código: 002", "150,00", "Peso: 1,000 kg", "Descrição: Conjunto de Cagabardine, 100% algodão", "img/img2.jpg");
p3 = new Produto("Nome: Bata Masculina de Microfibra", "Código: 003", "110,00", "Peso: 0,500 kg", "Descrição: Bata Masculina de Microfibra, 100% Poliéster", "img/img3.jpg");
p4 = new Produto("Nome: Conjunto para Enfermagem", "Código: 004", "50,00", "Peso: 0,300 kg", "Descrição: Conjunto de Cagabardine, 100% algodão", "img/img4.png");
p5 = new Produto("Nome: Conjunto para Enfermagem", "Código: 005", "50,00", "Peso: 0,350 kg", "Descrição: Conjunto de Cagabardine, 100% algodão", "img/img5.jpg");
p6 = new Produto("Nome: Bata Masculina de Gabardine", "Código: 006", "200,00", "Peso: 1,000 kg", "Descrição: Bata Masculina de Cagabardine, 100% algodão", "img/img6.jpg");
p7 = new Produto("Nome: Pijama feminino", "Código: 007", "110,00", "Peso: 0,600 kg", "Descrição: Pijama Feminino, 100% algodão", "img/img7.jpg");
p8 = new Produto("Nome: Pijama Masculino", "Código: 008", "110,00", "Peso: 1,000 kg", "Descrição: Pijama Masculino, 100% algodão", "img/img8.jpg");
p9 = new Produto("Nome: Pijama feminino", "Código: 009", "110,00", "Peso: 0,600 kg", "Descrição: Pijama Feminino, 100% algodão", "img/img9.jpg");
p10 = new Produto("Nome: Pijama Masculino para Centro Cirúrgico", "Código: 010", "120,00", "Peso: 0,500 kg", "Descrição: Pijama Masculino, 100% algodão", "img/img10.jpg");
p11 = new Produto("Nome: Conjunto Feminino para Enfermagem", "Código: 011", "160,00", "Peso: 0,900 kg", "Descrição: Conjunto de Cagabardine, 100% algodão", "img/img11.png");
p12 = new Produto("Nome: Conjunto Masculino para Enfermagem", "Código: 012", "160,00", "Peso: 0,900 kg", "Descrição: Conjunto de Cagabardine, 100% algodão", "img/img12.jpg");

var vetorProdutos = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12];

function onloadLoja(){

	var x = document.createElement("INPUT");
    
    var divNova1 = document.createElement("div");
	var divNova2 = document.createElement("div");
	var divNova3 = document.createElement("div");
	var divNova4 = document.createElement("div");

	divNova1.className = "col-md-2";
	divNova2.className = "col-md-4";
	divNova3.className = "col-md-4";
	divNova4.className = "col-md-2";
	
	var filho = document.getElementById('conteudo');

	var img;
	var nomeProduto;
	var codigoProduto;
	var precoProduto;
	var pesoProduto;
	var descricaoProduto;
	var quantidade;

	var paragrafo1;
	var paragrafo2;
	var paragrafo3;
	var paragrafo4;
	var paragrafo5;

	var btnComprar;
	var btnCancelar;

	for (var i = 0; i < (vetorProdutos.length)/2; i++) {

		img = document.createElement("IMG");
		img.setAttribute("src", vetorProdutos[i].foto);
		img.setAttribute("width", "250");
		img.setAttribute("height", "300");

		x.setAttribute("type", "number");
    	x.setAttribute("value", "0");

		paragrafo1 = document.createElement("p");
		paragrafo2 = document.createElement("p");
		paragrafo3 = document.createElement("p");
		paragrafo4 = document.createElement("p");
		paragrafo5 = document.createElement("p");

		paragrafo1.id = "p1";
		paragrafo2.id = "p2";
		paragrafo3.id = "p3";
		paragrafo4.id = "p4";
		paragrafo5.id = "p5";

		btnComprar = document.createElement("INPUT");
		btnCancelar = document.createElement("INPUT");

		btnComprar.className = "btn btn-success";
		btnComprar.value = "Adicionar ao Carrinho";
		btnComprar.type = "button";
		btnComprar.id = i ;
		btnComprar.setAttribute(onclick, "mostraForm()");
		btnCancelar.className = "btn btn-danger";
		btnCancelar.value = "Cancelar";
		btnCancelar.type = "button";

		nomeProduto = vetorProdutos[i].nome;
		codigoProduto = vetorProdutos[i].codigo;
		precoProduto = vetorProdutos[i].preco;
		pesoProduto = vetorProdutos[i].peso;
		descricaoProduto = vetorProdutos[i].descricao;
		quantidade = "Qtd: ";

		paragrafo1.innerHTML = nomeProduto;
		paragrafo2.innerHTML = codigoProduto;
		paragrafo3.innerHTML = pesoProduto;
		paragrafo4.innerHTML = descricaoProduto;
		paragrafo5.innerHTML = quantidade;

		paragrafo5.appendChild(x);

		divNova2.appendChild(img);
		divNova2.appendChild(paragrafo1);
		divNova2.appendChild(paragrafo2);
		divNova2.appendChild(paragrafo3);
		divNova2.appendChild(paragrafo4);
		divNova2.appendChild(paragrafo5);
		divNova2.appendChild(btnComprar);
		divNova2.appendChild(btnCancelar);
		
	}

	for (var i = 6; i < vetorProdutos.length; i++) {

		img = document.createElement("IMG");
		img.setAttribute("src", vetorProdutos[i].foto);
		img.setAttribute("width", "250");
		img.setAttribute("height", "300");

		x.setAttribute("type", "number");
    	x.setAttribute("value", "0");

		paragrafo1 = document.createElement("p");
		paragrafo2 = document.createElement("p");
		paragrafo3 = document.createElement("p");
		paragrafo4 = document.createElement("p");
		paragrafo5 = document.createElement("p");

		paragrafo1.id = "p1";
		paragrafo2.id = "p2";
		paragrafo3.id = "p3";
		paragrafo4.id = "p4";
		paragrafo5.id = "p5";

		nomeProduto = vetorProdutos[i].nome;
		codigoProduto = vetorProdutos[i].codigo;
		precoProduto = vetorProdutos[i].preco;
		pesoProduto = vetorProdutos[i].peso;
		descricaoProduto = vetorProdutos[i].descricao;
		quantidade = "Qtd: ";

		paragrafo1.innerHTML = nomeProduto;
		paragrafo2.innerHTML = codigoProduto;
		paragrafo3.innerHTML = pesoProduto;
		paragrafo4.innerHTML = descricaoProduto;
		paragrafo5.innerHTML = quantidade;

		btnComprar = document.createElement("INPUT");
		btnCancelar = document.createElement("INPUT");

		btnComprar.className = "btn btn-success";
		btnComprar.value = "Adicionar ao Carrinho";
		btnComprar.type = "button";
		btnComprar.id = i ;
		btnComprar.onclick = "mostraForm()";
		btnCancelar.className = "btn btn-danger";
		btnCancelar.value = "Cancelar";
		btnCancelar.type = "button";

		paragrafo5.appendChild(x);

		divNova3.appendChild(img);
		divNova3.appendChild(paragrafo1);
		divNova3.appendChild(paragrafo2);
		divNova3.appendChild(paragrafo3);
		divNova3.appendChild(paragrafo4);
		divNova3.appendChild(paragrafo5);
		divNova3.appendChild(btnComprar);
		divNova3.appendChild(btnCancelar);
		
	}
	
	document.getElementById('conteudo').appendChild(divNova1);
	document.getElementById('conteudo').appendChild(divNova2);
	document.getElementById('conteudo').appendChild(divNova3);
	document.getElementById('conteudo').appendChild(divNova4);
	
}

function Usuario(nome){
	this.nome = nome;
}

function Carrinho(dono, produto){

	this.dono = dono;
	var i = 0;
	
	if (listaCompras.length == 0) {
		listaCompras[0] = produto;
	}else{
		while(listaCompras[i] != null){
			i++;
		}
		listaCompras[i] = produto;
	}

	function atualizaCarrinho(produto){

		var length = listaCompras.length;
		listaCompras[length + 1] = produto;

	}
}

function adicionaNoCarrinho(dono, produto, quantidade){

	var i = 0;
	var length;

	if(quantidade <= 0){
		document.getElementById('form').innerHTML = "Quantidade inválida";
	}else{
		produto.quantidade = quantidade;
	}

	var carrinho = new Carrinho(dono, produto);

	if (listaCarrinhos.length == 0) {
		listaCarrinhos[0] = carrinho;
	}else{
		while(listaCarrinhos[i].dono != dono){
			if (listaCarrinhos[i].dono == dono) {
				carrinho.atualizaCarrinho(produto);
			}
			i++;
		}
		length = listaCarrinhos.length;
		listaCarrinhos[length + 1] = carrinho;
	}
}

function removerDoCarrinho(dono, produto){

	for (var i = 0; i < listaCarrinhos.length; i++) {
		if (listaCarrinhos[i].dono == dono) {
			for (var i = 0; i < listaCompras.length; i++) {
				if (listaCompras[i] == produto) {
					listaCompras[i] = "";
				}
			}
		}
	}
}

$('#chamaForm').on('click', mostraForm);

function mostraForm(){
	

}

function calculaValorTotal(dono){
	for (var i = 0; i < listaCarrinhos.length; i++) {
		if (listaCarrinhos[i].dono == dono) {
			valorTotal += calculaValorItem(listaCompras,i);
		}
	}
	document.getElementById("daTabela").innerHTML = valorTotal;
}

function calculaValorItem(lista, indice){

	var testeQtde;
	var testeValor;
	var testePeso;

	testeQtde = lista[indice].quantidade;
	testePeso = parseFloat(lista[indice].peso);
	testeValor = testePeso * testeQtde * 12.50;

	document.getElementById("daTabela").innerHTML = lista[indice].nome +":"+ testeValor;

}
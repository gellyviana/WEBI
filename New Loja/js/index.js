var vetorImg = ['img/img1.jpg', 'img/img2.jpg', 'img/img3.jpg', 'img/img4.png', 'img/img5.jpg', 'img/img6.jpg', 'img/img7.jpg', 'img/img8.jpg', 'img/img9.jpg', 'img/img10.jpg', 'img/img11.png', 'img/img12.jpg'];
var listaCarrinhos = [];
var listaUsuariosCadastrados = [];
var valorTotal = 0;
var carrinhoAtual=null;

function Produto(nome, codigo, preco, peso, descricao, foto){
	this.nome = nome;
	this.codigo = codigo;
	this.preco = preco;
	this.peso = peso;
	this.descricao = descricao;
	this.foto = foto;
}

function ProdutoNoCarrinho(produto, quantidade){
	this.produto = produto;
	this.quantidade = quantidade;
}

p1 = new Produto("Bata Feminina de Microfibra", 	"Código: 001", "100.00", "0.450", "Descrição: Bata Feminina de Microfibra, 100% Poliéster", "img/img1.jpg");
p2 = new Produto("Conjunto para Centro Cirúrgico", 	"Código: 002", "150.00", "1,000", "Descrição: Conjunto de Cagabardine, 100% algodão", "img/img2.jpg");
p3 = new Produto("Bata Masculina de Microfibra", 	"Código: 003", "110.00", "0.500", "Descrição: Bata Masculina de Microfibra, 100% Poliéster", "img/img3.jpg");
p4 = new Produto("Conjunto para Enfermagem", 		"Código: 004", "50.00", "0.300", "Descrição: Conjunto de Cagabardine, 100% algodão", "img/img4.png");
p5 = new Produto("Conjunto para Enfermagem", 		"Código: 005", "50.00", "0.350", "Descrição: Conjunto de Cagabardine, 100% algodão", "img/img5.jpg");
p6 = new Produto("Bata Masculina de Gabardine", 	"Código: 006", "200.00", "1,000", "Descrição: Bata Masculina de Cagabardine, 100% algodão", "img/img6.jpg");
p7 = new Produto("Pijama feminino", 				"Código: 007", 	"110.00", "0.600", "Descrição: Pijama Feminino, 100% algodão", "img/img7.jpg");
p8 = new Produto("Pijama Masculino", 				"Código: 008", "110.00", "1,000", "Descrição: Pijama Masculino, 100% algodão", "img/img8.jpg");
p9 = new Produto("Pijama feminino", 				"Código: 009", 	"110.00", "0.600", "Descrição: Pijama Feminino, 100% algodão", "img/img9.jpg");
p10 = new Produto("Pijama Masculino para Centro Cirúrgico", "Código: 010", "120.00", "0.500", "Descrição: Pijama Masculino, 100% algodão", "img/img10.jpg");
p11 = new Produto("Conjunto Feminino para Enfermagem", 		"Código: 011", "160.00", "0.900", "Descrição: Conjunto de Cagabardine, 100% algodão", "img/img11.png");
p12 = new Produto("Conjunto Masculino para Enfermagem", 	"Código: 012", "160.00", "0.900", "Descrição: Conjunto de Cagabardine, 100% algodão", "img/img12.jpg");

var vetorProdutos = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12];

function onloadLoja(){

	
    
    var divNova1 = document.createElement("div");
	var divNova2 = document.createElement("div");
	var divNova3 = document.createElement("div");
	var divNova4 = document.createElement("div");

	divNova1.className = "col-md-2";
	divNova2.className = "col-md-4";
	divNova3.className = "col-md-4";
	divNova4.className = "col-md-2";

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
	var x;

	for (var i = 0; i < (vetorProdutos.length)/2; i++) {

		img = document.createElement("IMG");
		img.setAttribute("src", vetorProdutos[i].foto);
		img.setAttribute("width", "250");
		img.setAttribute("height", "300");

		x = document.createElement("INPUT");
		x.setAttribute("type", "number");
    	x.setAttribute("value", "0");
    	x.id="input"+i;

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

		btnComprar.className = "btn btn-success";
		btnComprar.value = "Adicionar ao Carrinho";
		btnComprar.type = "button";
		btnComprar.id = i ;
		
		btnComprar.addEventListener('click',function() {
	    	mostraForm(this.id);
		});

		nomeProduto = vetorProdutos[i].nome;
		codigoProduto = vetorProdutos[i].codigo;
		precoProduto = vetorProdutos[i].preco;
		pesoProduto = "Peso: "+vetorProdutos[i].peso+" kg";
		descricaoProduto = vetorProdutos[i].descricao;
		quantidade = "Qtd: ";

		paragrafo1.innerHTML = nomeProduto;
		paragrafo2.innerHTML = codigoProduto;
		paragrafo3.innerHTML = pesoProduto;
		paragrafo4.innerHTML = descricaoProduto;
		paragrafo5.innerHTML = quantidade;

		divNova2.appendChild(img);
		divNova2.appendChild(paragrafo1);
		divNova2.appendChild(paragrafo2);
		divNova2.appendChild(paragrafo3);
		divNova2.appendChild(paragrafo4);
		divNova2.appendChild(paragrafo5);
		divNova2.appendChild(x);
		divNova2.appendChild(btnComprar);
		
	}

	for (var i = 6; i < vetorProdutos.length; i++) {

		img = document.createElement("IMG");
		img.setAttribute("src", vetorProdutos[i].foto);
		img.setAttribute("width", "250");
		img.setAttribute("height", "300");

		x = document.createElement("INPUT");
		x.setAttribute("type", "number");
    	x.setAttribute("value", "0");
    	x.id="input"+i;

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
		pesoProduto = "Peso: "+ vetorProdutos[i].peso + " kg";
		descricaoProduto = vetorProdutos[i].descricao;
		quantidade = "Qtd: ";

		paragrafo1.innerHTML = nomeProduto;
		paragrafo2.innerHTML = codigoProduto;
		paragrafo3.innerHTML = pesoProduto;
		paragrafo4.innerHTML = descricaoProduto;
		paragrafo5.innerHTML = quantidade;

		btnComprar = document.createElement("INPUT");
	
		btnComprar.className = "btn btn-success";
		btnComprar.value = "Adicionar ao Carrinho";
		btnComprar.type = "button";
		btnComprar.id = i ;
		btnComprar.addEventListener('click',function() {
	    	mostraForm(this.id);
		});

		divNova3.appendChild(img);
		divNova3.appendChild(paragrafo1);
		divNova3.appendChild(paragrafo2);
		divNova3.appendChild(paragrafo3);
		divNova3.appendChild(paragrafo4);
		divNova3.appendChild(paragrafo5);
		divNova3.appendChild(x);
		divNova3.appendChild(btnComprar);
	}
	
	document.getElementById('conteudo').appendChild(divNova1);
	document.getElementById('conteudo').appendChild(divNova2);
	document.getElementById('conteudo').appendChild(divNova3);
	document.getElementById('conteudo').appendChild(divNova4);
	
}

function Carrinho(dono,listaCompras){
	this.dono = dono;
	this.listaCompras =[];
}

function adicionaProduto(carrinho,produto,quantidade){
	for (var i = 0; i < carrinho.listaCompras.length; i++) {
		if(carrinho.listaCompras[i].produto==produto){
			carrinho.listaCompras[i].quantidade += quantidade;
			return;
		}
	}
	carrinho.listaCompras[carrinho.listaCompras.length] = new ProdutoNoCarrinho(produto,quantidade);	
	
}

function removeProduto(carrinho,produto,quantidade){
	var p = carrinho.listaCompras.indexOf(produto);
	if(p != -1){
		if(carrinho.listaCompras[p].quantidade <= quantidade){
			listaCompras.splice(p, 1);
		}else{
			carrinho.listaCompras[p].quantidade -= quantidade;	
		}
	}
}

function atualizaHtmlCarrinho(){
	var conteudo=document.getElementById("conteudoCarrinho");
	var nomeUser = document.getElementById("nomeUser");
	nomeUser.innerHTML = carrinhoAtual.dono;

	while (conteudo.firstChild) {
    	conteudo.removeChild(conteudo.firstChild);
	}
	
	var total=0;
	var linha;
	var coluna;
	if(carrinhoAtual != null){
		for (var i = 0; i < carrinhoAtual.listaCompras.length; i++) {
			linha = document.createElement("tr");
			conteudo.appendChild(linha);

			coluna = document.createElement("td");
			coluna.innerHTML = carrinhoAtual.listaCompras[i].produto.nome;
			linha.appendChild(coluna);
			
			coluna = document.createElement("td");
			coluna.innerHTML = carrinhoAtual.listaCompras[i].quantidade;
			linha.appendChild(coluna);

			coluna = document.createElement("td");
			coluna.innerHTML = carrinhoAtual.listaCompras[i].produto.preco;
			linha.appendChild(coluna);

			coluna = document.createElement("td");
			coluna.innerHTML = parseFloat(carrinhoAtual.listaCompras[i].produto.peso)
									*parseFloat(carrinhoAtual.listaCompras[i].quantidade);
			linha.appendChild(coluna);

			coluna = document.createElement("td");
			total+=parseFloat(carrinhoAtual.listaCompras[i].produto.preco)
									*parseFloat(carrinhoAtual.listaCompras[i].quantidade);
			coluna.innerHTML = parseFloat(carrinhoAtual.listaCompras[i].produto.preco)
									*parseFloat(carrinhoAtual.listaCompras[i].quantidade);;
			linha.appendChild(coluna);		
		}
	}
	linha = document.createElement("tr");
	conteudo.appendChild(linha);

	var bold = document.createElement("b");
	bold.innerHTML= "Total da compra"
	coluna = document.createElement("td");
	coluna.appendChild(bold);
	coluna.setAttribute("colspan","4");
	linha.appendChild(coluna);

	coluna = document.createElement("td");
	coluna.innerHTML = total;
	linha.appendChild(coluna);

}

function login(){
	var donoInput = document.getElementById("inputUser");
	var dono = donoInput.value;
	carrinhoAtual=null;
	for (var i = 0; i < listaCarrinhos.length; i++) {
		if(listaCarrinhos[i].dono == dono){
			carrinhoAtual = listaCarrinhos[i];
		}
	}
	if(carrinhoAtual==null){
		carrinhoAtual = new Carrinho(dono);
		listaCarrinhos[listaCarrinhos.length] = carrinhoAtual;
	}
	var menu = document.getElementById("botao");
	menu.href = "#";
	menu.innerHTML="Sair";
	menu.setAttribute("onclick","logout()");
	$('.nav-tabs a[href="#loja"]').tab('show');
}

function logout(){
	carrinhoAtual = null;
	var menu = document.getElementById("botao");
	menu.href ="#form";
	menu.innerHTML ="Cadastro/Login";
	menu.setAttribute("onclick",null);
}

function mostraForm(idBotao){
	if(carrinhoAtual == null){
		$('.nav-tabs a[href="#form"]').tab('show');
	}else{
		var input = document.getElementById("input"+idBotao);
		var qtdInput = input.value;
		if(qtdInput <= 0){
			alert("Quantidade Incorreta");
		}else{
			adicionaProduto(carrinhoAtual,vetorProdutos[idBotao], qtdInput);
			alert(qtdInput +" do produto "+vetorProdutos[idBotao].nome + "foi adicionado com sucesso!");
		}
	}
}
function mostraLoja(){
	$('.nav-tabs a[href="#loja"]').tab('show');
}
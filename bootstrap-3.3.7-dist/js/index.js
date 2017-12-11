var listaCarrinhos = [];
var listaClientes = [];
var listaProdutos = [];
var listaCompras = [];
function Produto( codigo, foto, nome, descricao, preco, peso){

	this.codigo = codigo;
	this.foto = foto;
	this.nome = nome;
	this.descricao = descricao;
	this.preco = preco;
	this.peso = peso;
}

function criaProduto(){
	var p1 = new Produto(001, "bata.jpg", "Bata Feminina", "Produto produzido no Brasil, de micrifibra, 100% Poliéster.", 100.00, 0.420);
	for (var i = 0; i < 12; i++) {
		listaProdutos[i] = p1;
	}
}

function Comprador(nome, endereco, cpf){
	this.nome = nome;
	this.endereco = endereco;
	this.cpf = cpf;
}

function criaLoja(){

	var num = 0;

	while(num < listaProdutos.length){
		var div = document.createElement('div');
		div.className = "col-md-4";
		var conteudo = document.createElement(listaProdutos[num]);
		conteudo.id = num;
		div.appendChild(conteudo);
		document.body.appendChild(div);
		num++;
	}
	
}

function Carrinho(idComprador){

	var nomeComprador;
	var produto;

	function encherCarrinho(idComprador, nomeComprador){
		for (var i = 0; i < listaCarrinhos.length; i++) {
			if (listaCarrinhos[i].cpf == idComprador) {
				compras[i] = produto;
			}else{
				//é criado uma nova lista de compras 
			}
		}
	}
	function esvaziarCarrinho(){

	}
}

function comprar(){
	var nome = document.getElementById('exempleName').value;
	var cpf = document.getElementById('exempleCpf').value;
	var endereco = document.getElementById('exempleEndereco').value;
	var i = 0;
	if (listaClientes == null) {
		var cliente = new Comprador(nome, cpf, endereco);
		var carrinhoCliente = new Carrinho(cpf);
		listaClientes[0] = c;
	}else{
		while (i < listaClientes.length) {
			if (listaClientes[i].cpf != cpf) {
				i++;
			}
		}
		var cliente = new Comprador(nome, cpf, endereco);
		var carrinhoCliente = new Carrinho(cpf);
		listaClientes[i] = cliente;
		listaCarrinhos[i] = carrinhoCliente;
	}
	document.getElementById('idUser').innerHTML = nome;
	document.getElementById('idCarrinho').innerHTML = 1;
}

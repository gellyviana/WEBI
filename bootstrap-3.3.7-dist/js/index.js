var listaCarrinhos = [];
var listaClientes = [];
var listaProdutos = [];
var listaCompras = [];
var cliente;
var nome;
var cpf;
var endereco;
var produto;
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


function Carrinho(cliente, listaCompras){

	this.cliente = cliente; 
	this.listaClientes = listaClientes;
	
	function encherCarrinho(){
		if(listaCompras == null){
			listaCompras[0] = produto;
		}else{
			  while(listaCompras[i] != null){
			  		i++;
			  }
			  listaCompras[i] = produto;
		}
	}
	function esvaziarCarrinho(){
		while(listaCompras[i] != null){
			listaCompras[i] = null;
			i++;
		}
	}
}

function cadastrarCliente(){

	nome = document.getElementById('exempleName').value;
	cpf = document.getElementById('exempleCpf').value;
	endereco = document.getElementById('exempleEndereco').value;
	produto = document.getElementById('bata').value;

	cliente = new Comprador(nome, cpf, endereco);

	document.getElementById('idUser').innerHTML = nome;
	document.getElementById('idCarrinho').innerHTML = 1;
	$('#myModal').modal('hide');
}

function comprar(){

	var i = 0;

	if (listaClientes == null) { //Quando é o primeiro cliente comprador.
		var carrnhoCliente = new Carrinho(cliente,listaClientes);
		listaClientes[0] = cliente;
	}else if(listaClientes != null){ //Quando não tem cadastro
		while (i < listaClientes.length) {
			if (listaClientes[i].cpf != cpf) {
				i++;
			}
		}
		var carrnhoCliente = new Carrinho(cliente,listaClientes);
		listaClientes[i] = cliente;
	}else{ //Quando possui cadastro na loja
		while (i < listaClientes.length) { 
			if (listaClientes[i].cpf != cpf) {
				i++;
			}
			document.getElementById('modalFooter').innerHTML = "Usuário já cadastrado!";
		}
	}
}


/**$(function() {
  $.fn.MessageBox('#openModal').click(function() {
     $('#logModal').modal('show');
  });
});**/
var listaCarrinhos = [];
var listaClientes = [];
var listaProdutos = [];
var listaCompras = [];
var cliente;
var nome;
var cpf;
var endereco;
var produto;
//Objeto Produto
function Produto( codigo, foto, nome, descricao, preco, peso){

	this.codigo = codigo;
	this.foto = foto;
	this.nome = nome;
	this.descricao = descricao;
	this.preco = preco;
	this.peso = peso;
}
//Função Cria Produto
function criaProduto(){
	var p1 = new Produto(001, "bata.jpg", "Bata Feminina", "Produto produzido no Brasil, de micrifibra, 100% Poliéster.", 100.00, 0.420);
	for (var i = 0; i < 12; i++) {
		listaProdutos[i] = p1;
	}
}
//Objeto Usuario
function Comprador(nome, endereco, cpf){
	this.nome = nome;
	this.endereco = endereco;
	this.cpf = cpf;
}
//Objeto Carrinho
function Carrinho(cliente, listaCompras){

	this.cliente = cliente; 
	this.listaClientes = listaClientes;
	this.valor = 0;
}
//Encher Carrinho
function encherCarrinho(carrinho){

	var i = 0;
	criaProduto();
	if(listaCompras == null){
		listaCompras[0] = listaProdutos[0];
		carrinho.valor += listaProdutos[0].preco;
	}else{
		  while(listaCompras[i] != null){
		  		i++;
		  }
		  listaCompras[i] = listaProdutos[0];
		  carrinho.valor += listaProdutos[0].preco;
	}
}
//Esvaziar Carrinho
function esvaziarCarrinho(carrinho){

	var i = 0;

	while(listaCompras[i] != null){
		listaCompras[i] = null;
		i++;
	}
}
//Cadastrar Cliente
function cadastrarCliente(){

	nome = document.getElementById('exempleName').value;
	cpf = document.getElementById('exempleCpf').value;
	endereco = document.getElementById('exempleEndereco').value;
	produto = document.getElementById('bata').value;

	cliente = new Comprador(nome, cpf, endereco);

	document.getElementById('idUser').innerHTML = nome;
	//document.getElementById('idCarrinho').innerHTML = 1;
	$('#myModal').modal('hide');
}
//Função Comprar
function comprar(){

	var i = 0;

	if (listaClientes.length == 0) { //Quando é o primeiro cliente comprador.
		var carrinhoCliente = new Carrinho(cliente,listaClientes);
		encherCarrinho(carrinhoCliente);
		listaClientes[0] = cliente;
	}else if(listaClientes.length != 0){ //Quando não tem cadastro
		while (i < listaClientes.length) {
			if (listaClientes[i].cpf != cpf) {
				i++;
			}
		}
		var carrinhoCliente = new Carrinho(cliente,listaClientes);
		encherCarrinho(carrinhoCliente);
		listaClientes[i] = cliente;
	}
}
//Retorna o valor total
function valorTotal(){
	
	var produto = document.getElementsByTagName('bata').value;
	var valor = document.getElementById('p4').value;

	document.getElementById('valorTotal').innerHTML = valor;
	document.getElementById('produto').innerHTML = produto;
}

/**$(function() {
  $.fn.MessageBox('#openModal').click(function() {
     $('#logModal').modal('show');
  });
});**/
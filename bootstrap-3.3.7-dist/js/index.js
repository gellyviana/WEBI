var listaCompradores[];
function Produto( codigo, foto, nome, descricao, preco, peso){

	this.codigo = codigo;
	this.foto = foto;
	this.nome = nome;
	this.descricao = descricao;
	this.preco = preco;
	this.peso = peso;
}

function comprador(nome, endereco, cpf){
	this.nome = nome;
	this.endereco = endereco;
	this.cpf = cpf;
}

function Carrinho(idComprador, nomeComprador, compras[], produto){

	function encherCarrinho(idComprador, nomeComprador){
		for (var i = 0; i < listaCompradores.length; i++) {
			if (listaCompradores[i].cpf == idComprador) {
				compras[i] = produto;
			}else{
				//é criado uma nova lista de compras 
			}
		}
	}
	function esvaziarCarrinho(){

	}
}

function 
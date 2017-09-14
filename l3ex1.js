function Pessoa(primeiroNome, ultimoNome, nascimento, altura, peso, sexo){
	this.primeiroNome = primeiroNome;
	this.ultimoNome = ultimoNome;
	this.nascimento = nascimento;
	this.altura = altura;
	this.peso = peso;
	this.sexo = sexo;

	function nomeCompleto(){
		return this.primeiroNome + this.ultimoNome;
	}
	function idadeAtual(){
		var data = this.nascimento.split("/");
		var idade = 2017 - parseInt(data[2]);
		return "Sua idade: " + this.idade;
	}
	function dataNascimento(){
		return "Sua data de nascimento: " + this.nascimento;
	}
	function diaNascimento(){
		var data = this.nascimento.split("/");
		return "Seu dia de nascimento: " + this.data[0];
	}
	function mesNascimento(){
		var data =  this.nascimento.split("/");
		return "Seu mês de nascimento: " + this.data[1];
	}
	function anoNascimento(){
		var data =  this.nascimento.split("/");
		return "Seu ano de nascimento: " + this.data[2];
	}
	function imc(){
		return this.peso/math(this.altura,2);
	}
}

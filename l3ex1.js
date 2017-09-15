class Pessoa{


	constructor(primeiroNome, ultimoNome, nascimento, altura, peso, sexo){
		this.primeiroNome = primeiroNome;
		this.ultimoNome = ultimoNome;
		this.nascimento = nascimento;
		this.altura = altura;
		this.peso = peso;
		this.sexo = sexo;
	}
	 nomeCompleto(){
		return this.primeiroNome +" "+ this.ultimoNome;
	}
     idadeAtual(){
		var data = this.nascimento.split("/");
		var idade = 2017 - parseInt(data[2]);
		return "Sua idade: " + idade;
	}
	 dataNascimento(){
		return "Sua data de nascimento: " + this.nascimento;
	}
	 diaNascimento(){
		var data = this.nascimento.split("/");
		return "Seu dia de nascimento: " + data[0];
	}
	 mesNascimento(){
		var data =  this.nascimento.split("/");
		return "Seu mês de nascimento: " + data[1];
	}
	 anoNascimento(){
		var data =  this.nascimento.split("/");
		return "Seu ano de nascimento: " + data[2];
	}
	 imc(){
		return this.peso/Math.pow(parseFloat(this.altura),2);
	}
}

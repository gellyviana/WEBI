function displayUser(){
	var operador1 = window.prompt("Digite o primeiro valor");
	var op = window.prompt("Digite a operação");
	var operador2 = window.prompt("Digite o segundo valor");
	var valor1 = parseInt(operador1);
	var valor2 = parseInt(operador2);

	document.getElementById("resultado").addEventListener("click", displayUser);
		if(op == "+"){
		document.getElementById("resultado").innerHTML = valor1 + valor2;
	}else if(op == "-"){
		document.getElementById("resultado").innerHTML = valor1 - valor2;
	}else if(op == "*"){
		document.getElementById("resultado").innerHTML = valor1 * valor2;
	}else{
		if(valor2 > 0){
			document.getElementById("resultado").innerHTML = valor1 / valor2;
		}else{
			document.writeln("Digite um valor para o divisor maior que zero.");
		}
	}
}

function somaNumeros(){
	var operador1 = window.prompt("Digite o primeiro valor");
	var operador2 = window.prompt("Digite o segundo valor");
	var valor1 = parseInt(operador1);
	var valor2 = parseInt(operador2);
	if(valor1!= null && valor2 != null){
		document.getElementById("resultado").addEventListener("click", somaNumeros);
		document.getElementById("resultado").innerHTML ="Resultado: " + valor1 + valor2;
	}else{
		window.alert("Valores incorretos");
	}
}

function converteMetros(){
	var metro = window.prompt("Digite o valor em metros.");
	if (metro == null) {
		window.alert("Valor inválido");
	}else{
		document.getElementById("resultado").addEventListener("click", converteMetros);
		document.getElementById("resultado").innerHTML = metro * 1000 + " milímetros";
	}
}

function converteTempo(){
	var dias = window.prompt("Digite o quantidade de dias");
	var horas = window.prompt("Digite o quantidade de horas");
	var minutos = window.prompt("Digite o quantidade de minutos");
	var resultado = (dias*24)*3600 + horas*3600 + minutos*60;

	if (resultado < 0) {
		window.alert("Foi digitado algum valor menor do que zero");
	}else{
		document.getElementById("resultado").addEventListener("click", converteTempo);
		document.getElementById("resultado").innerHTML = resultado + " segundos" ;
	}
}

function aumentoSalarial(){
	var salario = window.prompt("Digite seu salario");
	var aumentoPercentual = window.prompt("Digite a porcentagem de aumento");
	var resultado = salario*aumentoPercentual/100;
	var salarioComAumento = parseInt(salario )+ resultado;

	if (salario == null || aumentoPercentual == null) {
		window.alert("Valores incorretos");
	}else{
		document.getElementById("resultado").addEventListener("click", aumentoSalarial);
		document.getElementById("resultado").innerHTML = "Novo salario " + salarioComAumento + " reais, um aumento de " + resultado + " reais a mais.";
	}
}

function desconto(){
	var valorProduto = window.prompt("Digite o valor do produto");
	var valorDesconto = window.prompt("Porcentagem de desconto");
	var resultado = valorProduto*valorDesconto/100;
	var valorDescontado = parseInt(valorProduto) - resultado;

	if (valorProduto == null || valorDesconto == null) {
		window.alert("Valores incorretos");
	}else{
		document.getElementById("resultado").addEventListener("click", desconto);
		document.getElementById("resultado").innerHTML = "Novo valor " + valorDescontado + " reais, com desconto de " + resultado + " reais a menos.";
	}
}

function maiorOuMenor(){
	var number1 = parseInt(window.prompt("Digite o primeiro valor"));
	var number2 = parseInt(window.prompt("Digite o segundo valor"));
	if (number1 > number2) {
		document.getElementById("resultado").addEventListener("click", maiorOuMenor);
		document.getElementById("resultado").innerHTML = "O " + number1 + " é maior do que " + number2;
	}else if(number2 > number1){
		document.getElementById("resultado").addEventListener("click", maiorOuMenor);
		document.getElementById("resultado").innerHTML = "O " + number2 + " é maior do que " + number1;
	}else{
		document.getElementById("resultado").addEventListener("click", maiorOuMenor);
		document.getElementById("resultado").innerHTML = "O " + number1 + " é igual a " + number2;
	}
}

function quantosNumerosQuiser(){
	var bollean = true;
	var number;
	var vetor = [];
	var mediaTotal = 0;
	var somaTotal = 0; 
	var cont = 0;

	while(bollean){
		number = window.prompt("Digite um número inteiro");
		if(number == 0){
			bollean = false;
		}else{
			vetor[cont] = parseInt(number);
			somaTotal += parseInt(number);
			cont ++;
		}
	}
	mediaTotal = somaTotal/cont;
	document.getElementById("resultado").addEventListener("click", quantosNumerosQuiser);
	document.getElementById("resultado").innerHTML ="Valores digitados são: [" + vetor + "], a soma total é: " + somaTotal + " e a média aritimética: " + mediaTotal;
}
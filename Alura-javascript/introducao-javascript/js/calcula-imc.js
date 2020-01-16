var tituloInicio = document.querySelector(".cabecalho");
var titulo = document.querySelector(".titulo");
tituloInicio.textContent = "Aparecida Nutricionista";
titulo.textContent = "Aparecida Nutricionista";

//Armazendo o conteúdo do DOM nos var
var paciente = document.querySelectorAll(".paciente");

//Loop para pegar cada valor de pacientes
for (var i = 0; i < paciente.length; i++) {
	var tdPeso = paciente[i].querySelector(".info-peso");
	var tdAltura = paciente[i].querySelector(".info-altura");
	var tdImc = paciente[i].querySelector(".info-imc");

	//Armazenando o valor que contem no elemento <td>
	var peso = tdPeso.textContent;
	var altura = tdAltura.textContent;

	//Valores booleanos
	var pesoValido = validaPeso(peso);
	var alturaValido = validaAltura(altura);

	//Analise para valores fora da faixa
	if(!pesoValido){
		console.log("Peso inválido");
		tdImc.textContent = "Peso inválido";
		pesoValido = false;
		paciente[i].classList.add("paciente-invalido");
	}

	if (!alturaValido){
		console.log("Altura inválida");
		tdImc.textContent = "Altura inválida";
		alturaValido = false;
		paciente[i].classList.add("paciente-invalido");
	}

	//Calculo do imc e mandando para o o html o resultado

	if (pesoValido && alturaValido) {
		paciente[i].querySelector(".info-imc").textContent = calculaImc(peso, altura);
	}
}


function calculaImc(peso, altura){
	var imc = 0;

	imc = peso /(altura * altura);

	return imc.toFixed(2);

}

function validaPeso(peso){
	if(peso >= 0 && peso <= 1000 ){
		return true;
	}else{
		return false;
	}
}

function validaAltura(altura){
	if(altura >= 0 && altura <= 3.0 ){
		return true;
	}else{
		return false;
	}
}
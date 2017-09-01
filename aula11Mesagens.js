function myFunction(){
	var valor = prompt("Digite o valor desejado");
		if(valor > 10){
			document.writeln("Vc digitou:" + valor);
		}else{
			document.writeln("Não rolou");
		}
		var nome = window.prompt("Digite seu nome");
		document.writeln("Nome: " + nome);
	}
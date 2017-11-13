class Jogador{

	constructor( name, sexo, typePlayer){
		this.name = name;
		this.sexo = sexo;
		this.typePlayer = typePlayer;
		this.play = "";
		this.points = 0;
	}
	opcaoSelecionada(){
		var plays = ["papel", "pedra", "tesoura"];
		var radom = Math.floor((Math.random() * 3 ));
		if (this.typePlayer == "Computer"){
			this.play = plays[radom];
			return this.play;
		}else{
			return "";
		}
	}

}

class Confront{
	whoWin(playerPc, playerHm){
		if (playerPc.play == playerHm.play) {
			window.alert(" Tie !!!");
			playerPc.points += 1;
			playerHm.points += 1;
		}else if((playerPc.play == 'papel') && (playerHm.play == 'tesoura')){
			window.alert(playerHm.name + " Win!!!");
			playerHm.points += 3;
		}else if((playerPc.play == 'tesoura') && (playerHm.play == 'pedra')){
			window.alert(playerHm.name + " Win!!!");
			playerHm.points += 3;
		}else if((playerPc.play == 'pedra') && (playerHm.play == 'papel')){
			window.alert(playerHm.name + " Win!!!");
			playerHm.points += 3;
		}else if((playerPc.play == 'tesoura') && (playerHm.play == 'papel')){
			window.alert(playerPc.name + " Win!!!");
			playerPc.points += 3;
		}else if ((playerPc.play == 'pedra') && (playerHm.play == 'tesoura')){
			window.alert(playerPc.name + " Win!!!");
			playerPc.points += 3;
		}else{
			window.alert(playerPc.name + " Win!!!");
			playerPc.points += 3;
		}
	}
	insertTable(element1, element2, element3, element4){
			var table = document.getElementById("myTable");
		    var row = table.insertRow(0);
		    var cell1 = row.insertCell(0);
		    var cell2 = row.insertCell(1);
		    var cell3 = row.insertCell(2);
		    var cell4 = row.insertCell(3);
		    cell1.innerHTML = element1;
		    cell2.innerHTML = element2;
		    cell3.innerHTML = element3;
		    cell4.innerHTML = element4;
		}
}
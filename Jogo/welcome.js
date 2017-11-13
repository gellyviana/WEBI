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
	
}
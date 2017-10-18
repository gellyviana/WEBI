<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
	<title></title>
</head>
<body>
	<h1> Fomulario de cadastro</h1>
	<form method="get" >
	Nome: <input type="text" name="campoNome">
	<br>Idade: <input type="text" name="idade">
	<br> Email: <input type="text" name="email">

	<br>Sexo: <input type="radio" name="sexo" value="F">Feminino
				<input type="radio" name="sexo" value="M">Masculino

	<br>
		<input type="reset" name="Limpar">
		<input type="submit" name="Enviar">
	</form>
		<?php
			$nome = $_REQUEST["campoNome"];
			$idade = $_REQUEST["idade"];
			$email = $_REQUEST["email"];
			$sexo = $_REQUEST["sexo"];
		?>
		<? $echo($nome);
			$echo($idade);
			$echo($email);
			if($sexo == 'F'){
				$echo "Feminino";
			}else{
				$echo "Masculino";
			}
		?>	

</body>
</html>
<!DOCTYPE html>
<html>
<head>
	<title>Usando Ajax</title>
	<script type="text/javascript" src="usandoAjax.js"></script>
</head>
<body>
	<form method="get" action="show.php" name="meuForm">
	Nome: <input type="text" name="campoNome">
	<br>
		<input type="reset" name="Limpar">
		<input type="submit" name="Enviar" onclick="retornaNome()">
	</form>	
	<?php
		$nome = $_REQUEST["campoNome"];
	?>

</body>
</html>
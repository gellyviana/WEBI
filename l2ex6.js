function deletaRow(){
	document.getElementById("myTable").deleteRow(); 
}

function confirma(){
	var info = document.getElementById("form");
	var table = document.getElementById("myTable");
	var row = table.insertRow();
	var cell1 = row.insertCell();
	var cell2 = row.insertCell();
	var cell3 = row.insertCell();
	var cell4 = row.insertCell();
	var cell5 = row.insertCell();

	cell1.innerHTML = info.elements[0].value;
	cell2.innerHTML = info.elements[1].value;
	cell3.innerHTML = info.elements[2].value;
	cell4.innerHTML = info.elements[3].value;
	cell5.innerHTML = '<button onclick="deletaRow()">Excluir</button>';

}

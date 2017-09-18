function deletaRow(){
	document.getElementById("myTable").deleteRow(1); 
}

function confirma(){
	var info = document.getElementById("form");
	var table = document.getElementById("myTable");
	var row = table.insertRow(1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);

	cell1.innerHTML = info.elements[0].value;
	cell2.innerHTML = info.elements[1].value;
	cell3.innerHTML = info.elements[2].value;
	cell4.innerHTML = info.elements[3].value;

}
//Pegando todos os pacientes da tabela
//var pacientes = document.querySelectorAll(".paciente");

//Exemplo FOREACH para interar sobre a lista de pacientes
//pacientes.forEach(function (paciente){
//   paciente.addEventListener("dblclick", function(){
//        console.log("Fui clicado");
//        this.remove();
//    });
//});

//Eliminando corretamente a linha clicada
var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function(){
        event.target.parentNode.remove();
    }, 500);
    
})



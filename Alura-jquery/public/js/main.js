var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");

$(function () {
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    inicializaMarcadores();
    $("#botao-reiniciar").click(reinicializaJogo);
});

function atualizaTamanhoFrase() {
    var frase = $(".frase").text();
    var palavras = frase.split(" ").length;
    var contaPalavras = $("#tamanho-frase");
    contaPalavras.text(palavras);
}

function inicializaContadores() {
    campo.on("input", function(){
        var conteudo = campo.val();

        var qtdPalavras = conteudo.split(/\S+/).length - 1;
        $("#contador-palavra").text(qtdPalavras);

        var conteudoSemEspaco = conteudo.replace(/\s+/g,'');
        var qtdCaracter = conteudoSemEspaco.length;
        $("#contador-caracter").text(qtdCaracter);
    });    
}

function inicializaMarcadores() {
    var frase = $(".frase").text();
    campo.on("input", function () {
        var digitado = campo.val();
        var comparavel = frase.substr(0, digitado.length);

        if(comparavel == digitado){
            campo.addClass("borda-verde");
            campo.removeClass("borda-vermelha");
        }else{
            campo.addClass("borda-vermelha");
            campo.removeClass("borda-verde");
        }
    });
}

function inicializaCronometro() {
    var tempoRestante = $("#tempo-digitacao").text();
    campo.one("focus", function () {
        var cronometroId = setInterval(function () {
            tempoRestante --;
            $("#tempo-digitacao").text(tempoRestante);
            if (tempoRestante < 1) {
                clearInterval(cronometroId);
                finalizaJogo();
            }
        }, 1000);
    });
}

function finalizaJogo() {
    campo.attr("disabled", true);
    campo.toggleClass("campo-desativado");
    inserePlacar();
}

function reinicializaJogo(){ 
    campo.attr("desabled", false);
    campo.val("");
    $("#contador-caracter").text(0);
    $("#contador-palavra").text(0);
    $("#tempo-digitacao").text(tempoInicial);
    inicializaCronometro();
    campo.toggleClass("campo-desativado");
    campo.removeClass("borda-verde");
    campo.removeClass("borda-vermelha");
}







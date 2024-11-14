var joao = {
    nome:"joao",
    cpf: "12345678912",
    idade: "18"
}

var pedro = {
    nome:"pedro",
    cpf:"33344455522",
    idade:"21"
}

var leticia = {
    nome:"leticia",
    cpf:"99977788866",
    idade:"18"
}

var pessoas = [joao, pedro, leticia]

var leitor = require("prompt-sync")();
var busca =  leitor("Informe a idade desejada: ");

for (pessoa of pessoas){
    if (pessoa.idade == busca)
        console.log(pessoa)
}
var Pessoa = function(nome, cpf, idade){
    this.nome = nome
    this.cpf = cpf
    this.idade = idade
}

var pessoas = [
    new Pessoa("joao","11122233344","18"),
    new Pessoa("pedro", "55566677788", "21"),
    new Pessoa("leticia", "00099988877", "18")
]

var leitor = require("prompt-sync")();
var busca =  leitor("Informe a idade desejada: ");

for (pessoa of pessoas){
    if (pessoa.idade == busca)
        console.log(pessoa)
}
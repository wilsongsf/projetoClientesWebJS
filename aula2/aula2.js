var leitor = require("prompt-sync")();

var parada =  leitor("Informe o numero: ");

for(var i=0 ; i<parada ; i++){
    console.log(`Numero: ${i} \n`);
}


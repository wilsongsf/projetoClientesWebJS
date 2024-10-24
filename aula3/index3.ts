function soma(x:number,y:number){
    return x+y
}

fazOperacao(soma);

// usando spread (...)
var a = {"nome": "vitor", "cidade": "nova friburgo"};
var b
var c = {a, ...b};
console.log(c);
var d = [1,2];
var e = [3,4];
var f = [d, ...e];
console.log(f);
function somaNova(...valores:number[]){
    var resultado = 0;
    for(var x:number = 0; x<valores.length; x++){
        resultado+=valores[x];
    }
    return resultado;
}
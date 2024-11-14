function carrega() {
    var form = document.getElementById("formTxt");
    alert(form.nextElementSibling?.innerText);
}

function main(){
    var body = document.body;
    
    var form = document.createElement("form");
    body.appendChild(form);


    var numero1 = document.createElement("input").type("number").value("n1");
    var lnumero1 = document.createElement("label").for("n1").innerText("N1");
    var numero2 = document.createElement("input").type("number").value("n1");
    var lnumero2 = document.createElement("label").for("n2").innerText("N2");

    form.appendChild(lnumero1)
    form.appendChild(numero1)
    form.appendChild(lnumero2)
    form.appendChild(numero2)

    btnCalc = document.createElement("input").type("submit").value("calcular");

    btnCalc.onclick(()=>{
        alert(numero1 + numero2);
    })
}
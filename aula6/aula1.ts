var carregaDiv = ()=>{
    var divPrinc: HTMLDivElement | null = <HTMLDivElement>document.getElementById("principal");
    console.log(divPrinc);
    if(divPrinc)
        divPrinc.innerHTML = "conteudo carregado com sucesso";
}
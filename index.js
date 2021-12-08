var func = document.querySelector("#func");
var cesta= document.querySelector("#cesta");
var body = document.querySelector("body");
var dh = new Date;

var entrega = document.querySelector(".entrega");

function entregar() {
    let card = document.createElement("div");
    card.className = "card";

    let dados = document.createElement("div");
    dados.className = "dadosfunc";

    let funcionario = document.createElement("p");
    funcionario.id = "funcionario";
    funcionario.innerHTML = func.value;

    let tcesta = document.createElement("p");
    tcesta.id = "tcesta";
    tcesta.innerHTML = cesta.value;

    let data = document.createElement("p");
    data.id = "data";
    data.innerHTML = dh.getDate() + "/" + (dh.getMonth() + 1) + "/" + dh.getFullYear();

    let hora = document.createElement("p");
    hora.id = "hora";
    hora.innerHTML = dh.getHours() + ":" + dh.getMinutes() + ":" + dh.getSeconds();

    card.appendChild(funcionario);
    card.appendChild(dados);
    card.appendChild(tcesta);
    card.appendChild(data);
    card.appendChild(hora);

    body.appendChild(card);

    console.log(card);

    var nome = document.cdc.func;
    nome.remove(nome.selectedIndex);

    let option = document.querySelector("#option");

    if(option == null) {
        alert("Não tem funcionário");
    }else {
        
    }
}
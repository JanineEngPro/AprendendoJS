const AgradecimentoTD = document.querySelector("#mensagemTD")
const AgradecimentoAA = document.querySelector("#mensagemAA")
const AgradecimentoCP = document.querySelector("#mensagemCP")

AgradecimentoTD.addEventListener("click", mensagemCliente)
AgradecimentoAA.addEventListener("click", mensagemCliente)
AgradecimentoCP.addEventListener("click", mensagemCliente)

function mensagemCliente(){
    alert ('Estamos felizes por escolher os serviços Eng_Pro_|, estamos sempre diponiveis para mais esclarecimentos')
}


const AgradecimentoTD = document.querySelector("#mensagemTD")
const AgradecimentoAA = document.querySelector("#mensagemAA")
const AgradecimentoCP = document.querySelector("#mensagemCP")

AgradecimentoTD.addEventListener("click", mensagemCliente)
AgradecimentoAA.addEventListener("click", mensagemCliente)
AgradecimentoCP.addEventListener("click", mensagemCliente)

function mensagemCliente(){
    alert ('Estamos felizes por escolher os serviços Eng_Pro_|, estamos sempre diponiveis para mais esclarecimentos')
}

const controle = document.querySelectorAll(".botton")

controle.forEach( (elemento)=> {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.textContent, evento.target.parentNode)
        //evento com alvo textContent e evento com alvo elemento pai
    })
})
function manipulaDados(operacao, controle) {
    const servico = controle.querySelector(".controle-contador")

    if(operacao === "-"){
        servico.value =  parseInt(servico.value) - 1
    }
    else{
        servico.value =  parseInt(servico.value) + 1
    }
}



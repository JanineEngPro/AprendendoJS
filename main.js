const AgradecimentoTD = document.querySelector("#mensagemTD")
const AgradecimentoAA = document.querySelector("#mensagemAA")
const AgradecimentoCP = document.querySelector("#mensagemCP")

AgradecimentoTD.addEventListener("click", mensagemCliente)
AgradecimentoAA.addEventListener("click", mensagemCliente)
AgradecimentoCP.addEventListener("click", mensagemCliente)

function mensagemCliente(){
    alert ('Estamos felizes por escolher os serviços Eng_Pro_|, estamos sempre diponiveis para mais esclarecimentos')
}

const somar = document.querySelector("#somar")
const subtrair = document.querySelector("#subtrair")
const comprar = document.querySelector("#comprar")

const controle = document.querySelectorAll(".botton")

controle.forEach( (elemento)=> {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.textContent, evento.target.parentNode)
    })
})
function manipulaDados(operacao, controle) {
    const servico = controle.querySelector(".controle-contador")

    if(operacao === "-"){
        servico.value =  parseInt(servico.value) -1
    }
    else{
        servico.value =  parseInt(servico.value) +1
    }
}



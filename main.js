const AgradecimentoTD = document.querySelector("#mensagemTD")
const AgradecimentoAA = document.querySelector("#mensagemAA")
const AgradecimentoCP = document.querySelector("#mensagemCP")

AgradecimentoTD.addEventListener("click", mensagemCliente)
AgradecimentoAA.addEventListener("click", mensagemCliente)
AgradecimentoCP.addEventListener("click", mensagemCliente)

function mensagemCliente(){
    alert ('Estamos felizes por escolher os serviços Eng_Pro_|, estamos sempre diponiveis para mais esclarecimentos')
}

const controle = document.querySelectorAll("[data-controle]")
// querySelectorAll Criou uma ARRAY com elemento do mesmo dataSet

controle.forEach( (elemento)=> {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
    })
})
        //forEach paraCada() - executar determinada função para cada elemento de um array em ordem ascendente.
        //SINTAXE- array.forEach("funcao" (elemento [, indice [, array]])[, thisArgumento])
        //evento com alvo no dataset do filho controle e evento com alvo elemento pai serviço



function manipulaDados(operacao, controle) {
    const servico = controle.querySelector("[data-contador]")
    //chamar o dataset do input

    if(operacao === "-"){
        servico.value =  parseInt(servico.value) - 1
        //value do elemento pai serão mudados
        //parseInt transforma em inteiro
    }
    else{
        servico.value =  parseInt(servico.value) + 1
    }
}



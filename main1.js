const form = document.getElementById("novoItem")
//a variável  constante 'form'recebe os elementos buscado pelo Get com class "novoItem" 
const lista = document.getElementById("lista")
// a variável constante 'lista" recebe os elementos buscado pelo get com a class "lista"
// ???essa lista esta vazia e quero faze com que receba os item dos input para isso tem que criar uma 
// function que cria elemento dentro do html. ???

//criamos novos iten dentro do html
form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    criaElemento(evento.target.elements['nome'].value, evento.target.elements['quantidade'].value)
    
    evento.target.elements['nome'].value = ""//Para deixar o input vazio
    evento.target.elements['quantidade'].value = ""//Para deixar o input vazio
})


// o submit envia para o form os itens que o input recebe
// evento.preventDefault() - interrompe o comportamento padrão do evento de enviar para página para poder enviar para o form

function criaElemento(nome, quantidade) {
    const novoItem = document.createElement('li')//criou um tag li e salvou em novoItem
    novoItem.classList.add("item") //no novoItem adicionou uma class "item"

    const numeroItem = document.createElement('strong')//criou a tag strong
    numeroItem.innerHTML = quantidade //numeroItem recebe (pelo innerHTML) o elemento quantidade 
    novoItem.appendChild(numeroItem)//anexar filho 

    novoItem.innerHTML += nome

    lista.appendChild(novoItem)


//??????? Armazenar as informações na maquina os itens criado dentro do html?????
// localStorage


const itemAtual = {
    "nome": nome,
    "quantidade": quantidade
    }

itens.push(itemAtual)

localStorage.setItem("item", JOSON.stringify(itens))
}



let mostrar = document.getElementById("mostrar")
//let car = "fiar"
let car = {
    nome: "fiat", 
    cor:"Vermelho",
    modelo: "uno"
}

const aluno = {
    PrimeiroNome: 'Johan',
    segundoNome: 'Carlos',
    Idade: 18,
    nacionalidade: 'Bolívia'
}

//

const Pessoa = {
    primeiroNome: "Brunão",
    segundoNome: "Ruiz",
    id: 335214,
    fullNome: function()
    {
        return this.primeiroNome + " " + this.segundoNome
    }
}

//vetor

let cor = ["Azul","Vermelho"]
const tarefas = [
    {
        id : 1,
        texto: 'levar o lixo para fora',
        completado: true,
    },
    {
        id: 2,
        texto: 'encontrar com o chefe',
        completado: true
    },
    {
        id:3,
        texto: 'consulta no dentista',
        completado: false,
    }
]

tarefas.forEach(teste)
function teste(tarefas){
    console.log(tarefas.texto)
}
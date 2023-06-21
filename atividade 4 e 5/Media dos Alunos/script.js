let numero = document.getElementById("numero");
let aprovReprov = document.getElementById("aprov-reprov")

function checar(){
    switch(numero.value){
        case "": 
            aprovReprov.innerHTML = ("Ops! porfavor escolha o número");
        break
        case "1": 
            aprovReprov.innerHTML = ("Aprovado");
        break
        case "2": 
            aprovReprov.innerHTML = ("Reprovado");
        break
        case "3": 
            aprovReprov.innerHTML = ("aprovado");
        break
        case "4": 
            aprovReprov.innerHTML = ("aprovado");
        break
        case "4": 
            aprovReprov.innerHTML = ("Reprovado");
        break
        default: 
            aprovReprov.innerHTML = ("Nao tem essa parada aqui")
    }
}
 
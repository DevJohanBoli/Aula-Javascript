let x = document.getElementById("nmr_inicio")
let y = document.getElementById("nmr_desejado")


function AREA(){
    while(parseInt(x.value) <= parseInt(y.value)){
        let p = document.createElement("p")
        let texto = document.createTextNode(x.value)
        p.appendChild(texto)
        document.getElementById("contar").appendChild(p)
        x.value++
    }
}
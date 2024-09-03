console.log("SI FUNCIONA")

function calcularHipotenusa(a,b){
    let resultado = Math.sqrt(a**2+b**2)
    return resultado
}

let botonCalcular = document.getElementById("botonCalcular")

botonCalcular.addEventListener("click", function(){
    let ladoA = document.getElementById("ladoA").value
    let ladoB = document.getElementById("ladoB").value
    let texto = document.getElementById("texto")
    texto.innerText = `La hipotenusa es de: ${calcularHipotenusa(ladoA,ladoB)}`
    let encabezados = document.getElementsByClassName("encabezadoPrincipal")
    console.log(encabezados)
    for(let i = 0;i<encabezados.length;i++){
encabezados[i].innerText="Hola" 
    }

})
//Reglas sobre el query selector
// Si es un ID lo llamo con #
document.querySelector("#ladoA")
//Si es una clase lo llamo con .
document.querySelector(".encabezadoPrincipal")



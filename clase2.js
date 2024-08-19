//funciones(expresada,declarada,flecha)

console.log(nombreDeLaFuncion(2, 3))
let nombre = "Esteban2"
//declare una función expresada
function nombreDeLaFuncion(parametro1, parametro2) {
    parametro1 = parametro1 + 1
    return parametro1
}

console.log(nombreDeLaFuncion(1, 2))

//declarar una funcion declarada
//console.log(expresada(1,2))
let expresada = function (a, b) {
    return a + b
}

//declarar una función flecha
let sumar2 = (a, b) => a + b;
let doble = numero => numero * 2
console.log(sumar2(1, 2))
console.log(doble(4))
// tambien existen las funciones anonimas
/*
funcion (){
}
*/

//estructura if, else if 

function IMC(altura, peso) {
    let formula = peso / (altura ** 2)
    if (formula < 18.5) {
        return "Bajo peso"
    }
    else if (formula < 4.9) {
        return "Normal"
    }
    else if (formula < 29.9) {
        return "Sobrepeso"
    } else {
        return "Obesidad"
    }

}

console.log(IMC(1.78, 93))
console.log(IMC(1.77, 68))
console.log(IMC(2.10, 100))

//operador ternario
let edadMinima = 19
edadMinima < 18 ? console.log("no puede pasar"): console.log("si puede pasar");

//and y or
// and &&
// or || 
function montaniaRusa(altura,acompaniado){
    //si mide mas de 1.70 puede pasar
    //si mide menos de 1.70 pero esta acompañado puede pasar
    //si mide menos de 1.70 pero no esta acompañado no puede pasar
    if(altura > 1.70 || acompaniado === "si"){
        return "Puede pasar"
    }else if ( altura < 1.70 && acompaniado ==="no"){
        return "No puede pasar"
    }else{
        return "error de programa"
    }
}


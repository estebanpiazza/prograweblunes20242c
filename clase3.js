
/*
for i in range(0,100):
    print(i)

*/
// for (variable de iteración, condición, variación){}
// i++ es lo mismo que i = i + 1
// i-- decrementa
for(let i = 0; i<100; i++){
    console.log(i)
}

const NUMEROS = [1,2,3,4,5,6]

function recorrerArray(arrayARecorrer){
    // len(arrayARecorrer)
    for(let i = 0; i < arrayARecorrer.length; i++ ){
        console.log(arrayARecorrer[i])
    }
}

recorrerArray(NUMEROS)

const ARRAYDEOBJETOS = [
    {nombre:"Steve",edad:31},
    {nombre:"Dani",edad:22},
    {nombre:"Anto",edad:23},
]

recorrerArray(ARRAYDEOBJETOS)

function calcularEdadPromedio (array){
    let sumaDeEdades = 0;
    for ( let i = 0; i<array.length;i++){
        sumaDeEdades = sumaDeEdades + array[i].edad
    }
    let resultado = sumaDeEdades / array.length
    return resultado
}

console.log(calcularEdadPromedio(ARRAYDEOBJETOS))

function encontrarIndice(array, elementoBuscado){
    for ( let i = 0; i < array.length;i++){
        if ( elementoBuscado === array[i].nombre){
            return i
        }
    }
    return "Valor no encontrado"
}

console.log(encontrarIndice(ARRAYDEOBJETOS,"Steve"))
console.log(encontrarIndice(ARRAYDEOBJETOS,"Pepe"))
const ARRAYPERSONAS = ["Steve","Dani","Anto"]
console.log(ARRAYPERSONAS.indexOf("Dani"))

/********************************/
const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map(
    (x) => x * 2
);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]

/***************************************/

// API y JSON

let objeto = {
    nombre: "Gonzalo",
    edad : 23,
    deudor: true,
    carrera: "Lic. en Gestión de Negocios",
    cancelarDeuda : function (){
        this.deudor = false
    }
}

console.log(objeto)
let objetoJSONEADO = JSON.stringify(objeto)
console.log(objetoJSONEADO)
let objetoParseado = JSON.parse(objetoJSONEADO)
console.log(objetoParseado)



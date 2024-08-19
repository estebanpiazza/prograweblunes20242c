let nombre = "Esteban"
// let nombreDeLaVariable = valor
// comentario de una sola linea
/*
*comentario multi linea
*/

let edad = 31;
let antiguedadItba = 3.25;
let activo = true;
console.log(typeof(nombre));

const hola = 1;

let num1 = 1;
let num2 = "11";
console.log(num2+num1)
console.log(typeof(num2+num1))

// ARRAY (Arreglo) > Vector ( LISTA )
//              0       1       2
let colores = ["rojo", "verde", "azul"];
console.log(colores[1])
console.log(colores[4])
colores[0]="negro";
console.log(colores)
const NUMEROS = [1, 2, 3, 4, 5];
NUMEROS[0] = "PAPAS FRITAS"
console.log(NUMEROS)
NUMEROS.push(6)
console.log(NUMEROS)

// python: diccionario - javascript : objeto

let profesor = {
    nombre: "Esteban",
    edad: 31,
    facha: true,
    altura: 1.78,
    cumplirAnio : function (){
        this.edad = this.edad + 1
    },
}
profesor.cumplirAnio()
console.log(profesor.edad)

// POO  OOP programacion orientada a objetos: JAVA / C++

console.log(profesor.edad)

// array : [] - objetos {}

// Array de Objetos Literales
const usuarios = [{nombre:"Felipe"},{nombre:"Philip",edad:20},{nombre:"Una pregunta"}]
console.log(usuarios[1].nombre)

//Operadores
//Matematicos
// + sumar o concatenar
// - restar
// *  multiplicar (2*2)=4
// ** potencia ( 2**3 )= 8
// / dividir(cociente)  (10/5) = 2
// % dividir(resto) (10%5) = 0

//Logicos ( true o false)
// == igualdad debil : compara el valor
// === igualdad estrica: compara el valor y el tipo de dato
console.log(11=="11")
console.log(11==="11")
// != desigualdad debil
// !== desigulada estricta
console.log(11!="11")
console.log(11!=="11")
// > mayor
// >= mayor o igual
// < menor
// <= menor o igual
console.log(8<5)
console.log(10<10)

let i = 0
i++
console.log(i)

// a = a + b
// a += b


//parseo/castean los datos
let cualquiera = "11.6"
let cualquieraNumero = parseInt(cualquiera)
console.log(cualquieraNumero)
let cualquieraNumeroFloat = parseFloat(cualquiera)
console.log(cualquieraNumeroFloat)
let cualquieraEnTexto = cualquieraNumero.toString()
console.log(cualquieraEnTexto)

//thurty y flasy

console.log("perro"&&"gato")
console.log("perro"||"gato")


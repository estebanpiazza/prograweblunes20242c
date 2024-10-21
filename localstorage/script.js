/* "Javascript: localstorage/ formsubmitter  / librerias /  import - export
Armado de carrito de compras" */

let botonGuardado = document.querySelector("#guardarLocal")

console.log(botonGuardado)

botonGuardado.addEventListener("click", function (){
    let contenido = document.getElementById("textoAGuardar").value
    console.log(contenido)
     localStorage.setItem("textoLocal",contenido) 
})

/* window.addEventListener("load", function(){
    let infoLocal = document.querySelector("#infoLocal")
    let contenido = localStorage.getItem("textoLocal")
    infoLocal.innerText = contenido
    let nombre = prompt("Ingrese su nombre: ")
    localStorage.setItem("nombreUsuario", nombre)
    document.getElementById("saludo").innerText="Hola " + this.localStorage.getItem("nombreUsuario")
    }

) */

let borrar = document.querySelector("#borrar")
borrar.addEventListener("click",function(){
    localStorage.removeItem("textoLocal")
})

console.log(Math.sqrt(121))
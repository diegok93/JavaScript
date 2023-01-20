// Inicio modo oscuro

const modoOscuro = document.querySelector("#oscuro")
const modoClaro = document.querySelector("#claro")



const infoLs = ( key, value ) => {
    const transformarAJson = JSON.stringify(value) 
    localStorage.setItem (key, transformarAJson)
}

const obtenerLs = ( key ) => {
    const bajarDelLs = JSON.parse(localStorage.getItem( key ))
    return bajarDelLs
}


const aplicarModo = ( ) => {  
    const modo = obtenerLs("modoOscuro")
    if ( modo === "si" ){
        document.querySelector("body").style.backgroundColor = "black"
        document.querySelector("header").style.backgroundColor = "black"
        document.querySelector("aside").style.backgroundColor = "black"
        document.querySelector("main").style.backgroundColor = "black"
        document.querySelector(".contGrid").style.backgroundColor = "black"
        document.querySelector("h1").style.color = "white"

        const h2 = document.querySelectorAll("h2")
        h2.forEach((item) => item.style.color = "white")

        const h3 = document.querySelectorAll("h3")
        h3.forEach((item) => item.style.color = "white")

        document.querySelector("p").style.color = "white"
        document.querySelector("form").style.color = "white"


        } else if ( modo === "no"){
        document.querySelector("body").style.backgroundColor = "white"
        document.querySelector("header").style.backgroundColor = "white"
        document.querySelector("aside").style.backgroundColor = "white"
        document.querySelector("main").style.backgroundColor = "white"
        document.querySelector(".contGrid").style.backgroundColor = "white"
        document.querySelector("h1").style.color = "black"

        const h2 = document.querySelectorAll("h2")
        h2.forEach((item) => item.style.color = "black")

        const h3 = document.querySelectorAll("h3")
        h3.forEach((item) => item.style.color = "black")

        document.querySelector("p").style.color = "black"
        document.querySelector("form").style.color = "black"  // tira error fuera de "contacto" pero no crashea
    }
}


modoOscuro.onclick = () => {
    infoLs("modoOscuro", "si")
    aplicarModo ()
}

modoClaro.onclick = () => {
    infoLs("modoOscuro", "no")
    aplicarModo ()
}

aplicarModo ( )

// Fin modo oscuro
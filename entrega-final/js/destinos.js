const contenedorCards = document.querySelector(".contFlex")

let carrito = []

/* fetch("https://63bf5764e262345656e7a5a2.mockapi.io/destinos") 
.then((res) => res.json())  
.then((data) => {
    destinosFetch = data
}) 
.catch(() => console.log("Está caído MOCKAPI"))
 */

const cardsAHtml = ( array ) => {
    const arrayReducido = array.reduce ( (acc, element) => {
        return acc + `
        <article class="box" id=${element.id}>

            <div class="box box1">
                <img src=${element.img} alt=${element.destino}>
            </div>
            
            <div class="box box2">
                <h2> ${element.destino} </h2>

                <h3> ${element.desc1} </h3>

                <h4> USD ${element.precio} </h4>
                <button class="boton-carrito" id=${element.id}> Agregar al carrito </button>
            </div>

        </article>
        `
    }, "")
    return arrayReducido
}

contenedorCards.innerHTML = cardsAHtml (destinos)

const alLs = ( clave, valor ) => {
    return localStorage.setItem(clave, JSON.stringify(valor))
}

const pushearAArray = (array, value) => {
    array.push(value)
}

const obtenerDelLs = (clave) => {
    return JSON.parse(localStorage.getItem(clave))
}

// inicio mensaje de Toastify
const mensajeAlAgregar = ( ) => {
    Toastify({
        text: "Elemento agregado al carrito",
        duration: 2000,
        close: true
    }).showToast()
}
// fin mensaje de Toastify

const agregarAlCarrito = () => {
    const botonesCards = document.querySelectorAll(".boton-carrito")
    console.log(botonesCards)
    
    botonesCards.forEach( boton => {
        boton.onclick = () => {
            mensajeAlAgregar ()
            const buscarDestino = destinos.find (destino => {
                return destino.id === Number(boton.id)
            })
            pushearAArray(carrito, buscarDestino)
            console.log(carrito)
            alLs("carrito", carrito)
        }
})
}

agregarAlCarrito()

const carritoActualizado = obtenerDelLs("carrito") || []

carrito = carritoActualizado

// Ordenar por orden alfabético
function ordenarDestino (array,orden) {
    const arrayOrdenado = [...array]
    if (orden) {
        arrayOrdenado.sort((a,b) => {   
            if (a.destino < b.destino) {
                return -1  
            } else if (a.destino > b.destino) {
                return 1 
            } else {
                return 0  
            }
        })
    } else if (!orden) {
        arrayOrdenado.sort((a,b) => {   
            if (a.destino > b.destino) {
                return -1  
            } else if (a.destino < b.destino) {
                return 1 
            } else {
                return 0  
            }
        })
    }
    return arrayOrdenado
}

const filtroAZ = document.querySelector("#filtroAZ")
const filtroZA = document.querySelector("#filtroZA")

filtroAZ.onclick = () => {
    contenedorCards.innerHTML = cardsAHtml(ordenarDestino(destinos,true))
    agregarAlCarrito()
    aplicarModo()
}

filtroZA.onclick = () => {
    contenedorCards.innerHTML = cardsAHtml(ordenarDestino(destinos,false))
    agregarAlCarrito()
    aplicarModo()
}

// Ordernar por precio
function ordenarPrecio (array,orden) {
    const arrayOrdenado = [...array]
    if (orden) {
        arrayOrdenado.sort((a,b) => {   
            if (a.precio < b.precio) {
                return -1  
            } else if (a.precio > b.precio) {
                return 1 
            } else {
                return 0  
            }
        })
    } else if (!orden) {
        arrayOrdenado.sort((a,b) => {   
            if (a.precio > b.precio) {
                return -1  
            } else if (a.precio < b.precio) {
                return 1 
            } else {
                return 0  
            }
        })
    }
    return arrayOrdenado
}

const filtroMayorPrecio = document.querySelector("#filtroMayorPrecio")
const filtroMenorPrecio = document.querySelector("#filtroMenorPrecio")

filtroMayorPrecio.onclick = () => {
    contenedorCards.innerHTML = cardsAHtml(ordenarPrecio(destinos,false))
    agregarAlCarrito()
    aplicarModo()
}

filtroMenorPrecio.onclick = () => {
    contenedorCards.innerHTML = cardsAHtml(ordenarPrecio(destinos,true))
    agregarAlCarrito()
    aplicarModo()
}

// Filtro de ofertas
function soloOfertas (array) {
    const arrayOrdenado = array.filter ( (curr) => {
        return curr.promocion === true
    })
    return arrayOrdenado
}

const filtroOfertas = document.querySelector("#filtroOfertas")

filtroOfertas.onclick = () => {
    contenedorCards.innerHTML = cardsAHtml(soloOfertas(destinos))
    agregarAlCarrito()
    aplicarModo()
}
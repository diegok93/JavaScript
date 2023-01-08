const contenedorCards = document.querySelector(".contFlex")

let carrito = []

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

const agregarAlCarrito = () => {
    const botonesCards = document.querySelectorAll(".boton-carrito")
    console.log(botonesCards)
    botonesCards.forEach( boton => {
        boton.onclick = () => {
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
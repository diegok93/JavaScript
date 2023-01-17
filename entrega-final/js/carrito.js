const obtenerDelLs = ( clave ) => {
    return JSON.parse(localStorage.getItem("carrito"))
}

let carrito = obtenerDelLs("carrito")

const cardsAHtml = ( array ) => {
    const arrayReducido = array.reduce( (acc, element ) => {
        return acc + `
        <article class="boxCarrito" id=${element.id}>

                <h2> ${element.destino} </h2>

                <h4> USD ${element.precio} </h4>

        </article>
        `
    }, "")
    return arrayReducido
}

const containerCarrito = document.querySelector(".contCarrito")
containerCarrito.innerHTML = cardsAHtml(obtenerDelLs("carrito"))

const alLs = ( clave, valor ) => {
    return localStorage.setItem(clave, JSON.stringify(valor))
}

const vaciarCarrito = () => {
    const botonVaciar = document.querySelector("#vaciar-carrito")
    botonVaciar.onclick = () => {
        carrito = []
        alLs ("carrito", carrito)
        containerCarrito.innerHTML = cardsAHtml(obtenerDelLs("carrito"))
    }
}

vaciarCarrito()


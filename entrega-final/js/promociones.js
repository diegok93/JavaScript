const contenedorCardsPromos = document.querySelector(".swiper-wrapper")

let carrito = []

const cardsAHtml = ( array ) => {
    const arrayFiltrado = array.filter ( (curr) => {
        return curr.promocion === true
    })
    const arrayReducido = arrayFiltrado.reduce ( (acc, element) => {
        return acc + `
        <div class="swiper-slide" id=${element.id}>
            <table>
                <tr><td>
                    <img src=${element.img} alt=${element.destino}>
                </td></tr>
                <tr><td>
                    <h3>${element.destino}</h3>
                </td></tr>
                <tr><td>
                    <h4>USD ${element.precio}</h4>
                </td></tr>
                <tr><td>
                    <button class="boton-carrito" id=${element.id}> Agregar al carrito </button>
                </td></tr>
            </table>
        </div>
        `
    }, "")
    return arrayReducido
}

contenedorCardsPromos.innerHTML = cardsAHtml (destinos)


// Swiper JS
var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
// Swiper JS

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
        
    botonesCards.forEach( boton => {
        boton.onclick = () => {
            const buscarDestino = destinos.find (destino => {
                return destino.id === Number(boton.id)
            })
            pushearAArray(carrito, buscarDestino)
            alLs("carrito", carrito)
        }
})
}

agregarAlCarrito()

const carritoActualizado = obtenerDelLs("carrito") || []

carrito = carritoActualizado
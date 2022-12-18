console.log(productos)

const descuento = 10   // Defino el descuento en 10%
const productosDescontados = [...productos].slice (0)

function aplicarDescuentos () {
    productosDescontados.forEach(  (element, i) => {
        if ( productosDescontados[i].oferta ){         // Busco todos los productos en oferta (no hace falta el === true)
        productosDescontados[i].precio = productosDescontados[i].precio * (1 - descuento/100) // aplico el descuento
        // console.log(productosDescontados[i])
    }
})
}


function  ordenarProductosAlfabeticamente () {
    const productosOrdenados = [...productosDescontados].sort( (a, b) => {   // Ordeno por orden alfabético del nombre del producto
        if (a.producto > b.producto) {
            return 1;
        }
        if (a.producto < b.producto) {
            return -1;
        } else {
        return 0;
        }
    })
    console.log(productosOrdenados)
}


function buscarOfertas () {
    if (confirm("¿Desea ver las ofertas?")){
        console.log("Aqui puede ver los productos que están en oferta:")
        const productosEnOferta = productosDescontados.filter ( (current, i) => {   // aplico filtro
            return productosDescontados[i].oferta === true  // retorno solo los productos en oferta
        })
        console.log(productosEnOferta)  // muestro los productos en oferta
    }
    
}

function buscarProducto () {
    const busqueda = prompt("Ingrese el producto que desea buscar")
    
    const productoBuscado = productosDescontados.find ( (element) => {
        return element.producto === busqueda
    })

    const productoBuscadoOk = productosDescontados.some ( (element) => {
        return element.producto === busqueda
    })

    if (productoBuscadoOk) {
        alert("El producto " + productoBuscado.producto + " cuesta $" + productoBuscado.precio)
    } else {
        alert("El producto buscado no fue encontrado, intente nuevamente")
    }
    
    
    
}

aplicarDescuentos ()

ordenarProductosAlfabeticamente ()

buscarOfertas ()

buscarProducto ()
const obtenerDelLs = ( clave ) => {
    return JSON.parse(localStorage.getItem("carrito"))
}

let carrito = obtenerDelLs("carrito")

// Insertar cards de elementos agregados al carrito
const cardsAHtml = ( array ) => {
    const arrayReducido = array.reduce( (acc, element ) => {
        return acc + `
        <article class="boxCarrito" id=${element.id}>

                <h2> ${element.destino} </h2>

                <h4> USD ${element.precio} 
                <button class="boton-eliminar" onclick="eliminarElemento(${element.id})">X</button>
                </h4>

                

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


//Eliminar elemento del carrito
function eliminarElemento(id) {
  let elementoEliminar = carrito.find(elemento => elemento.id === id);
  let indice = carrito.indexOf(elementoEliminar);
  carrito.splice(indice, 1);
  alLs("carrito", carrito);
  containerCarrito.innerHTML = cardsAHtml(carrito);
  sumaCarrito.innerHTML = totalCarrito(carrito)
  aplicarModo()

}



// Vaciado de carrito
const vaciarCarrito = () => {
    const botonVaciar = document.querySelector("#vaciar-carrito")
    botonVaciar.onclick = () => {

        swal({
            title: "Está seguro que desea vaciarlo?",
            text: "El carrito se eliminará y no lo podrá volver a recuperar",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("El carrito ha sido eliminado con éxito", {
                icon: "info",
              });
              carrito = []
              sumaCarrito.innerHTML = totalCarrito(carrito)
        alLs ("carrito", carrito)
        containerCarrito.innerHTML = cardsAHtml(obtenerDelLs("carrito"))
            } else {
              swal("Puede seguir comprando.");
            }
          });

        
    }
}


vaciarCarrito()

// Confirmacion de compra
const confirmarCompra = () => {
    const botonPagar = document.querySelector("#pagar-carrito")
    botonPagar.onclick = () => {
        swal({
            title: "Está seguro?",
            text: "Realizará la compra del carrito",
            icon: "info",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("La compra se ha realizado con éxito!", {
                icon: "success",
              });
              carrito = [];
              sumaCarrito.innerHTML = totalCarrito(carrito)
        alLs ("carrito", carrito)
        containerCarrito.innerHTML = cardsAHtml(obtenerDelLs("carrito"))
            } else {
              swal("Puede seguir comprando.");
            }
          });
    }
}

confirmarCompra ()

// Sumar precios del carrito
sumarDestinos = (array) => {
    let total = 0
    array.forEach((element) => {
        total = total + Number(element.precio)
        return total
    })
    return total
}

function totalCarrito (array) {
        const totalCarrito = sumarDestinos(array)
        return `
        <article class="boxCarrito">

                <h2> TOTAL: </h2>

                <h4> USD ${totalCarrito} </h4>

        </article>
        `
    }

const sumaCarrito = document.querySelector(".totalCarrito")
sumaCarrito.innerHTML = totalCarrito(carrito)



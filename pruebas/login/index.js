// defino el objeto literal
const datosUsuario = {      
    user: "diego",
    password: "perrito123"
}

// funciones genericas y reutilizables que me permiten interactuar con el localSotrage

// const infoAlLs = ( key, value ) => {                 // version resumida: 1 linea y ahorra 1 variable
//     localStorage.setItem ( key, JSON.stringify(value) )
// }

const infoLs = ( key, value ) => {
    const transformarAJson = JSON.stringify(value)  // para enviar info primero transformo con .stringify , despues envío
    localStorage.setItem (key, transformarAJson)
}

// const obtenerDelLs = ( key ) => {                    // version resumida: 1 linea y ahorra 1 variable
//    return JSON.parse(localStorage.getItem( key ))
// }

const obtenerLs = ( key ) => {
    const bajarDelLs = localStorage.getItem( key )      // para obtener info, primero obtengo, despues transformo con .parse
    return JSON.parse (bajarDelLs)
}



// Elemento de envio de formulario: onsubmit
// 1) usar input type = "submit"
// 2) el evento que se encarga de enviarlo es un evento submit sobre el formulario
// 3) se debe prevenir el comportamiento del navegador

const formLogin = document.querySelector("#login")  //formLogin va a ser la variable que contiene al nodo #login

// para acceder a los valores de los inputs, debo tomar y guardar los nodos en una variable

const inputUser = document.querySelector("#input-user")
const inputPass = document.querySelector("#input-pass")
const contenedorFormulario = document.querySelector(".container-login")
const cerrarSesion = document.querySelector("#logout")

formLogin.onsubmit = ( e ) => {   
    e.preventDefault()      // le saco el default que actualiza la web y caga todo el js
    console.log(inputUser.value)    //con el .value accedo al valor
    console.log(inputPass.value)

    if ( inputUser.value === datosUsuario.user && inputPass.value === datosUsuario.password) {
        infoLs ("login", true)
        validarInicioSesion(obtenerLs("login"))     // ejecuto la funcion 
    }
}

// inputUser.oninput = () => {         // para que muestre el valor con cada cambio en el input
//    console.log(inputUser.value)    // sirve por ejemplo para hacer que valide en tiempo real que tenga x cantidad de caracteres
// }

// diferencia entre parámetro y argumento:
// el parámetro es el valor representativo que va a ocupar lugar en la funcion y que va a interactuar con las sentencias, hasta ser reemplazadas por los argumentos


// validar el true del LS, para mentener la sesion del usuario
const validarInicioSesion = ( valor ) => {  
    if ( valor === true ){
        contenedorFormulario.style.display = "none" // saco el formulario de login
        cerrarSesion.style.display = "block"    // muestro el cerrar sesion
        document.querySelector(".lista-usuarios").style.display = "flex"    // metodo sin usar variable. muestro contenido
    } else {
        document.querySelector(".lista-usuarios").style.display = "none"    // saco el contenido
        contenedorFormulario.style.display = "block" // pongo el formulario de login
        cerrarSesion.style.display = "none"         // saco el cerrar sesion
    }
}

cerrarSesion.onclick = () => {      // remuevo el login=true cuando clickeo en cerrar sesion
    localStorage.removeItem("login")
    validarInicioSesion(obtenerLs("login"))
}

validarInicioSesion(obtenerLs("login"))     // ejecuto la funcion en vivo


// añadir nuevos usuarios con formulario a nuestra tabla

let usuarios = []

document.querySelector("#agregar-usuario").onsubmit = (e) => {
    e.preventDefault ()
    usuarios.push({     // generador de objetos
        nombre: document.querySelector("#input-nombre").value,
        edad: document.querySelector("#input-edad").value,
    })
    console.log(usuarios)
    infoLs("usuarios", usuarios)
    usuariosAHtml (obtenerLs("usuarios"))
}


const usuariosAHtml = ( array ) => {
    const arrayReducido = array.reduce ( (acc, elemento) => {
        return acc + `
        <tbody>
            <tr>
                <td>
                    ${elemento.nombre}
                </td>
                <td>
                    ${elemento.edad}
                </td>
            </tr>
        </tbody>
        `
    },`
    <thead>
        <tr>
            <th>
                Nombre
            </th>
            <th>
                Edad
            </th>
        </tr>
    </thead>
    `)
    document.querySelector("table").innerHTML = arrayReducido
}


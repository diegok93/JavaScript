const form = document.querySelector ("form")
const nombre = document.querySelector ("#input-nombre")
const mail = document.querySelector ("#input-mail")
const edad = document.querySelector ("#input-edad")
const mensaje = document.querySelector ("#input-mensaje")

var validarMail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/     // funcion de validación de mail super pro

let notas = []

form.onsubmit = (event) => {
    event.preventDefault ( ) 

    if (nombre.value.length <= 2 || mail.value === "" || edad.value === "" || mensaje.value === ""){ 
        swal("Error", "Debes completar todos los campos.", "error");
    } 
    else if (
        !validarMail.test(mail.value)
    )
    {
        swal("Error", "El mail ingresado es inválido.", "error");
    } else {

    notas.push({
        nombreUser: nombre.value,
        mailUser: mail.value,
        edadUser: edad.value,
        mensajeUser: mensaje.value,
    })
    console.log(notas) 
    swal("Gracias!", "Tu mensaje ha sido enviado.", "success"); 

    }
}
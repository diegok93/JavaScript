let tipoDeHeroe = ""
let danioBase = 0
let vidaBase = 0
let tipoDeMonstruo = ""
let danioMonstruoBase = 0
let vidaMonstruoBase = 0
let validacion = true
const variacionDanio = 50
let danioReal = 0
let danioMonstruoReal = 0

function enteroRandom(max) {
    return Math.floor(Math.random() * max) - variacionDanio/2;
}

function elegirHeroe (){
    tipoDeHeroe = prompt("¿Desea crear un Mago, Guerrero o Tanque?")
    switch (tipoDeHeroe){
        case "mago":
            danioBase = 150
            vidaBase = 225
            break
        case "guerrero":
            danioBase = 80
            vidaBase = 300
            break
        case "tanque":
            danioBase = 50
            vidaBase = 450
            break    
        default:
            console.warn("No has elegido un heroe válido.")
            validacion = false
    }
}

function elegirMonstruo (){
    tipoDeMonstruo = prompt("¿Desea luchar contra un Gobling, Orco o Demonio?")
    switch (tipoDeMonstruo){
        case "gobling":
            danioMonstruoBase = 70
            vidaMonstruoBase = 180
            break
        case "orco":
            danioMonstruoBase = 130
            vidaMonstruoBase = 350
            break
        case "demonio":
            danioMonstruoBase = 110
            vidaMonstruoBase = 450
            break    
        default:
            console.warn("No has elegido un monstruo válido.")
            validacion = false
    }
}

function encuentros (){
    for (let i = 1; i <= 3; i++){
        danioReal = danioBase + enteroRandom(variacionDanio)
        danioMonstruoReal = danioMonstruoBase + enteroRandom(variacionDanio)
        if (vidaMonstruoBase <= 0 || vidaBase <= 0){
            break
        }
        vidaMonstruoBase = vidaMonstruoBase - danioReal // primero ataca el heroe
        console.log(`Ronda ${i}: El ${tipoDeHeroe} ha atacado al ${tipoDeMonstruo}, por ${danioReal} de daño. El monstruo ha perdido ${danioReal} puntos de vida, quedando en ${vidaMonstruoBase} puntos de vida.`)
        if (vidaMonstruoBase <= 0){     // si el monstruo está muerto, no ataca
            break
        }
        
        if (vidaMonstruoBase <= 0 || vidaBase <= 0){
            break
        }
        vidaBase = vidaBase - danioMonstruoReal         // ataca el monstruo
        console.log(`Ronda ${i}: El ${tipoDeMonstruo} ha atacado al ${tipoDeHeroe}, por ${danioMonstruoReal} de daño. El heroe ha perdido ${danioMonstruoReal} puntos de vida, quedando en ${vidaBase} puntos de vida.`)
        
        
        
    }
}

function ganadorBatalla(){
    if (vidaBase === vidaMonstruoBase){
        console.log(`El encuentro finalizó en empate.`)
    }
    else if (vidaMonstruoBase <= 0){
        console.log(`El ${tipoDeMonstruo} ha caído. El ganador del encuentro es el ${tipoDeHeroe}.`)
    }
    else if (vidaBase <= 0){
        console.log(`El ${tipoDeHeroe} ha caído. El ganador del encuentro es el ${tipoDeMonstruo}.`)
    }
    else if (vidaBase > vidaMonstruoBase){
        console.log(`Ningún personaje ha caído. El ganador del encuentro es el ${tipoDeHeroe}. Por haber finalizado con mas vida`)
    }
    else if (vidaMonstruoBase > vidaBase){
        console.log(`Ningún personaje ha caído. El ganador del encuentro es el ${tipoDeMonstruo}. Por haber finalizado con mas vida`)
    }
    
}

elegirHeroe ()
elegirMonstruo ()

if(validacion){
    encuentros ()
    ganadorBatalla ()
} else {
    console.error("❌ OCURRIÓ UN ERROR AL SELECCIONAR LOS PERSONAJES.")
}


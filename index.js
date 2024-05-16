const prompt = require('prompt-sync')()

console.log('Bienvenido al sistema que almacena cierta cantidad de nombres :D!, favor de escribir la palabra "alto" para dejar de escribir los nombres')

let lista = []
let continuar = true

let exists = (lista) => {
    for (let i = 0; i < lista.length; i++) {
        for (let j = 0; j < lista.length; j++) {
            if (lista[i] == lista[j] && i != j) {
                return true;
            }
        }

    }
    return false
}

while (continuar) {

    const name = prompt('Ingresa el nombre : ')

    name.toLowerCase()
    if (name == 'alto') {
        continuar = false
    } else if (name == '' || name == ' ') {
        console.log('este no es un nombre, ¿podrías intentarlo nuevamente?')
    }
    else {
        lista.push(name.toLowerCase())
    }


    if (exists(lista)) {
        console.log('Existen nombres repetidos')
    } else {
        console.log('No existen nombres repetidos')
    }

    let nums = lista.map((element) => element.length)
    let max = Math.max(...nums)
    let min = Math.min(...nums)

    let shortName = (lista) => {
        for (let i = 0; i < lista.length; i++) {
            if (lista[i].length == min) {
                return lista[i]
            }

        }
    }

    let longName = (lista) => {
        for (let i = 0; i < lista.length; i++) {
            if (lista[i].length == max) {
                return lista[i]
            }

        }
    }

    console.log(`El nombre más largo hasta el momento es: ${longName(lista)}`)
    console.log(`El nombre más corto hasta el momento es: ${shortName(lista)}`)
    console.log(`cantidad de nombres ingresados: ${lista.length}`)


}

console.log(`Los elementos de la lista son: `)

lista.forEach((Element) => console.log(Element))






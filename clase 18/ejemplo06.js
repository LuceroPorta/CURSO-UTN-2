


//  const nombre = prompt ('Escribir tu nombre', '')
//  const edad = parseInt(prompt('Escribir tu edad', ''))

// if(edad>=18){
//     console.log(`${nombre} puede conducir`)
// } else if(edad<18){
//     console.log(nombre + 'no puede conducir')
// } else { number.isNaN(edad)} 

//cuando es un numero por las dudas usar el parseint


const nombre = prompt('Escribe tu nombre', '')
const edad = parseInt(prompt('Escribe tu edad', ''))

if (Number.isNaN(edad)) {
    console.log('debes ingresar un numero')
} else if (edad >= 18) {
    console.log(`${nombre} tu que tienes ${edad} puedes conducir`)
} else {
    console.log(`${nombre} NO tienes ${edad} para poder conducir`)
}

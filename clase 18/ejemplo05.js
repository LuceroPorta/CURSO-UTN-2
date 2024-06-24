let now = new Date()
alert(now) // muestra en pantalla la fecha y la hora actuales

var dia = Date()
var hours = getHours()

console.log(hours)

const nombre = prompt('Escribir tu nombre', '')
const today = new Date
const hrs = today.getHours

if (hrs < 12){
    console.log('Buenos días' + nombre + '!!')
    console.log(`Buenos dias ${nombre} !!`)
} else if (hrs >= 12 && hrs <= 19){
    document.write('Buenas tardes' + nombre + "!!")
    console.log(`Buenas tardes ${nombre} !!`)

} else{
    document.write('Buenas noches' + nombre + "!!")
    console.log(`Buenas noches ${nombre} !!`)
}



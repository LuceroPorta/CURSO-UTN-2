const frutas = ['palta', 'sandia', 'manzana', 'banana']

console.log(frutas)

console.log(frutas.sort())

const frutasoredenadas = frutas.sort() // de la A a la Z

console.log(frutasoredenadas)

const frutasordenadasreves = frutas.sort().reverse()

console.log(frutasordenadasreves) // de la z a la a 

const numeros = [3, 6, 7, 9, 220]

console.log(numeros.sort())

const numerosordenados = numeros.sort(function(a, b){
    return a-b
})

console.log(numerosordenados)

const numerosalreves = numeros.sort(function(a, b){
    return b-a
})

console.log(numerosalreves)
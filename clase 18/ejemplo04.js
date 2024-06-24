let a, b, resto;

[a, b] = [10, 20]

console.log(a) // 10
console.log(b) // 20

[a, b, ...resto] = [10, 20, 30, 40, 50]


console.log(resto) // que va a imprimir ? 30, 40, 50


const vocales = ['a', 'e', 'i']

console.log(vocales)

const VocalesCompletas = [...vocales, 'o', 'u']

console.log(VocalesCompletas)
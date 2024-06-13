const alumnos =[{
    nombre:"Lucero",
    edad: "15"

},
{
    nombre:"Lara",
    edad: "10"
    
},
{
    nombre:"Mia",
    edad: "5",
    
},
{
    nombre:"Lucca",
    edad: "8",
    
},
{
    nombre:"Amelia",
    edad: "3",
    
},
{
    nombre:"Leo",
    edad: "9",
    
}
]

console.log(alumnos)

const chicos = alumnos.filter(alumno => alumno.edad > 4)

console.log(chicos)

document.write()
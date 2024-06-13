const datosUsuarios = [{
    nombre: "Lucero",
    password: "1234",
},
{
    nombre: "Mia",
    password: "5678",

},
{
    nombre: "Clara",
    password: "4567",
}]

console.log(datosUsuarios)

const soloPassword = datosUsuarios.map(function(p){
    return p.password
})

console.log(soloPassword)
const empleados = [
    {
        nombre: "Lucero",
        trabajo: "desarrollador"
    },
    {
        nombre: "Luana",
        trabajo: "abogada"
    },
    {
        nombre: "Natalia",
        trabajo: "maestra"
    },
    {
        nombre: "Ana",
        trabajo: "desarrollador"
    },
    {
        nombre: "Melina",
        trabajo: "desarrollador"
    },
    {
        nombre: "Analia",
        trabajo: "maestra"
    },
    {
        nombre: "Zoe",
        trabajo: "veterinaria"
    },

]

console.log(empleados)

const desarrollador = empleados.filter (
    empleado => empleado.trabajo == 'desarrollador'
)

const nodesarrolador = empleados.filter(
    empleado => empleado.trabajo !== 'desarrollador'
)

console.log(desarrollador)
console.log(nodesarrollador)
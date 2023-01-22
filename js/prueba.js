class Mueble {
    constructor (nombre, patas, material, precio){
        this.nombre = nombre
        this.patas = patas
        this.material = material
        this.precio = precio
    }
    mostrarDatos(){
        console.log(`El nombre del mueble es ${this.nombre}, tiene ${this.patas} patas, el material es ${this.material} y el precio es $${this.precio}.`)
    }
}

const listaMuebles = []

const futon = new Mueble("Futon", 4, "pana", 15000)
const sillon = new Mueble("Sillon", 4, "algarrobo", 50000)
const silla = new Mueble("Silla", 4, "pino", 3000)

listaMuebles.push(futon, sillon, silla)
console.log(listaMuebles)


futon.mostrarDatos()
sillon.mostrarDatos()
silla.mostrarDatos()

const buscarMueble = (cosito, nombre) => {return cosito.find(objeto => objeto.nombre === nombre)}


for (let index = 0; index < 3; index++) {
    console.log(buscarMueble(listaMuebles,prompt("Inidicanos el mueble que buscas")))
}
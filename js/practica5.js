// constructor y simulador interactivo de informatica

// procesadores -> ghz, nucleos, hilos = x2 de nucleos
// gpu -> vram, pines
// disco -> capacidad, estado
// ram -> memoria, frecuencia


// la matriz

class Procesador {
    constructor (nombre, ghz, nucleos, hilos, precio) {
        this.nombre = nombre;
        this.ghz = Number(ghz);
        this.nucleos = Number(nucleos);
        this.hilos = Number(hilos);
        this.precio = Number(precio);
    }
}

class Gpu {
    constructor (nombre, vram, pines, precio) {
        this.nombre = nombre;
        this.vram = Number(vram);
        this.pines = Number(pines);
        this.precio = Number(precio);
    }
}

class Disco {
    constructor (nombre, capacidad, estado, precio) {
        this.nombre = nombre;
        this.capacidad = Number(capacidad);
        this.estado = estado.toUpperCase();
        this.precio = Number(precio);
    }
}

class Ram {
    constructor (nombre, memoria, frecuencia, precio) {
        this.nombre = nombre;
        this.memoria = Number(memoria);
        this.frecuencia = Number(frecuencia);
        this.precio = Number(precio);
    }
}

const ryzen5 = new Procesador("Ryzen 5", 3.2, 6, 12, 15000)
const ryzen7 = new Procesador("Ryzen 7", 3.5, 8, 16, 25000)
const ryzen9 = new Procesador("Ryzen 9", 4, 10, 20, 35000)

const rtx2080 = new  Gpu("RTX 2080", 8, 6, 50000)
const rtx3080 = new  Gpu("RTX 3080", 8, 8, 70000)
const rtx4080 = new  Gpu("RTX 4080", 16, 16, 130000)

const sdd1TB = new  Disco("Samsung", 1, "sdd", 3000)
const sdd2TB = new Disco("Samsung", 2, "sdd", 5000)
const hdd2TB = new  Disco("Seagate", 2, "hdd", 3400)

const ramCorsair = new Ram("Corsair", 16, 4333, 5000)
const ramViper = new Ram("Viper", 16, 3200, 2800)

let precioProcesador = Number
let precioGpu = Number
let precioDisco = Number
let precioRam = Number


let sumarCompra = (n1, n2, n3, n4) => {return n1 + n2 + n3 + n4}
let sumarIva = n1 => {return resultado = n1 *= 1.21 }


alert("Hola, somos Mundo Gamer! Queres darte las opciones para que puedas comprar tu nueva PC, vamos a pedirte 4 partes y nosotros completamos el resto por vos.")

// compra procesador y su switch

alert("Vamos con los procesadores primero: \n 1) " + ryzen5.nombre + " que tiene una frecuencia de reloj de " + ryzen5.ghz + "Ghz, tiene " + ryzen5.nucleos + " nucleos, con " + ryzen5.hilos + " hilos y tiene un valor de $" + ryzen5.precio + ". \n 2) " + ryzen7.nombre + " que tiene una frecuencia de reloj de " + ryzen7.ghz + "Ghz, tiene " + ryzen7.nucleos + " nucleos, con " + ryzen7.hilos + " hilos y tiene un valor de $" + ryzen7.precio + ". \n 3) " + ryzen9.nombre + " que tiene una frecuencia de reloj de " + ryzen9.ghz + "Ghz, tiene " + ryzen9.nucleos + " nucleos, con " + ryzen9.hilos + " hilos y tiene un valor de $" + ryzen9.precio + ".")

let compraProcesador = prompt("Indicanos cual procesador elegiste (con números).")

switch (compraProcesador) {
    case "1":
        precioProcesador = ryzen5.precio
        compraProcesador = ryzen5.nombre
        console.log(precioProcesador)
        console.log(compraProcesador)
        break;
    
    case "2":
        precioProcesador = ryzen7.precio
        compraProcesador = ryzen7.nombre
        console.log(precioProcesador)
        console.log(compraProcesador)
        break;

    case "3":
        precioProcesador = ryzen9.precio
        compraProcesador = ryzen9.nombre
        console.log(precioProcesador)
        console.log(compraProcesador)
        break;
    
    default:
        break;
}

alert("Acabas de elegir el " + compraProcesador + ".")

// compra gpu y su switch

alert("Sigamos con la GPU: \n 1) RTX 2080 que tiene una VRAM de " + rtx2080.vram + "GB, con una cantidad de " + rtx2080.pines + "pines y un precio de $" + rtx2080.precio + ". \n 2) RTX 3080 que tiene una VRAM de " + rtx3080.vram + "GB, con una cantidad de " + rtx3080.pines + " pines y un precio de $" + rtx3080.precio + ". \n 3) RTX 4080 que tiene una VRAM de " + rtx4080.vram + "GB, con una cantidad de " + rtx4080.pines + " pines y un precio de $" + rtx4080.precio + ".")

let compraGpu = prompt("Indica cual GPU elegiste (con números).")

switch (compraGpu) {
    case "1":
        precioGpu = rtx2080.precio
        compraGpu = rtx2080.nombre
        console.log(precioGpu)
        console.log(compraGpu)
        break;
    
    case "2":
        precioGpu = rtx3080.precio
        compraGpu = rtx3080.nombre
        console.log(precioGpu)
        console.log(compraGpu)
        break;

    case "3":
        precioGpu = rtx3080.precio
        compraGpu = rtx3080.nombre
        console.log(precioGpu)
        console.log(compraGpu)
        break;

    default:
        break;
}

alert("Acabas de elegir la " + compraGpu + " .")

// compra disco y su switch

alert("Sigamos con el almacenamiento: \n 1) El disco " + sdd1TB.nombre + ", con una capidad de " + sdd1TB.capacidad + "TB, el estado del disco es " + sdd1TB.estado + " y tiene un precio de $" + sdd1TB.precio + ". \n 2) El disco " + sdd2TB.nombre + ", con una capacidad de " + sdd2TB.capacidad + "TB, el estado del disco es " + sdd2TB.estado + " y tiene un precio de $" + sdd2TB.precio + ". \n 3) El disco " + hdd2TB.nombre + ", con una capacidad de " + hdd2TB.capacidad + "TB, el estado del disco es " + hdd2TB.estado + " y tiene un precio de $" + hdd2TB.precio + ".")

let compraDisco = prompt("Indica cual disco elegiste (con números).")
let capacidadDisco = Number

switch (compraDisco) {
    case "1":
        precioDisco = sdd1TB.precio
        compraDisco = sdd1TB.nombre
        capacidadDisco = sdd1TB.capacidad
        console.log(precioDisco)
        console.log(capacidadDisco)
        console.log(compraDisco)        
        break;

    case "2":
        precioDisco = sdd2TB.precio
        compraDisco = sdd2TB.nombre
        capacidadDisco = sdd2TB.capacidad
        console.log(precioDisco)
        console.log(capacidadDisco)
        console.log(compraDisco)
        break;

    case "3":
        precioDisco = hdd2TB.precio
        compraDisco = hdd2TB.nombre
        capacidadDisco = hdd2TB.capacidad
        console.log(precioDisco)
        console.log(capacidadDisco)
        console.log(compraDisco)
        break;

    default:
        break;
}


// compra ram y su switch

alert("Por ultimo elijamos la RAM: \n 1) La memoria RAM " + ramCorsair.nombre + ", con una memoria de " + ramCorsair.memoria + "GB, con una frecuencia de " + ramCorsair.frecuencia + " Mhz y un precio de $" + ramCorsair.precio + ". \n 2) La memoria RAM " + ramViper.nombre + ", con una memoria de " + ramViper.memoria + "GB, con una frecuencia de " + ramViper.frecuencia + "Mhz y un precio de $" + ramViper.precio + ".")

let compraRam = prompt("Indica cual RAM elegiste (con números).")

switch (compraRam) {
    case "1":
        precioRam = ramCorsair.precio
        compraRam = ramCorsair.nombre
        console.log(precioRam)
        console.log(compraRam)
        break;

    case "2":
        precioRam = ramViper.precio
        compraRam = ramViper.nombre
        console.log(precioRam)
        console.log(compraRam)
        break;

    default:
        break;
}

// el final

alert("Ya elegiste todo lo necesario. Ahora te vamos a repasar lo que elegiste, como procesador un " + compraProcesador + ", como GPU una " + compraGpu + ", como disco un " + compraDisco + " de " + capacidadDisco + "TB de capacidad y una memoria RAM " + compraRam + ".")

let precioCompra = Number(sumarCompra(precioProcesador, precioGpu, precioDisco, precioRam))
console.log(precioCompra)

alert("El precio total de tu compra es $" + precioCompra + ". \n Por ultimo nos falta agregarte el IVA al precio.")

let precioFinal = Number(sumarIva(precioCompra))

alert("El precio final con el IVA incluido es de $" + precioFinal + ".")
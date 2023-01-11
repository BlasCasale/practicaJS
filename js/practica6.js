// clase 3 y bucles

// actividad 1

// solicitar un numero y texto que salga por alerta

// let cantidad = prompt("Ingresa la cantidad de repeticiones que queres efectuar")
// let texto = prompt("Ingresa el texto a mostrar")

// for (let index = 0; index < cantidad; index++) {
//     alert(texto)
// }    

// tuve que buscar la solucion, no me salio solo


// actividad 2

// solicitar un numero de repeticiones y una salida por alerta que diga "lado", pero si llega a 4, cortar

// let cantidad = prompt("Indique la cantidad de repeticiones")

// for (let index = 0; index < cantidad; index++) {
//     if (index > 3) {
//         break;
//     }
//     alert("lado")
// }

// otra vez no me salio, practicar el for, si o si


// actividad 3

// let alumnos = ""

// for (let index = 0; index < 10; index++) {
//     alumnos += prompt("Ingresa el nombre de un alumno")+"\n"
// }
// alert(alumnos)

//este era jodidisimo y no lo explicaron asi, ni sabia que se podia


// actividad 4

// let entrada = prompt("Ingresa un nombre")
// let ingresados = ""

// while (entrada != "Voldemort") {
//     ingresados += entrada + "\n"
//     entrada = prompt("Ingresa un nombre")
// }

// alert(ingresados)

// costo mucho de nuevo


// actividad 5

// let entrada = prompt("Ingresa alguno de estos numeros: \n 1) Tomate \n 2) Papa \n 3) Carne \n 4) Pollo")
// let respuesta = "" 

// while (entrada != "ESC") {
//     respuesta += entrada + "\n"
//     entrada = prompt("Ingresa otro numero")
// }
// alert(respuesta)

// este si pude, costo pero se puede, pero no era lo que pedia ajajajaj

// let entrada =  prompt("SELECCIONAR PRODUCTO DE 1 A 4");
// while (entrada != 'ESC') {
//     switch (entrada) {
//         case "1":
//             alert("Tomate");
//             break;
//         case "2":
//             alert("Papa");
//             break;
//         case "3":
//             alert("Carne");
//             break;
//         case "4":
//             alert("Pollo");
//             break;
//         default:
//             alert("Error");
//             break;
//     }
//     entrada = prompt("SELECCIONAR PRODUCTO DE 1 A 4");    <- con esto se puede hacer infinito
// }




// actividad de funciones

// actividad 1

// function entrada () {
//     return prompt("Ingresa un dato")
// }

// function procesamiento(valor) {
//     return "La entrada es " + valor
// }

// function salida (valor) {
//     return alert(valor)
// }

// salida(procesamiento(entrada() ) ) 

// let entrada = valor => {return valor = prompt("Ingresa un dato")}
// let procesamiento = valor => {return "La entrada es " + valor}
// let salida = valor => {return alert(valor)}

// salida(procesamiento(entrada() ) ) 

// falta mucha practica y no mirar la resolucion, pensa pensa 


// actividad 2

// let redondeo = valor => {return Math.round(valor)}

// for (let index = 0; index < 5; index++) {
//     let entrada = prompt("Ingresa un numero")
//     alert(redondeo(entrada))    
// }

// este si que no podia hacerlo por la funcion Math.round


// actividad 3

// let impuesto = valor => {return valor = prompt("Ingresa el valor de tus impuestos") }
// let impuestoIva = valor => {return resultado = valor *= 1.21}
// let total = valor => {return alert("El valor final de tus impuestos es $" + valor)}

// for (let index = 0; index < 5; index++) {
//     total(impuestoIva(impuesto()))
// }

// pude solo, pensar y para es necesario, visteme despacio que estoy apurado


// actividad 4

// cotizador de dolar y pesos 

// let ventaDolar = (n1, n2) => {return resultado = n1 * n2}
// let compraDolar = (n1, n2) => {return resultado = n1 * n2}

// for (let index = 0; index < 3; index++) {
//     let dolaresAComprar = Number(prompt("Ingresa cuantos dolares queres comprar"))
//     console.log(compraDolar(dolaresAComprar, 355))
// }

// for (let index = 0; index < 3; index++) {
//     let dolaresAVender = Number(prompt("Ingresa los dolares que queres vender"))
//     console.log(ventaDolar(dolaresAVender, 350))
// }

// se puede hacer con const valor dolar, switch y asi, pero me salio bien y use for para practicar


// actividad 5

// function validacion(cadena){
//     return cadena != '';
// }
// let entrada =  prompt("INGRESAR CADENA");
// while (entrada != 'ESC') {
//     alert(validacion(entrada));
//     entrada = prompt("INGRESAR CADENA");
// }



// clase 5 class

// actividad 1

// class Tienda {
//     constructor (nombre, dirrecion, duenio, rubro){
//         this.nombre = nombre
//         this.dirrecion = dirrecion
//         this.duenio = duenio
//         this.rubro = rubro
//     }
// }

// const elImpacto = new Tienda ("El Impacto", "Avenida 13", "Carlos Soler", "Supermercado")
// const athari = new Tienda ("Athari", "Calle 54", "Jorge Urruti", "Juegos y consolas")
// const musimundo = new Tienda("Musimundo", "Calle 12", "Musimundo SRL.", "Electrodomesticos")


// actividad 2

// class Tienda {
//     constructor (nombre, dirrecion, duenio, rubro, horario){
//         this.nombre = nombre
//         this.dirrecion = dirrecion
//         this.duenio = duenio
//         this.rubro = rubro
//         }
// }




// const tienda1 = new Tienda(prompt("Ingresa el nombre de la tienda"),prompt("Ingresa la direccion de la tienda"), prompt("Ingresa el dueño de la tienda"), prompt("Ingresa el rubro de la tienda"))
// const tienda2 = new Tienda(prompt("Ingresa el nombre de la tienda"),prompt("Ingresa la direccion de la tienda"), prompt("Ingresa el dueño de la tienda"), prompt("Ingresa el rubro de la tienda"))
// const tienda3 = new Tienda(prompt("Ingresa el nombre de la tienda"),prompt("Ingresa la direccion de la tienda"), prompt("Ingresa el dueño de la tienda"), prompt("Ingresa el rubro de la tienda")) 
// const tienda4 = new Tienda(prompt("Ingresa el nombre de la tienda"),prompt("Ingresa la direccion de la tienda"), prompt("Ingresa el dueño de la tienda"), prompt("Ingresa el rubro de la tienda"))
// const tienda5 = new Tienda(prompt("Ingresa el nombre de la tienda"),prompt("Ingresa la direccion de la tienda"), prompt("Ingresa el dueño de la tienda"), prompt("Ingresa el rubro de la tienda")) 

// console.log(tienda1)
// console.log(tienda2)
// console.log(tienda3)
// console.log(tienda4)
// console.log(tienda5)

// mi solucion no esta mal porque me lo da igual, pero podria estar mejor

// let ingresados = ""

// for (let index = 0; index < 5; index++) {
//     let tienda = new Tienda(prompt("Nombre"),
//                             prompt("Direccion"),
//                             prompt("Dueño"),
//                             prompt("Rubro"))
    
//     ingresados +=   "Tienda: " + tienda.nombre + " " +
//                     "Dirección: " + tienda.dirrecion + " " +
//                     "Dueño: " + tienda.duenio + " " +
//                     "Rubro: " + tienda.rubro    
// }
// alert(ingresados)

// tengo que acostumbrarme a usar for para iterar y pedir en varias instancias lo mismo, escribir 10 veces lo mismo es una mierda, entonces iterar es mas siempre, tengo que aprender a usarlo y concatenar la informacion


// actividad 3 

// class Tienda {
//     constructor (nombre, dirrecion, duenio, rubro){
//         this.nombre = nombre
//         this.dirrecion = dirrecion
//         this.duenio = duenio
//         this.rubro = rubro
//         }

//         estaAbierto(hora) {
//             if (((hora >= 8) && (hora <= 12) || (hora >= 15) && (hora <= 19))){
//                 return true
//             }
//             return false
//         }

// }

// const tienda6 = new Tienda ("33 cents", "La Grande", "Barnie", "Licoreria")

// for (let index = 0; index < 3; index++) {
//     let entrada = Number(prompt("Ingresa una hora"))
//     if (tienda6.estaAbierto(entrada)) {
//         alert("La tienda esta abierta a las " + entrada)
//     }else{
//         alert("La tienda esta cerrada a las " + entrada)
//     }
// }

// no pude resolverlo solo, esta complicado pensar en la cantidad de posibilidades que puede tener un codigo, es mejor probar hasta que tenga 1000 errores, ver la consola y soltar la imaginacion


// actividad 4

// class Tienda {
//     constructor (nombre, dirrecion, duenio, rubro){
//         this.nombre = nombre
//         this.dirrecion = dirrecion
//         this.duenio = duenio
//         this.rubro = rubro
//         }

//     esPropietario(entrada) {
//         if (entrada == this.duenio) {
//             return true
//         }
//         return false
//     }
// }

// const tienda = new Tienda ("El bazar", "Avenida Urracas", "Homero", "Licoreria")
// const tienda1 = new Tienda ("La campania", "Avenida 13", "Nancy", "Panaderia")
// const tienda2 = new Tienda ("El Estudio", "Avenida 13", "Daniel", "Juegos y apuestas")

// for (let index = 0; index < 5; index++) {
//     let entrada = prompt("Ingresa el nombre del dueño")
//     if (tienda.esPropietario(entrada)) {
//         alert(entrada + " es el dueño de la tienda.")
//         break;
//     } else {
//         alert(entrada + " no es el dueño de la tienda.")
//     }
    
// }

// for (let index = 0; index < 5; index++) {
//     let entrada = prompt("Ingresa el nombre del dueño")
//     if (tienda1.esPropietario(entrada)) {
//         alert(entrada + " es el dueño de la tienda.")
//         break;
//     } else {
//         alert(entrada + " no es el dueño de la tienda.")
//     }
// }

// for (let index = 0; index < 5; index++) {
//     let entrada = prompt("Ingresa el nombre del dueño")
//     if (tienda2.esPropietario(entrada)) {
//         alert(entrada + " es el dueño de la tienda.")
//         break;
//     } else {
//         alert(entrada + " no es el dueño")
//     }
// }

// dificil pero no imposible, pensar y pensar y pensar, nada mas, poco a poco, pero mejor, pude solo


// class Tienda{
//     constructor(nombre, direccion, propietario, rubro){
//         this.nombre = nombre;
//         this.direccion = direccion;
//         this.propietario = propietario;
//         this.rubro = rubro;
//     }
//       esPropietario(nombre){
//         return this.propietario == nombre;
//     }
// }
// const tienda1 = new Tienda("Kwik-E-Mart", "Park 123", "Apu", "Almacen");
// const tienda2 = new Tienda("Edna's Edibles", "PEREZ 323", "Edna Krabappel", "Panaderia");
// const tienda3 = new Tienda("Springfield Mall", "Hall 231", "Mr. Burns", "Shopping");
// for (let index = 0; index < 5; index++) {
//     let entrada = prompt("INGRESAR NOMBRE DE PROPITARIO");
//     if (tienda1.esPropietario(entrada)){
//         alert(entrada + " ES PROPIETARIO DE LA TIENDA " + tienda1.nombre);
//     }
//     if (tienda2.esPropietario(entrada)){
//         alert(entrada + " ES PROPIETARIO DE LA TIENDA " + tienda2.nombre);
//     }
//     if (tienda3.esPropietario(entrada)){
//         alert(entrada + " ES PROPIETARIO DE LA TIENDA " + tienda3.nombre);
//     }
// }

// solucion mejor hecha que la mia


// actividad 5

// class Cliente {
//     constructor(nombre, presupuesto, tarjetaDescuento, celular){
//         this.nombre = nombre
//         this.presupuesto = parseFloat(presupuesto)
//         this.tarjetaDescuento = tarjetaDescuento
//         this.celular = Number(celular)
//     }
//     transferirDinero(valor){
//         if ((this.presupuesto > 0) && (valor < this.presupuesto)) {
//             this.presupuesto -= valor
//             return valor
//         } else {
//             return 0
//         }
//     }
// }

// const cliente = new Cliente("blas", 10000, true, 2214097316)
// const cliente1 = new Cliente("agostina", 15000, true, 2216337982)
// const cliente2 = new Cliente("nicolas", 20000, false, 2215963483)

// for (let index = 0; index < 5; index++) {
//     let entrada = parseFloat(prompt("Ingresa tus gastos"))
//     if (cliente.transferirDinero(entrada)) {
//         alert(cliente.nombre + " te puede pagar " + entrada)
//     }
//     if (cliente1.transferirDinero(entrada)) {
//         alert(cliente1.nombre + " te puede pagar " + entrada)
//     }
//     if (cliente2.transferirDinero(entrada)) {
//         alert(cliente2.nombre + " te puede pagar " + entrada)
//     }
// }

// pude hacerlo hasta ahi, me salio pero medio pelo, esto seria la definitiva
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



// array y listas

// actividad 1

// const equipo = ["Homero", "Moe", "Apu", "Burns"]

// for (let index = 0; index < equipo.length; index++) {
//     const elemento = equipo
//     alert("1)" + equipo[0] + "\n 2)" + equipo[1] + "\n 3)" + equipo[2] + "\n 4)" +  equipo[3])
//     console.log(elemento)
// }

// me tiro pocision pero no me tiraba el lugar, es asi

// solucion

// const equipo = ['HOMERO', 'APU', 'MOE', 'MR. BURNS'];
// for (let index = 0; index < equipo.length; index++) {
//     alert("POSICION " + index + " JUGADOR " + equipo[index]);
// }



// const arquero = ["Dibu", "Rulli", "Armani"]
// const defensa = ["Pezzella", "Montiel", "Foyth", "Acuña", "Tagliafico", "Otamendi", "Romero", "Martinez"]
// const mediocampista = ["Rodriguez", "Palacios", "Almada", "Molina", "Gomez", "Mac Allister", "Paredes", "De Paul", "Fernandez"]
// const delantero = ["Messi", "Alvarez", "Di Maria", "Martinez", "Correa", "Dybala"]

// const jugadoresAlMundial = arquero.concat(defensa, mediocampista, delantero)

// for (let index = 0; index < jugadoresAlMundial.length; index++) {
//     alert("Jugador N°" + index + " y el jugador es " + jugadoresAlMundial[index])
// }


// actividad 2

// const equipo = []
// let jugadores = prompt("Ingresa el nombre de los jugadores")


// while (jugadores != "ESC") {
//     equipo.push(jugadores)
//     jugadores = prompt("Ingresa el nombre de los jugadores")
// }

// for (let index = 0; index < equipo.length; index++) {
//     alert("Jugador N°" + index + " y el nombre del jugador es " + equipo[index])   
// }

// con un pequeño retoque, quedo bien, tenia que poner el prompt de jugadores por fuera y adentro primero pushear y despues preguntar de nuevo

// mucho mejor por ahora, hay que usar la cabeza 


// activdidad 3

// class Jugador {
//     constructor(nombre, numeroCamiseta, edad, lesionado){
//         this.nombre = nombre
//         this.numeroCamiseta = Number(numeroCamiseta)
//         this.edad = Number(edad)
//         this.lesionado = lesionado
//     }
// }

// const equipo = []
// equipo.push(new Jugador ("Messi", 10, 33, false))
// equipo.push(new Jugador ("Alvarez", 9, 22, false))
// equipo.push(new Jugador ("Di Maria", 11, 32, true))
// equipo.push(new Jugador ("Otamendi", 19, 33, false))
// equipo.push(new Jugador ("Dibu", 23, 28, false))
// console.log(equipo)


// asi recorro el array y para que me diga sus nombres es asi

// const equipo = [jugador1.nombre, jugador2.nombre, jugador3.nombre, jugador4.nombre, jugador5.nombre]

// for (let index = 0; index < equipo.length; index++) {
//     alert("Jugador N°" + index + " y el jugador es " +  equipo[index])
// }

// voy mejor, tranqui y pensando lo mas facil


// actividad 4

// class Jugador {
//     constructor(nombre, numeroCamiseta, edad, lesionado){
//         this.nombre = nombre
//         this.numeroCamiseta = numeroCamiseta
//         this.edad = edad
//         this.lesionado = lesionado
//     }

// }

// const equipo = []
// equipo.push(new Jugador ("Messi", 10, 33, false))
// equipo.push(new Jugador ("Alvarez", 9, 22, false))
// equipo.push(new Jugador ("Di Maria", 11, 32, true))
// equipo.push(new Jugador ("Otamendi", 19, 33, false))
// equipo.push(new Jugador ("Dibu", 23, 28, false))
// console.log(equipo)

// let buscarJugador = (equipo, jugador) => {return equipo.find(objeto => objeto.nombre === jugador)}

// for (let index = 0; index < 3; index++) {
//     let busqueda = buscarJugador(equipo, prompt("Ingresa el nombre de un jugador"))
//     if (busqueda != undefined) {
//         alert("Jugador " + busqueda.nombre + " su numero es la " + busqueda.numeroCamiseta + " y su edad es " + busqueda.edad )
//     }else{
//         alert("No existe ese jugador")
//     }
// }

// imposible hacerlo porque no conozco la propiedad .find , asi que mire la solucion, poco a poco va mejor
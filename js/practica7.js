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


// actividad 5


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

// const filtroJugador = (equipo, edad) => {return equipo.filter((numero) => numero.edad === Number(edad))}

// const listaJugadores = (jugadores) => {
//     let lista = ""
//     for (const jugador of jugadores) {
//         lista += "El jugador es " + jugador.nombre + ", la camiseta es la N°" + jugador.numeroCamiseta + " y su edad es " + jugador.edad + "\n"
//     }
//     return lista
// }

// for (let index = 0; index < 5; index++) {
//     let filtro = filtroJugador(equipo, prompt("ingresa la edad"))
//     if (filtro.length > 0) {
//         alert(listaJugadores(filtro))
//     }else{
//         alert("no")
//     }
// }

// bien hecha la funcion pero jamas me hubiese imaginado que tenia que hacer una funcion lista para poder almacenar todo, dificilisimo la verdad, hay que tener la mente muy abiertaaaaaaaa
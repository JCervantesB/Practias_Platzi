// Julio Cervantes, Curso JavaScript Platzi
// Este es mi primer reto de comprobaciones con Switch.
// Este es un pequeño juego del "Piedra, Papel o Tijera", donde el navegador te solicita elejir de las 3 opciones
// Se emplea una variable para "cpu" donde mediante la función Math.random() https://www.w3schools.com/js/js_random.asp elige una de las 3 posibles opciones
// El sistema compara tu opcion, con la de la cpu y determina un ganador.


var pregunta = prompt("Ingresa tu opción: piedra, papel o tijera "); 
var usuario = pregunta.toLowerCase();
var opciones = ["piedra", "papel", "tijera"];
var cpu = opciones[Math.floor(Math.random() * 3)];

switch (true){
    case (usuario == cpu):
        console.log("Es un empate la cpu tambien eligio" + cpu)
    break;
    case (usuario === 'papel' && cpu === 'piedra'):
        console.log("Ganaste! la cpu eligio: " + cpu)
    break;
    case (usuario === 'piedra' && cpu === 'tijera'):
        console.log("Ganaste! la cpu eligio: " + cpu)
    break;
    case (usuario === 'tijera' && cpu === 'papel'):
        console.log("Ganaste! la cpu eligio: " + cpu)
    break;   
    default:
        console.log("Perdiste! la cpu eligio: " + cpu)
}

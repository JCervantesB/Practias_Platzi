 // Juego piedra, papel o tijeras.
 
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

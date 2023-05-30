/*Tareas

Tarea 1

Escribe un script que le pida al usuario que ingrese un número.Muestra el mensaje "¡Bingo!"
cuando el número sea mayor que 90 pero menor que 110, de lo contrario muestra el mensaje: "¡Fallaste!".Utiliza la sentencia
if .*/

let num1 = window.prompt("ingrese un número");

if (num1 > 90 && num1 < 110) {
    window.alert("¡Bingo!");
} else {
    window.alert("¡Fallaste!");
}


/*
Tarea 2

Reescribe el código anterior, reemplazando el
if con un operador condicional ternario.
*/


let num1 = window.prompt("ingrese un número");

num1 > 90 && num1 < 110 ? window.alert("¡Bingo!") : window.alert("¡Fallaste!");


/*
Tarea 3
Escribe una aplicación de calculadora simple.Solicite al usuario la siguiente entrada, uno por uno: dos números y un carácter que representa una operación matemática de "+", "-", " *", o "/".Si la entrada del usuario es válida, calcula el resultado y muéstralo al usuario.Si la entrada del usuario no es válida, muestra un mensaje que informa al usuario que se ha producido un error.Recuerda que el valor devuelto por la función prompt es del tipo cadena.Puedes usar el método Number.isNaN para verificar si se obtiene el número correcto después de la conversión.Por ejemplo, llamar a Number.isNaN(10) devolverá false, mientras que Number.isNaN(NaN) devolverá true.
*/

let num_1 = window.prompt("operacion matematica: ingrese un número1");
let num_2 = window.prompt("operacion matematica: ingrese un número2");
let op = window.prompt("operacion matematica: ingrese tipo operacion: +,-,*,/");
let resultado = 0;

num_1 = Number(num_1);
num_2 = Number(num_2);

if (!Number.isNaN(num_1) && !Number.isNaN(num_2)) {

    switch (op) {
        case '+':
            resultado = num_1 + num_2;
            break;
        case '-':
            resultado = num_1 - num_2;
            break;
        case '*':
            resultado = num_1 * num_2;
            break;
        case '/':
            resultado = num_1 / num_2;
            break;
        default:
            resultado = null;
            break;
    }

    resultado == null ? window.alert(`operador aritmentico no valido: ${op}`) : window.alert(`Resultado: ${resultado}`);

} else {
    window.alert('se ha producido un error: solo numeros permitidos');

}
/*
Tareas

Tarea 1

Escribe un fragmento de código que escriba números del 100 al 0 en la consola, pero en pasos de 10 en 10;
entonces sería 100, 90, 80...etc.
*/

for (let index = 100; index >= 0; index -= 10) {
    console.log('Numero:', index);
}





/*
Tarea 2

Modifica el programa anterior para que le pida al usuario el primer y último número a usar en lugar de 100 y 0(pista: use el cuadro de diálogo prompt).Comprueba si los valores introducidos son correctos(que el valor inicial sea mayor que el valor final).
*/

let n1 = prompt('ingresa 1er numero');
let nu = prompt('ingresa ultimo numero');

n1 = Number(n1);
nu = Number(nu);

if (n1 > nu) {

    for (n1; n1 >= nu; n1 -= 10) {
        console.log('Numero:', n1);
    }

} else {
    console.log('Numero no valido');
}



/*



Tarea 3

Hay diez números diferentes en este arreglo:

let numbers = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];

Escribe un programa que primero escriba todos estos números en la consola, luego solo los que son pares(pista: el residuo de dividir un número par entre 2 es igual a 0), luego solo los que son mayores que 10 y al mismo tiempo menor que 60.

*/

let numbers = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];

for (const dato of numbers) {
    console.log('numero:', dato);
}

for (const dato of numbers) {
    if (dato % 2 == 0) {
        console.log('numero Par:', dato);
    }
}


for (const dato of numbers) {
    if (dato > 10 && dato < 60) {
        console.log('numero mayor que 10 y menor que 60:', dato);
    }
}



/*
Tarea 4

Escribe un programa utilizando un bucle que le pida al usuario el nombre de una película(primer cuadro de dialogo) y su calificación de www.imdb.com(segundo cuadro de dialogo).El programa te permitirá ingresar tantas películas como desees en el arreglo de películas.Cada elemento del arreglo será un objeto, que constará de dos campos: título e imdb.La entrada se completa si el usuario presiona Cancelar en el cuadro de diálogo.Luego, el programa debe imprimir primero en la consola todas las películas que tienen una calificación inferior a 7, luego aquellas cuya calificación sea mayor o igual a 7. Escribe el nombre de la película y su calificación uno al lado del otro, por ejemplo: < /p>
Perdido en la Selva(7.7)
*/

let peliculas = [];

let continuar = false;

do {
    let nombrePelicula = prompt('nombre de una película');
    let calificacion = prompt('calificación de www.imdb.com');

    peliculas.push({
        titulo: nombrePelicula,
        imdb: calificacion,
    });

    continuar = confirm('¿desea continuar?');

} while (continuar == true);



console.log('calificación inferior a 7');


for (const dato of peliculas) {
    if (dato.imdb < 7) {
        console.log(`${dato.titulo} (${dato.imdb})`);
    }
}


console.log('calificación mayor o igual a 7');

for (const dato of peliculas) {
    if (dato.imdb >= 7) {
        console.log(`${dato.titulo} (${dato.imdb})`);
    }
}



/*
Tarea 5

El contenido del objeto que describe la posición del barco llamado "Mareno"
se muestra en la consola.

LATITUD - > 40.07288
LONGITUD - > 154.48535
CURSO - > 285.6
VELOCIDAD - > 14.0
OMI - > 9175717
NOMBRE - > MARENO
El código que se presenta a continuación se usa para esto.Completa el programa declarando el objeto que falta en lugar de los tres puntos.


let vessel = ...

for(let key in vessel) {
    console.log(`${key} -> ${vessel[key]}`);
}
*/


let vessel = {
    LATITUD: 40.07288,
    LONGITUD: 154.48535,
    CURSO: 285.6,
    VELOCIDAD: 14.0,
    OMI: 9175717,
    NOMBRE: "MARENO"
}

for (let key in vessel) {
    console.log(`${key} -> ${vessel[key]}`);
}




/*

Tarea 6

Modifica el programa de calculadora que creaste en el Módulo 4, Sección 2, de tal manera que funcione en el bucle hasta que el usuario ingrese S en cualquiera de los cuadros de dialogo.

*/


let num_1, num_2, op, ctrl;


do {

    num_1 = window.prompt("operacion matematica: ingrese un número1");
    num_2 = window.prompt("operacion matematica: ingrese un número2");
    op = window.prompt("operacion matematica: ingrese tipo operacion: +,-,*,/");
    let resultado = 0;

    ctrl = (num_1 != "S" && num_2 != "S") == true ? true : false;

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

} while (ctrl == true);
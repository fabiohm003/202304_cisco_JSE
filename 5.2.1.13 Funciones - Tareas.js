/*
Tareas 1

Los arreglos en JavaScript tienen disponible un método sort que, como puedes suponer, te permite ordenar sus elementos. Este método toma como argumento una función que comparará dos elementos del arreglo. La función debe devolver cero si consideramos que los argumentos son iguales, un valor menor que cero si consideramos que el primero es menor que el segundo y un valor mayor que cero en caso contrario. Mira el ejemplo:
*/

/*
let numbers = [50, 10, 40, 30, 20];

function compareNumbers(a, b) {
    let retVal = 0;
    if (a < b) {
        retVal = -1;
    } else if (a > b) {
        retVal = 1;
    }
    return retVal;
}
let sorted = numbers.sort(compareNumbers);
console.log(sorted); // [10, 20, 30, 40, 50]
*/

/*
A. Intenta modificar el código anterior para que sea lo más corto posible. Sugerencias:
Usar una función anónima.
Usar una función arrow o flecha
Considera omitir la sentencia if.
*/



let numbers = [50, 10, 40, 30, 20];
let sorted = numbers.sort((a, b) => a - b);
console.log(sorted); // [10, 20, 30, 40, 50]



/*
B. Luego modifica la función para que los elementos se ordenen en orden descendente, no en orden ascendente como en el ejemplo.
*/

let numbers = [50, 10, 40, 30, 20];

function compareNumbers(a, b) {
    let retVal = 0;
    if (a < b) {
        retVal = 1;
    } else if (a > b) {
        retVal = -1;
    }
    console.log(a, b, retVal);
    return retVal;
}
let sorted = numbers.sort(compareNumbers);
console.log(sorted); // [10, 20, 30, 40, 50]



let numbers = [50, 10, 40, 30, 20];
let sorted = numbers.sort((a, b) => b - a);
console.log(sorted); // [10, 20, 30, 40, 50]





/*
Tarea 2

Escribe tres funciones con los nombres add, sub y mult, que tomarán dos argumentos numéricos. Las funciones son para verificar si los argumentos dados son enteros (emplea Number.isInteger). Si no, devuelven NaN, de lo contrario, devuelven el resultado de la suma, la resta o la multiplicación, respectivamente. Las funciones deben declararse mediante una instrucción de función.

Ejemplo de su uso y resultados esperados:

console.log(add(12, 10)); // -> 22
console.log(mult(12, 10.1)); // -> NaN
*/



function add(num1, num2) {

    if (Number.isInteger(num1) && Number.isInteger(num2)) {
        return Number(num1) + Number(num2);
    } else {
        return NaN;
    }
}


function sub(num1, num2) {

    if (Number.isInteger(num1) && Number.isInteger(num2)) {
        return Number(num1) - Number(num2);
    } else {
        return NaN;
    }
}


function mult(num1, num2) {

    if (Number.isInteger(num1) && Number.isInteger(num2)) {
        return Number(num1) * Number(num2);
    } else {
        return NaN;
    }
}


console.log(add(12, 10)); // -> 22
console.log(mult(12, 10.1)); // -> NaN


/*
Tarea 3

Reescribe las funciones de la tarea anterior usando una expresión de función arrow o flecha, tratando de escribirlas en la forma más corta posible.

Ejemplo de su uso y resultados esperados:

console.log(sub(12, 10)); // -> 2
console.log(mult(10, 10.1)); // -> NaN
*/



let add = (num1, num2) => {

    if (Number.isInteger(num1) && Number.isInteger(num2)) {
        return Number(num1) + Number(num2);
    } else {
        return NaN;
    }
}


let sub = (num1, num2) => {

    if (Number.isInteger(num1) && Number.isInteger(num2)) {
        return Number(num1) - Number(num2);
    } else {
        return NaN;
    }
}


let mult = (num1, num2) => {

    if (Number.isInteger(num1) && Number.isInteger(num2)) {
        return Number(num1) * Number(num2);
    } else {
        return NaN;
    }
}


console.log(add(12, 10)); // -> 22
console.log(mult(12, 10.1)); // -> NaN





/*
Tarea 4

Escriba una función action que tomará la función callback como su primer argumento y los otros dos argumentos como números. Como función callback, podrá pasar una de las tres funciones de la tarea anterior. La función action llamará a la función callback que se le pasó y devolverá el resultado obtenido. La función callback aceptará el segundo y el tercer argumento de la invocación.

Ejemplo de su uso y resultados esperados:

console.log(action(add, 12, 10)); // -> 22
console.log(action(sub, 12, 10)); // -> 2
console.log(action(mult, 10, 10.1)); // -> NaN
*/


let add = (num1, num2) => {

    if (Number.isInteger(num1) && Number.isInteger(num2)) {
        return Number(num1) + Number(num2);
    } else {
        return NaN;
    }
}


let sub = (num1, num2) => {

    if (Number.isInteger(num1) && Number.isInteger(num2)) {
        return Number(num1) - Number(num2);
    } else {
        return NaN;
    }
}


let mult = (num1, num2) => {

    if (Number.isInteger(num1) && Number.isInteger(num2)) {
        return Number(num1) * Number(num2);
    } else {
        return NaN;
    }
}


function action(func, num1, num2) {
    return func(num1, num2);
}



console.log(action(add, 12, 10)); // -> 22
console.log(action(sub, 12, 10)); // -> 2
console.log(action(mult, 10, 10.1)); // -> NaN




/*
Tarea 5

Escribe un programa que imprima (en la consola) números enteros consecutivos 10 veces, en intervalos de dos segundos (comienza con el número 1). Utiliza las funciones setInterval, clearInterval y setTimeout.

Ejemplo de su uso y resultados esperados:

1
2
3
4
5
6
7
8
9
10
*/



let sec = 0;

function mostrarNumero() {
    sec++;
    console.log('paso numero:', sec);
}


let outer = function(llamadoFuncion) {
    let idTimer = setInterval(llamadoFuncion, 1000); /*ms*/

    setTimeout(function() {
        clearInterval(idTimer);
    }, 10000);
}



outer(mostrarNumero);






/*
Tarea 6

Escribe una función que calcule el n-ésimo elemento de la sucesión de Fibonacci. Esta secuencia se define mediante una fórmula:


Formula Matemática


Entonces, cada elemento de la secuencia (excepto los dos primeros) es la suma de los dos anteriores. Por ejemplo: F1 = 1, F2 = F1 + F0 = 1, F3 = F2 + F1 = 2 y F6 = F5 + F4 = 8. La función debe usar recursividad. En la definición, usa una expresión de función (almacena una función anónima en una variable).

Ejemplo de su uso y resultados esperados:

console.log(fibbRec(4)); // -> 3
console.log(fibbRec(7)); // -> 13

*/



/*
function fibbRec(iteracion, inicio = 1, actual = 1, anterior = 0, acumulado = 0) {
    //console.log(limite, inicio, acumulado);

    if (iteracion <= 0) {
        return acumulado;
    } else {

        if (inicio == 1) {
            acumulado = 1;
        } else {
            acumulado = actual + anterior;
            anterior = actual;
            actual = acumulado;
        }

        //console.log(iteracion, inicio, actual, anterior, acumulado);
        return fibbRec(--iteracion, ++inicio, actual, anterior, acumulado);

    }
}

*/


function fibbRec(iteracion, inicio = 1, actual = 0, anterior = 0) {
    //console.log(limite, inicio, acumulado);
    let acumulado = actual;

    if (iteracion <= 0) {
        return acumulado;
    } else {

        if (inicio == 1) {
            acumulado = 1;
        } else {
            acumulado = actual + anterior;
        }

        //console.log(iteracion, inicio, actual, anterior, acumulado);
        return fibbRec(--iteracion, ++inicio, acumulado, actual);

    }
}

console.log(fibbRec(7)); // -> 13
console.log(fibbRec(4)); // -> 3


/*
let fibbRec = function (n) {
    let retVal = 0;
    if (n != 0) {
        if (n === 1) {
            retVal = 1;
        } else {
            retVal = fibbRec(n - 1) + fibbRec(n - 2);
        }
    }
    return retVal;
}

console.log(fibbRec(7)); // -> 13
console.log(fibbRec(4)); // -> 3

*/



/*
Tarea 7

Reescribe la función de la Tarea 6 usando una expresión de función arrow o flecha, pero intenta acortar tu código tanto como sea posible (emplea operadores condicionales y trata de no usar variables adicionales que no sean el parámetro n).
*/


let fibb = n => n == 0 ? 0 : (n == 1 ? 1 : fibb(n - 1) + fibb(n - 2));

console.log(fibb(7)); // -> 13
console.log(fibb(4)); // -> 3


/*
Tarea 8

Escribe una versión iterativa de la función de la Tarea 6 (usa el bucle for). Declara la función usando una instrucción de función.
*/





function fibbIter(n) {
    let a = 0,
        b = 1;
    for (let i = 2; i <= n; i++) {
        let c = a;
        a = b;
        b += c;
    }
    return b;
}


console.log(fibbIter(7)); // -> 13
console.log(fibbIter(4)); // -> 3
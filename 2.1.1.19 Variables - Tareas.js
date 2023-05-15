/*
Juguemos a la floristería. Declara seis variables, recordando nombrarlas según su propósito:

el precio de una sola rosa (8) y el número de rosas que tienes (70)
el precio de un solo lirio (10) y el número de lirios que tienes (50)
el precio de un solo tulipán (2) y la cantidad de tulipanes que tienes (120)
Ahora declara tres variables, una para cada una de las rosas, lirios y tulipanes que tienes, en las que colocas su precio total. Inserta los valores correspondientes en las variables utilizando las variables declaradas en el paso anterior. Finalmente, declara una variable en la que almacenes el precio de todas tus flores (nuevamente, usa las variables anteriores para la inicialización). Muestra toda la información del inventario en la consola de la siguiente forma:
*/


let vlr_rosa = 8;
let cant_rosa = 70;

let vlr_lirio = 10;
let cant_lirio = 50;

let vlr_tulip = 2;
let cant_tulip = 120;

let total_rosa = vlr_rosa * cant_rosa;
let total_lirio = vlr_lirio * cant_lirio;
let total_tulip = vlr_tulip * cant_tulip;

let total_flores = total_rosa + total_lirio + total_tulip;


console.log("Rosa: precio unitario: " + vlr_rosa + " , cantidad: " + cant_rosa + " , valor: " + total_rosa);

console.log("Lirio: precio unitario: " + vlr_lirio + " , cantidad: " + cant_lirio + " , valor: " + total_lirio);

console.log("Tulipán: precio unitario: " + vlr_tulip + " , cantidad: " + cant_tulip + " , valor: " + total_tulip);

console.log("Total:  " + total_flores);



/*
Tarea 2

Modifica el código del ejemplo anterior.Supón que los precios de las flores serán constantes(no cambiarán).
Declara e inicializa las variables restantes de la misma manera que en el ejemplo anterior.Muestra toda la información recopilada en la consola.Ahora disminuye el número de rosas en 20 y el de lirios en 30. Vuelve a mostrar toda la información recopilada en la consola.

Solución
*/




const vlr_rosa = 8;
let cant_rosa = 70;

const vlr_lirio = 10;
let cant_lirio = 50;

const vlr_tulip = 2;
let cant_tulip = 120;

let total_rosa = vlr_rosa * cant_rosa;
let total_lirio = vlr_lirio * cant_lirio;
let total_tulip = vlr_tulip * cant_tulip;

let total_flores = total_rosa + total_lirio + total_tulip;


console.log("Rosa: precio unitario: " + vlr_rosa + " , cantidad: " + cant_rosa + " , valor: " + total_rosa);

console.log("Lirio: precio unitario: " + vlr_lirio + " , cantidad: " + cant_lirio + " , valor: " + total_lirio);

console.log("Tulipán: precio unitario: " + vlr_tulip + " , cantidad: " + cant_tulip + " , valor: " + total_tulip);

console.log("Total:  " + total_flores);



cant_rosa = cant_rosa - 20;

cant_lirio = cant_lirio - 30;

total_rosa = vlr_rosa * cant_rosa;
total_lirio = vlr_lirio * cant_lirio;
total_tulip = vlr_tulip * cant_tulip;

total_flores = total_rosa + total_lirio + total_tulip;



console.log("Rosa: precio unitario: " + vlr_rosa + " , cantidad: " + cant_rosa + " , valor: " + total_rosa);

console.log("Lirio: precio unitario: " + vlr_lirio + " , cantidad: " + cant_lirio + " , valor: " + total_lirio);

console.log("Tulipán: precio unitario: " + vlr_tulip + " , cantidad: " + cant_tulip + " , valor: " + total_tulip);

console.log("Total:  " + total_flores);
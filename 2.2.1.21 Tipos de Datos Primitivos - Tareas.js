//Datos Primitivos

//Escribe un fragmento de código que creará variables y las inicializará con valores Boolean, Number, BigInt, String y tipos undefined utilizando (siempre que sea posible) literales y funciones constructoras.

let bool = Boolean();
let num = Number();
let bint = BigInt(0);
let str = String();
let und;

//Imprime todos los valores y todos los tipos de esos valores usando console.log. Intenta usar la interpolación de cadenas para mostrar el valor y el tipo al mismo tiempo con una sola llamada a console.log, por ejemplo, en el siguiente formato: 1000 [número].

console.log(typeof bool, `${bool}`);
console.log(typeof num, `${num}`);
console.log(typeof bint, `${bint}`);
console.log(typeof str, `${str}`);
console.log(typeof und, `${und}`);


//Realiza una cadena de conversiones: crea un Boolean a partir de un BigInt creado a partir de un Number que se creó a partir de un String. Comienza con el valor "1234". ¿Es posible?

str = "1234";
num = Number(str); 
bint = BigInt(num);
bool = Boolean(bint);

console.log(typeof str, `${str}`);
console.log(typeof num, `${num}`);
console.log(typeof bint, `${bint}`);
console.log(typeof bool, `${bool}`);

//Intenta agregar dos valores del mismo tipo y verifica el tipo de resultado. Pruébalo para todos los tipos de datos primitivos.

str = "3" + "5";
num = 3 + 5; 
bint = 3n + 5n;
bool = true + false;

console.log(typeof str, `${str}`);
console.log(typeof num, `${num}`);
console.log(typeof bint, `${bint}`);
console.log(typeof bool, `${bool}`);



//Intenta sumar dos valores de diferentes tipos y verifica los resultados.


//let bool = Boolean();
//let num = Number();
//let bint = BigInt(0);
//let str = String();

str = 7 + "6";
num = 7 + "6"; 
bint = 3n + "5n";
bool = true + false;

console.log(typeof str, `${str}`);
console.log(typeof num, `${num}`);
console.log(typeof bint, `${bint}`);
console.log(typeof bool, `${bool}`);


//Intenta modificar la línea const str1 = 42 + "1"; para obtener el resultado 43 (sin eliminar las comillas alrededor del 1)
const str1 = 42 + Number("1");
console.log(typeof str1, `${str1}`);


const str1 = 42 + + "1";
console.log(typeof str1, `${str1}`);


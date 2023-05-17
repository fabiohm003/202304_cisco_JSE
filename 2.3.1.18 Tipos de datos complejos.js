//Tareas
//Objetos

/*
Crea un objeto que describa un boleto de tren y guárdalo en la variable ticket. El objeto debe tener tres campos:

estación inicial (el nombre clave es 'from', y como valor, proporciona el nombre de la estación más cercana en tu área)
estación final (el nombre clave es 'to', y como valor, dar cualquier otra estación dentro de 100 km)
el precio del boleto (el nombre clave es 'price', y como valor, proporciona la cantidad que te gustaría pagar por este boleto)
El objeto debe crearse usando llaves {}, en los que todos los campos se enumerarán inmediatamente. Luego muestra los valores de todos los campos del ticket en la consola.
*/

let ticket = {
    from: "estacion mosquera",
    to: "estacion bogota",
    price: 15550
};

console.log(ticket.from, ticket.to, ticket.price);


//Declara un objeto vacío y guárdalo en la variable person. Usando la notación de punto, agrega los campos firstName y lastName al objeto ingresando tus datos como valores. Intenta mostrar los campos individuales en la consola.


let person = [];

person.firstName = "fabio";
person.lastName = "H. Mancipe";


console.log(person.firstName, person.lastName);
console.log(person);


//Arreglos
/*
Estamos creando una pequeña biblioteca de libros sobre programación en JavaScript. Tenemos tres libros y queremos preparar una lista de ellos. Almacenaremos tres datos de cada libro: el título, el autor y el número de páginas:

Speaking JavaScript, Axel Rauschmayer, 460.
Programming JavaScript Applications, Eric Elliott, 254.
Understanding ECMAScript 6, Nicholas C. Zakas, 352.

Crea un arreglo de tres objetos que representen los libros. Cada objeto debe tener las siguientes propiedades: título, autor, páginas.
*/

let libros = [{
        titulo: "Speaking JavaScript",
        autor: "Axel Rauschmayer",
        paginas: 460,
    },

    {
        titulo: "Programming JavaScript Applications",
        autor: "Eric Elliott",
        paginas: 254,
    },

    {
        titulo: "Understanding ECMAScript 6",
        autor: "Nicholas C. Zakas",
        paginas: 352,
    },
];

console.log(libros);


//Hemos agregado un nuevo libro a nuestra colección: Learning JavaScript Design Patterns, por Addy Osmani, 254 páginas. Usa el método apropiado para adjuntar el libro al final del arreglo. 


libros.push({
    titulo: "Learning JavaScript Design Patterns",
    autor: "Addy Osmani",
    paginas: 254,
});

console.log(libros);

//Muestra la longitud del arreglo y, a su vez, todos los nombres de los libros en la colección.

console.log('longitud:', libros.length);

for (const dato of libros) {
    console.log('nombres de libros:', dato.titulo);
}


//Utiliza el comando slice para copiar los dos últimos libros al nuevo arreglo.

let arreglo1 = libros.slice(-2);

console.log('arreglo1:', arreglo1);

//El primer libro de la colección se pierde en circunstancias inexplicables. Ya has aceptado la pérdida, así que ahora elimínalo del arreglo. ¿Cuál método usarás para este propósito? 

console.log(libros);
libros.shift();
console.log(libros);

//Muestra la longitud del arreglo y todos los nombres de los libros de la colección a su vez.

console.log('NUEVA longitud:', libros.length);

for (const dato of libros) {
    console.log('nombres de libros post shift:', dato.titulo);
}


//Muestra la suma de las páginas de todos los libros de la colección.

let sum_pag = 0;
for (const dato of libros) {
    sum_pag += dato.paginas;
}

console.log('total paginas:', sum_pag);
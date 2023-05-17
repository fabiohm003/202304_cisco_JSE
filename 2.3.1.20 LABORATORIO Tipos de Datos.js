/*
Escenario
¿Recuerdas la lista de contactos que se creó mientras realizabas la tarea del laboratorio anterior? Tienes que admitir que a primera vista parecía bastante extraño. Tuvimos que usar nueve variables para almacenar información sobre solo tres usuarios. Lo que es peor, agregar cada nuevo usuario requeriría la creación de tres variables más. Esto no es conveniente ni práctico. Afortunadamente, desde entonces hemos aprendido algo sobre arreglos y objetos, lo que nos permitirá guardar nuestra lista de una manera un poco más conveniente. Con los mismos datos que en el laboratorio anterior, crea la lista de contactos como un arreglo, cada elemento del cual será un objeto que describa a un solo usuario. Entonces, deberíamos tener un arreglo de tres elementos, y cada objeto colocado en el contendrá tres piezas de información (nombre, teléfono y correo electrónico).
*/

let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];


console.log(contacts);

//Al final de la lista declarada de esta manera, agrega un nuevo contacto usando el método del arreglo apropiado. El nuevo contacto es: Maisie Haley / 0913 531 3030 / risus.Quisque@urna.ca.


contacts.push({
    name: "Maisie Haley",
    phone: "0913 531 3030",
    email: "risus.Quisque@urna.ca"
});


console.log(contacts);


//Muestra el primer y último contacto, de nuevo en el formato: nombre / teléfono / correo electrónico. Utiliza la propiedad length del arreglo para determinar el índice del último elemento. Recuerde que los elementos del arreglo se indexan a partir de 0.

console.log(contacts[0].name, contacts[0].phone, contacts[0].email);
console.log(contacts[contacts.length - 1].name, contacts[contacts.length - 1].phone, contacts[contacts.length - 1].email);
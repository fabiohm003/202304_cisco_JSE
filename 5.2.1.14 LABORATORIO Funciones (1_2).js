/*
Escenario
Nuestro programa ha crecido bastante, por lo que es un poco difícil de leer. Es especialmente visible en la instrucción switch, donde se incluye la mayor parte de la lógica. Trata de organizar el código de tu programa usando funciones. Define y llama a tres funciones en los lugares apropiados:

showContact: la función debe tomar dos argumentos; el primero es la lista de contactos y el segundo es el número de índice del contacto a mostrar; dentro de la función, verifica si se pasan los argumentos correctos, es decir, si los contactos son un arreglo (utiliza la construcción instanceofArray para esto).
showAllContacts: la función debe tomar un argumento, la lista de contactos; dentro de la función, verifica si el argumento dado es un arreglo.
addNewContact: la función debe tomar cuatro argumentos, una lista de contactos y los datos del nuevo contacto, es decir: nombre, teléfono y número; antes de agregar un nuevo contacto, verifica si el argumento pasado es un arreglo y si los datos del nuevo contacto tienen algún valor.
 */

let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];




function showContact(arr, indice) {

    if (arr instanceof Array) {
        console.log(arr[indice]);
    } else {
        console.log('no se ha pasado un arreglo');
    }
}


function showAllContacts(arr) {

    if (arr instanceof Array) {

        for (const dato of arr) {
            console.log(dato);
        }
    } else {
        console.log('no se ha pasado un arreglo');
    }
}



function addNewContact(arr, nombre, telefono, mail) {

    if ((arr instanceof Array) && nombre != null && telefono != null && mail != null) {

        arr.push({
            name: nombre,
            phone: telefono,
            email: mail
        });

        return arr;

    } else {
        console.log('addNewContact: datos incompletos');
    }
}




showContact(contacts, 0);
showAllContacts(contacts);
console.log(addNewContact(contacts, 'fabio', '2222', 'mi@correo'));
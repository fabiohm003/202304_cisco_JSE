/*
Escenario
Usaremos las funciones para agregar un elemento más de funcionalidad. Los arreglos tienen un método sort que nos permite ordenar sus elementos. A este método, le pasamos una función que debe comparar dos elementos del arreglo y decidir cuál es más pequeño y cuál es más grande. Si el primer elemento es menor, la función devuelve un valor menor que cero, si son iguales devuelve cero, y si el primero es mayor, devuelve un valor mayor que cero. Por ejemplo, el arreglo:

let numbers = [10, 50, 40, 20];

se puede ordenar de manera ascendente:

numbers.sort(function (a, b) {
    let retVal = 0;
    if (a > b) {
        retVal = 1;
    } else {
        retVal = -1;
    }
    return retVal;
});

o simplemente:

numbers.sort((a, b) => a - b);

Da al usuario la opción de seleccionar una acción sort de la lista. Cuando se selecciona esta opción, el usuario debería poder especificar si desea ordenar los contactos por nombre, teléfono o correo electrónico.

*/


let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];


let showContact = function(contacts, i) {
    if (contacts instanceof Array && contacts[i]) {
        console.log(`${contacts[i].name} / ${contacts[i].phone} / ${contacts[i].email}`);
    }
}

let showAllContacts = function(contacts) {
    if (contacts instanceof Array) {
        for (contact of contacts) {
            console.log(`${contact.name} / ${contact.phone} / ${contact.email}`);
        }
    }
}

let addNewContact = function(contacts, name, phone, email) {
    if (contacts instanceof Array && name && phone && email) {
        contacts.push({
            name: name,
            phone: phone,
            email: email
        });
    }
}





console.log(showContact(contacts, 2));
console.log(showAllContacts(contacts));
console.log(addNewContact(contacts, 'nombre', 'tel', 'mail'));
console.log(showAllContacts(contacts));



///////////////




let contacts = [{
    name: "maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur@nonummyac.co.uk"
}, {
    name: "raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];




function ordernar(arr, campo) {

    let resultado = arr.sort(function(a, b) {
        let retVal = 0;
        if (a[campo] > b[campo]) {
            retVal = 1;
        } else {
            retVal = -1;
        }
        return retVal;
    });

    for (const dato of resultado) {
        console.log(dato.name, dato.phone, dato.email);
    }


}


let salir = false;

do {
    let opc = prompt(`Registra opcion de ordenar:
    1. nombre
    2. telefono
    3. email
    4. Salir`);

    opc = Number(opc);

    switch (opc) {
        case 1:
            ordernar(contacts, 'name');
            break;
        case 2:
            ordernar(contacts, 'phone');
            break;
        case 3:
            ordernar(contacts, 'email');
            break;
        case 4:
            salir = true;
            break;
        default:
            salir = false;
            break;
    }

} while (salir == false);
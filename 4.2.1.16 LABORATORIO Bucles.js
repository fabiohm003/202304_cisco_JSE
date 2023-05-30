/*Escenario
Podemos mejorar un poco nuestro programa de lista de contactos mediante el uso de bucles. Ahora puedes intentar mostrar no solo el primer o último contacto, sino todos los contactos de la lista, independientemente de su número.

Además, intenta encerrar todo el programa en un bucle para que al usuario se le pregunte repetidamente qué quiere hacer. El usuario puede optar por:

Mostrar el primer contacto (primero)
Mostrar el último contacto (último)
Mostrar todos los contactos (todos)
Añadir un nuevo contacto (nuevo)
Salir del programa (salir)
Después de ejecutar la acción seleccionada, el programa le dará la oportunidad de elegir nuevamente. El programa debe finalizar las acciones solo después de que el usuario dé un comando específico, por ejemplo salir.
*/

let opc;

let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuera@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];




function contactos(lista) {
    for (const dato of lista) {
        window.alert(`${dato.name} ${dato.phone} ${dato.email}`);
    }
}




do {

    opc = window.prompt(`¿que desea hacer?
1) Mostrar el primer contacto (primero)
2) Mostrar el último contacto (último)
3) Mostrar todos los contactos (todos)
4) Añadir un nuevo contacto (nuevo)
5) Salir del programa (salir)

registra la opcion deseada`);

    opc = Number(opc);

    if (opc == 1) {
        window.alert(`${contacts[0].name} ${contacts[0].phone} ${contacts[0].email}`);
    } else if (opc == 2) {
        window.alert(`${contacts[contacts.length-1].name} ${contacts[contacts.length-1].phone} ${contacts[contacts.length-1].email}`);
    } else if (opc == 3) {
        contactos(contacts);
    } else if (opc == 4) {

        let nombre = window.prompt('registra nombre');
        let tel = window.prompt('registra telefono');
        let mail = window.prompt('registra mail');

        if (nombre != "" && tel != "" && mail != "") {
            contacts.push({
                name: nombre,
                phone: tel,
                email: mail
            });
            window.alert(`${contacts[contacts.length-1].name} ${contacts[contacts.length-1].phone} ${contacts[contacts.length-1].email}`);
        } else {
            window.alert("datos incompletos - no se agrega contacto");
        }

    } else if (opc == 5) {
        window.alert("salir");

    } else {
        window.alert("opcion no valida");
    }

} while (opc != 5);
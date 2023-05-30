/*
Escenario
Durante la última modificación del programa con la lista de contactos, permitimos que el usuario agregara un nuevo contacto con los datos ingresados por el usuario mientras se ejecuta el programa. Vayamos un paso más allá: intenta modificar el programa para que el usuario pueda elegir lo que quiere hacer con la lista. Las opciones serán:

Mostrar el primer contacto (primero)
Mostrar el último contacto (último)
Añadir un nuevo contacto (nuevo)
Al agregar un nuevo contacto, verifica si el usuario ha ingresado todos los datos necesarios. Si falta al menos uno de los tres valores (nombre, teléfono o correo electrónico), no se agrega el contacto.
*/


let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];


let opc = window.prompt(`¿que desea hacer?
1) Mostrar el primer contacto
2) Mostrar el último contacto
3) Añadir un nuevo contacto

registra la opcion deseada`);

opc = Number(opc);

if (opc == 1) {
    window.alert(`${contacts[0].name} ${contacts[0].phone} ${contacts[0].email}`);
} else if (opc == 2) {
    window.alert(`${contacts[contacts.length-1].name} ${contacts[contacts.length-1].phone} ${contacts[contacts.length-1].email}`);
} else if (opc == 3) {

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

} else {
    window.alert("opcion no valida");
}
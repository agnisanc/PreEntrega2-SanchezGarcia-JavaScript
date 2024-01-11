/* El sigueinte simulador tiene la finalidad de ofrecer al usuario un catalogo de joyas
El usuario puede realizar la busqueda y filtrar a traves del array de objetos y luego verificar los productos
disponibles segun la busqueda realizada.
*/

alert("Bienvenido a Joyas Aureom")

const product = [
    {id: 1 , code: "CDP1", name: "Collar de plata", material: "Plata pura", price: 75000 , },
    {id: 2 , code: "CDP2", name: "Collar de plata", material: "Plata 925", price: 45000 , },
    {id: 3 , code: "CDP3", name: "Collar de plata", material: "Plata 950", price: 55000 },
    {id: 4 , code: "DDP", name: "Dije de plata", material: "Plata pura", price: 60000},
    {id: 5 , code: "DDO", name: "Dije de oro" , material: "Oro 24k", price: 70000},
    {id: 6 , code: "CDO1", name: "Collar de oro" , material: "Oro 24k", price: 90000 },
    {id: 7 , code: "CDO2", name: "Collar de oro" , material: "Oro 18k", price: 80000 },
    {id: 8 , code: "CDO3", name: "Collar de oro" , material: "Oro 14k", price: 70000 },
    {id: 9 , code: "ADP1", name: "Anillo de plata" , material: "Plata pura", price: 40000 },
    {id: 10 , code: "ADP2", name: "Anillo de plata" , material: "Plata 925", price: 30000 },
    {id: 11 , code: "ADP3", name: "Anillo de plata" , material: "Plata 950", price: 35000 },
    {id: 12 , code: "ADO1", name: "Anillo de oro" , material: "Oro 24k", price: 60000 },
    {id: 13 , code: "ADO2", name: "Anillo de oro" , material: "Oro 18k", price: 55000 },
    {id: 14 , code: "ADO3", name: "Anillo de oro" , material: "Oro 14k", price: 50000 },
];

const search = prompt(`Por favor, ingrese el producto que desee buscar`);
const filtersearch = product.filter((item) => item.name === search);


filtersearch.forEach((item) => {
    alert(`
    Codigo: ${item.code}
    Joya: ${item.name}
    Material: ${item.material}
    Precio: ${item.price}
    `);
});

/* Esta seccion esta destinada a que el usuario ingrese el codigo asignado a la joya que se desea adquirir
Dicho codigo permite filtra la informacion nuevamente para el posterior calculo de la compra. */

let buycode = prompt("Ingrese el codigo de la joya que desea comprar");
const codesearch = product.find((item) => item.code === buycode);

//

if (codesearch != buycode){
alert(`
    Su joya seleccionada es:
    Joya: ${codesearch.name}
    Material: ${codesearch.material}
    Precio: $ ${codesearch.price}
`);
} else {
    alert("El codigo ingresado no corresponde a uno de nuestros productos. Por favor, ingrese un codigo valido.")
}

/* La siguiente seccion esta destinada a determinar el numero de cuotas
Esta estipulado que el numero de cuotas valido sea: 3, 6, 12 y 24. Caso contrario debe ingresarse un valor que sea valido.
*/

let fees = 0;

while (fees != 3 && fees != 6 && fees != 12 && fees != 24) {
fees = parseInt(prompt("Ingrese el numero de cuotas en la que desea financiar su compra."));

if (fees != 3 && fees != 6 && fees != 12 && fees != 24) {
    alert("El numero de cuotas ingresado no esta disponible. Por favor, seleccione 3, 6, 12 o 24 cuotas");
} else {
    alert("El numero de cuotas seleccionado es de: " + " " + fees + " " + "cuotas");
}
}

/* La seccion final esta orientada a realizar el calculo de los montos a abonar segun el numero de cuotas previamente seleccionado. */

const division = ((codesearch.price)/ fees)
console.log(division)
const dateEn = Date();
const dateS = (dateEn.toLocaleString ())

alert(`La cuota de tu compra es de ${division}
Fecha de compra: ${dateEn}
`)

alert("Gracias por su compra!")

// CODIGOS ALTERNOS:

/*
while(codesearch != arrayCode){
    alert("El codigo ingresado no corresponde a uno de nuestros productos. Por favor, ingrese un codigo valido.")
    let buycode = prompt("Ingrese el codigo de la joya que desea comprar");
}
alert(`Su joya seleccionada es:
Joya: ${codesearch.name}
Material: ${codesearch.material}
Precio: $ ${codesearch.price}`);*/

/*if(codesearch){
    alert(`
    Su joya seleccionada es:
    Joya: ${codesearch.name}
    Material: ${codesearch.material}
    Precio: $ ${codesearch.price}
`);
} else {
    alert("Producto no disponible");
}*/
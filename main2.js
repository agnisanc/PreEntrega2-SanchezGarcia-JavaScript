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

let buycode = prompt("Ingrese el codigo de la joya que desea comprar");
const codesearch = product.find((item) => item.code === buycode);

while(product.toString() !== sortArray(['CDP1', 'CDP2', 'CDP3', 'DDP', 'DDO', 'CDO1','CDO2', 'CDO3', 'ADP1','ADP2', 'ADP3', 'ADO1','ADO2', 'ADO3']).toString()){
    alert("El codigo ingresado no corresponde a uno de nuestros productos. Por favor, ingrese un codigo valido.")
    let buycode = prompt("Ingrese el codigo de la joya que desea comprar");
}
alert(`Su joya seleccionada es:
Joya: ${codesearch.name}
Material: ${codesearch.material}
Precio: $ ${codesearch.price}`);
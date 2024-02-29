//operaciones aritmeticas
let numeroUno = +prompt("ingrese el primer numero");
console.log(`el primer numero es: ${numeroUno}`);
let numeroDos = +prompt("ingrese el segundo numero");
console.log(`el segundo numero es: ${numeroDos}`);

let suma = numeroUno + numeroDos
console.log(`la suma de los dos numeros es: ${suma}`);

let resta = numeroUno - numeroDos
console.log(`la resta de los dos numeros es: ${resta}`);

let multiplicacion = numeroUno * numeroDos
console.log(`la multiplicacion de los dos numeros es: ${multiplicacion}`);

let division = numeroUno / numeroDos
console.log(`la division de los dos numeros es: ${division}`);

let modulo = numeroUno % numeroDos
console.log(`el modulo entre los dos numeros es: ${modulo}`);

//transformacion de °c
let gradosUno = +prompt("ingrese primera temperatura en °c");
let gradosDos = +prompt("ingrese segunda temperatura en °c");

let kelvinUno = gradosUno + 273.15;
console.log(`${gradosUno} °c, corresponden a ${kelvinUno} K`);


let fahrenheitUno = (gradosUno * 9 / 5) + 32;
console.log(`${gradosUno} °c, corresponden a ${fahrenheitUno} ° F`);

let kelvinDos = gradosDos + 273.15;
console.log(`${gradosDos} °c, corresponden a ${kelvinUno} K`);

let fahrenheitDos = (gradosDos * 9 / 5) + 32;
console.log(`${gradosDos} °c, corresponden a ${fahrenheitUno} ° F`);

//calculo de años
let diasIngresados = +prompt("ingresar cantidad de dias");

let años = Math.floor(diasIngresados / 365);
let diasRestantes = diasIngresados % 365;
let semanas = Math.floor(diasRestantes / 7);
let dias = diasRestantes % 7;

console.log(`${diasIngresados} corresponde a: ${años} años, ${semanas} semanas y ${dias} dias.`);


// suma y division de todos los numeros
let uno = +prompt("ingresar 1° numero:")
let dos = +prompt("ingresar 2° numero:")
let tres = +prompt("ingresar 3° numero:")
let cuatro = +prompt("ingresar 4° numero:")
let cinco = +prompt("ingresar 5° numero:")

let sumaTotal = uno + dos + tres + cuatro + cinco;
console.log(` la suma de los cinco numeros ingresados es: ${sumaTotal}`);
let promedio = sumaTotal / 5;
console.log(`el promedio de los cinco numeros ingresados es: ${promedio}`);

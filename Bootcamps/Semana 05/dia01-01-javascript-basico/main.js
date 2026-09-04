
console.log("Hola Javascript");

// 1.COMENTARIOS
// Existen dos tipos de comentarios en Javascript
// Comentario de una sola línea
/* Comentario
 de 
 varias 
 Líneas */   
// 2. TIPOS DE DATOS

// Primitivos basicos:

// Number(numeros)
console.log(20);
console.log(typeof 20);
console.log(123);
console.log(typeof 123);
console.log(34.89);
console.log(typeof 34.89);
console.log(-20);
console.log(typeof -20);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

// String(texto)

console.log("Hola");
console.log(typeof "Hola");

//Boolean (true o false)
console.log(true);
console.log(typeof true);
console.log(false);
console.log(typeof false);

//Undefined (valor no definido)

let x;// declaro variable pero no le asigno valor

console.log(x);
console.log(typeof x);

// null (ausencia de valor)

let nombre = null; // declaro variable y le asigno valor null
console.log(nombre);
console.log(typeof nombre);

//ejercicios    

console.log(typeof 20); // number
console.log(typeof "Hola"); // string
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object (es un error de javascript, null no es un objeto, es un valor nulo)

// 3. VARIABLES (guardan información en memoria)

//const (constante) no se puede reasignar

const pi = 3.14;
console.log(pi);
//pi = 3.1416; // error, no se puede reasignar una constante  

//let (variable) se puede reasignar

let edad = 30;
console.log(edad);
edad = 31;
console.log(edad);

//4. OPERADORES MATEMÁTICOS

console.log(2 + 3); // suma
console.log(5 - 2); // resta
console.log(4 * 2); // multiplicación
console.log(10 / 2); // división
console.log(10 % 3); // módulo (residuo de la división) 
console.log(2 ** 3); // potencia (2 elevado a 3)    
console.log(Math.pow(3, 6)); // potencia (3 elevado a 6)
//Ejercicios
const a = 10;
const b = 3;

const residuo = a % b;
console.log(residuo); // 1

//5. COMPARACIONES  

// == (igualdad) compara valores sin importar el tipo de dato

console.log(5 == "5"); // true

// === (estrictamente igual) compara valores y tipo de dato

console.log(5 === "5"); // false

//6. OPERADORES LÓGICOS (AND, OR, NOT)

console.log(true && false); // false
console.log(true || false); // true
console.log(!true); // false

// Ejercicios. definir dos variables base y altura, calcular el área de un triángulo y mostrarlo en consola

const base = 10;
const altura = 5;   
const area = (base * altura) / 2;
console.log(area);

// CONCATENACIÓN DE STRINGS

let nombre1 = "Juan";
let apellido1 = "Pérez";

console.log(nombre1 + " " + apellido1); // Juan Pérez
console.log("hola " + nombre1 + " " + apellido1); // hola Juan Pérez

// Mejor forma de concatenar strings - backticks (template literals)

console.log(`hola ${nombre1} ${apellido1}`); // hola Juan Pérez 

// 8. CONDICIONALES (if, else if, else)
    
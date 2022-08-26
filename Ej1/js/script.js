// 1. Array de números:
const numberArray = [4, 10, 34, 999, 0, -10000, -999, 58, 2, 4];

// a. Muestra en consola el array ordenado de menor a mayor (ascendente)
numberArray.sort((a, b) => {
  return a - b;
}
)
console.log(numberArray);

// b. Muestra en consola el array ordenado de mayor a menor (descendente)
numberArray.sort((a, b) => {
  return b - a;
}
)
console.log(numberArray);

// 2. Array de String:
const stringArray = ["a", "r", "alo", "www", "internet", "qqq", "bbb"];

// a. Muestra en consola el array ordenado A-Z

stringArray.sort();
console.log(stringArray);

// b. Muestra en consola el array ordenado Z-A

stringArray.reverse();
console.log(stringArray);


// 3. Array de Number:



// 3. Array de objetos:
const objectArray = [
  { name: "Pepe", lastname: "Gomez", age: 32 },
  { name: "Juan", lastname: "Andres", age: 44 },
  { name: "Nicolas", lastname: "Garcia", age: 22 },
  { name: "Pepe", lastname: "Amigo", age: 15 },
  { name: "Alfredo", lastname: "Franco", age: 255 },
];
// a. Muestra en consola el array ordenado según el campo "age" de mayor a menor (descendente)

objectArray.sort((a, b) => {
  return b.age - a.age;
});
console.log(objectArray);
// b. Muestra en consola el array ordenado según el campo "lastname" de A-Z

objectArray.sort((a, b) => {
  return a.lastname.localeCompare(b.lastname);
}); 

console.log(objectArray);
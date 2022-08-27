const objectArray = [
  { name: "Pepe", lastname: "Gomez", age: 32 },
  { name: "Juan", lastname: "Andres", age: 44 },
  { name: "Nicolas", lastname: "Garcia", age: 22 },
  { name: "Pepe", lastname: "Amigo", age: 15 },
  { name: "Alfredo", lastname: "Franco", age: 255 },
];

objectArray.sort((a, b) => {
  return a.name.localeCompare(b.name);
})

console.log(objectArray);

const tableBody = document.getElementById("data");

objectArray.forEach(element => {

  tableBody.innerHTML += `<tr>
  <td>  ${element.name}  </td>
  <td> ${element.lastname} </td>
  <td> ${element.age} </td></tr>`
});


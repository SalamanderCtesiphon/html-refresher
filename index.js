console.log("hello")

let name = "John";
let surname = "Doe";

console.log(name);
console.log(surname);

function favoriteAnimal(animal) {
  return animal + " is my favorite animal!"
}

console.log(favoriteAnimal("Goat"))

function add7(nmb) {
  return nmb +7
}

console.log(add7(8))

function multiply(num1, num2) {
  return num1 * num2
}

console.log(multiply(7,7))

function capitalize(string1) {
  let text1 = string1.toLowerCase();
  let fLet = text1.at(0);
  let flet2 = fLet.toUpperCase()
  let text2 = flet2.concat("", text1.slice(1));
  return text2 
}

console.log(capitalize("mISSISSIPPI"))

function lastLetter(string2) {
  return string2.at(-1)
}

console.log(lastLetter("this is a z"))

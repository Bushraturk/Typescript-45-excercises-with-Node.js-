"use strict";
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
//answer: 3
let personaName = "Bushra Turk";
console.log(personaName.toLowerCase());
console.log(personaName.toLocaleUpperCase());
console.log(personaName.replace(/\b\w/g, (char) => char.toLocaleUpperCase()));

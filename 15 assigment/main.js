"use strict";
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
//Answer:15
let guestList = ["Ahmed Raza", "Muhammmad Rehan", "Rimsha"];
let dontCome = guestList[2];
console.log(dontCome, "is not come");
guestList.splice(2, 2, "Ramaza");
guestList.forEach(guestList => console.log(`Salam ${guestList}, Would you like dinner with me`));

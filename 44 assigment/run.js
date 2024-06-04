"use strict";
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
//Answer: 44
//Define a function with rest parameter that  accept items argument representing our sandwich
function makeSandwich(...items) {
    console.log("\nMaking a sandwich with the following items: \n");
    items.forEach(singleItem => console.log("-", singleItem));
    console.log("\nNow Enjoy Sandwich\n");
}
//call the function 3 times with 3 different number of argument
makeSandwich("Chicken", "Cheese", "Mayo", "Egg");
makeSandwich("Bread", "Butter");
makeSandwich("Butter", "Mayo", "Egg", "Cheese", "Chicken", "Tomato");

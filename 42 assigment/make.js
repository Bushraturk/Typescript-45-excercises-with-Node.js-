"use strict";
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
//answer:42
//Define the function to show magicians names
function show_magicians(magicians) {
    magicians.forEach((name) => console.log(name));
}
//function make magicians names
function make_great(magicians) {
    return magicians.map((name) => `The Great ${name}`);
}
//Define an array of magicians name
let magicians = ["Herry poter", "Hamza", "Usman"];
//call make_great function to madifiy magicians name
let great_magicians = make_great(magicians);
//call the function of show_magicians
show_magicians(great_magicians);

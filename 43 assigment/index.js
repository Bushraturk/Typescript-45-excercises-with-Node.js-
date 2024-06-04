"use strict";
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
//answer:43
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
//making a copy of original array through.slice()function
let copy_magician_name = magicians.slice();
//modify the copied array to include "The Great" with their names
let copy = make_great(copy_magician_name);
//show both arrays Original and Copied
//Original
show_magicians(magicians);
//Copied
show_magicians(copy);

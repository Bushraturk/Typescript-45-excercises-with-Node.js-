// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

//Answer:16

//creating a Guest List array
let guestList = ["Ahmed Raza", "Muhammad Rehan", "Rimsha"];

//making variable for those guest who cant come
let dontCome = guestList[2];

// print the name of guest who cant come 
console.log(dontCome, "is not come");

// remove and add a new name of guest in array 
guestList.splice(2, 2, "Ramaza");

// print the message about dinner
console.log(" Good News! We Have Found a Bigger Table for Dinner");

//adding a new value at staarting index of array
guestList.unshift("Sania");

//adding a new value at last index of array
guestList.push("sobia");

//get a middle list of our guestList array
let middleIndex:number =  Math.floor(guestList.length/2);

//adding a new value at middle index of array
guestList.splice(middleIndex, 0, "Bushra");

//print the message to updated list
console.log("Updated List Of Our Guests ");
//sending a invitation message to our guest one by one  with their names
guestList.forEach(oneGuest => console.log(`salam ${oneGuest}, Would you like to dinner with me`));

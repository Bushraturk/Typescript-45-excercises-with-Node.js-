// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

//Answer: 17

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


//inform to inivit only two guest for dinner
console.log("unfortunatly, the new dinner table wont arrive on time, so i can only inivte two guest to dinner with me");

//using while-loop to remove the guest from array  until two names remain
while (guestList.length >2){
    let removeguest = guestList.pop();
    console.log(`Sorry, ${removeguest} i can't inivite you to dinner`);
}
// sending invitation to last two guest 
console.log("invitation to the last 2 Guest ");
guestList.forEach(lastTwo => console.log(`luckly, ${lastTwo}, you are still invited to dinner`));

//removing last two guest from  the list
guestList.pop();
guestList.pop();

console.log("Empty List:", guestList);

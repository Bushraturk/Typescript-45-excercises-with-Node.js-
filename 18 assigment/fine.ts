// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.


// Answer: 18

let countriesToVisit = ["Chaina", "denmark", "Bahrain", "Azerbaijan"];
console.log("Original Order", countriesToVisit);

// print the arrray in alpabatical order and modifying actual array
console.log("Alpabatical order", [...countriesToVisit].sort());

// print the array still in original order
console.log("Still in original order:", countriesToVisit);

// print the reverse order
console.log("Reverse order", [...countriesToVisit].reverse());

// print the array still in original order
console.log("Still in original order:", countriesToVisit);

// we have changed the original array order now
console.log("Originaal Array  Reversed", countriesToVisit.reverse());

//print the array to show it's back to it's original way
console.log("Back To Original Order :", countriesToVisit.reverse());

//print the array to sorted alpabatical order
console.log("sorted in Alpabatical order:", countriesToVisit.sort());

// we have changed  agian the original array order now  in reverse oder again
console.log("Original Array Reversed Again", countriesToVisit.reverse());

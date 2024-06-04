// q 24: More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings

//• Tests using the lower case function

//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

//• Tests using "and" and "or" operators

//• Test whether an item is in a array

//• Test whether an item is not in a array




//ANSWER 24
// Creating a variable
let apple = "apple";

// Tests of equality
console.log("apple is equal to apple");
console.log(apple == "apple");

//  Tests of inequality

console.log("apple is  not equal to apple");
console.log(apple != "apple");



// Tests using the lower case function
let uppercaseApple = "APPLE";

//equal to
console.log("\nAPPLE is equal to apple after converting to lowercase\n");
console.log(uppercaseApple.toLocaleLowerCase() == "apple");


// not equal to
console.log("\nAPPLE is not equal to apple after converting to lowercase\n");
console.log(uppercaseApple.toLocaleLowerCase() != "apple");


// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

let ten = 10;
let twenty = 20;

//Equal to 
console.log("\nTen is equal to twenty\n");
console.log(ten == twenty);


//not Equal to 
console.log("\nTen is not equal to twenty\n");
console.log(ten != twenty);


//Greater than
console.log("\ntwenty is greater than ten\n");
console.log(20 >10);

//less than
console.log("\ntwenty is less than ten\n");
console.log(20 < 10);


//Greater than  or equal to 
console.log("\ntwenty is  greater than or equal to ten\n ");
console.log(20 >= 10);

//less than or equal to 
console.log("\ntwenty is less than or equal to ten\n");
console.log(20 <= 10);


//• Tests using "and" and "or" operators

// using && operator

console.log("\ntwenty is not equal to ten and twenty is greater than ten\n ");
console.log(twenty != ten && 20 >10);


console.log("\ntwenty is not equal to ten and ten is greater than twenty\n ");
console.log(twenty != ten && 10 >20);


//using || (or)
console.log("\ntwenty is greater than  ten or twenty is equal to twenty\n");
console.log(20 > 10 || 20 == 20);

console.log("\ntwenty is less than  ten or twenty is equal to twenty\n");
console.log(20 < 10 || 20 == 20);

// Test whether an item is in a array
let fruits =["Mango ", "Orange", "Apple"]
console.log("\norange is include in my fruits array\n");
console.log(fruits.includes("Orange"));


// Test whether an item is not in a array
console.log("\norange is not include in my fruits array\n");
console.log(!fruits.includes("Orange"));
























 

// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

//define a function to part each magician name from an array

function show_magicians(magician: string[]){
    magician.forEach(name => console.log(name));
    
}

//define an array containing magicians name

let magician_name =["Harry poter", "Hamza","Usman"]

//call the function to part each magicians name
show_magicians(magician_name)
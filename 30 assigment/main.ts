//creating  a array
let  userName = ["Admin", "Muhammad Rehan", "Ahmed Raza", "Rimsha", "Ramaza"];

//using forEach loop on Array
userName.forEach(oneUser => {
    if (oneUser === "Admin"){
        console.log(`Hello ${oneUser}, would you like to see a status report?`);
    }else{
        console.log(`Hello ${oneUser}, thank you for logging in again.`);
        
    }
})

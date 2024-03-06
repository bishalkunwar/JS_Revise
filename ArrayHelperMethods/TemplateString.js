// ES5

function getMessage(){
    const year = new Date().getFullYear();
    return "The year is "+year;
};

console.log(getMessage());


// ES 6
const dateToday = ()=>{
    const year = new Date().getFullYear();
    return `The Year is ${year}`;
} 

console.log(dateToday());


// Use Case scenario of template strings-.
const namee = "Bishal";
const age = 12;
let address = "41 Sheppard Village";

// normal console
console.log("My Name is "+namee+" I am "+age+"years old"+"I live in "+address);

// ES 6
console.log(`My Name is ${namee} I am ${age} years old, I live in ${address}`);

// So basically, in complex scenario template string makes printing easy as well as less chances of error.
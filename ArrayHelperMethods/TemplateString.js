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
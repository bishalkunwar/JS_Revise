
// For loop
var colors = ['red', 'blue', 'green'];

for(var i=0; i<colors.length; i++){
    console.log(colors[i]);
};


// for each 
colors.forEach(function(color){
    console.log(color);
});


// ForEach scenario
let numbers = [1,2,3,4,5,6]
let sum = 0;
function adder(number){
    sum+=number;
};

numbers.forEach(adder);
console.log(sum);
// loop over the array, incrementing the sum variable.


const students = {
    name: 'bishal', 
    age: 23
}

Object.entries(students).forEach((item)=>{
    const[key, value] = item;
    console.log(`Key: ${key} :: value: ${value}`);
})




const studentss = [
    {
        name: 'bishal',
        age: 29
    },
    {
        name: 'amit',
        age: 30
    }
];

studentss.forEach((stud, index)=>{
    console.log(`Student -> ${index+1}`)
    Object.entries(stud).forEach((data)=>{
        const[key,value] = data;
        console.log(`Key: ${key}, value: ${value}`)
    })
});




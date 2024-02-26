
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



// For in VS for of and then for each
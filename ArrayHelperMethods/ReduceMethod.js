
var numbers = [10, 20, 30, 40, 50, 60];
var sum = 0;

for(let x = 0; x<numbers.length; x++){
    sum += numbers[x];
};

console.log(sum);


// Reducer Method:->
const summer = numbers.reduce(function(sum, number){
    return sum += number;
},0);

console.log(summer)


var numbers = [1,2,3];
var doubledNumbers = [];

// Eventhough array are mutable, it is not good to mutate the array if we do soo, we will loose our original array.
// For Loop vs ArrayMap function.
for(var x = 0; x<=numbers.length-1; x++){
    doubledNumbers.push(numbers[x]*2);
};

var doubled = numbers.map(function(number){
    return number*2;
});

console.log(doubledNumbers);
console.log(doubled);


// arrayMap in case of objects inside an array.
var cars = [
    {model: 'Buick', price: 'Cheap'},
    {model: 'Ram', price: 'Expensive'}
];

const prices = cars.map(function(car){
    return car.price;
});

console.log(prices);


const carDetails = cars.map((car1, index)=>{
   return[index, car1.model, car1.price];
});

console.log(carDetails);
console.log(carDetails[0]);
console.log(carDetails[0][1]);



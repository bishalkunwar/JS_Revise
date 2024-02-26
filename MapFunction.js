

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



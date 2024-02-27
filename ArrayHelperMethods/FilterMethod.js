
var products = [
    {name: 'cucumber', type: 'vegetable'},
    {name: 'banana', type: 'fruit'},
    {name: 'celery', type: 'vegetable'},
    {name: 'apple', type: 'fruit'}
];

const filteredFruits  = [];

for(let x=0; x<products.length;x++){
    if(products[x].type === "fruit"){
        filteredFruits.push(products[x]);
    };
};

console.log(filteredFruits);


var computers = [
    {name: "Apple", ram: 24},
    {name: "Dell", ram: 27},
    {name: "Compaq", ram: 36}, 
    {name: "Acer", ram: 32}
];

let heroComputers = true;
let zeroComputers = false;

for(let x=0;x<computers.length; x++){
    let computer = computers[x];

    if(computer.ram < 28){
        heroComputers = false;
    }else{
        zeroComputers = true;
    }
};

console.log(heroComputers);
console.log(zeroComputers);
 

// Every array method example
const zeroComp = computers.every(function(computer){
    return computer.ram <= 28;
});

console.log(zeroComp);
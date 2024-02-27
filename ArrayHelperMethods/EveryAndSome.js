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


const heroComp = computers.some(function(computer){
    return computer.ram <= 28;
});

console.log(heroComp);


// Real case scenario of every and some.
function Field(value){
    this.value = value;
};

Field.prototype.validate = function(){
    return this.value.length >0;
};

const userName= new Field("Bishal");
const password = new Field("A123");

// userName.validate() && password.validate();
let fields = [userName, password];

let isValid = fields.every(function(field){
    return field.validate();
});

if(isValid){
    console.log("let the user login");
}else{
    console.log("Garbage user");
}

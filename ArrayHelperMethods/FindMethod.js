var users = [
    {name: 'Bishal'},
    {name: 'Alex'},
    {name: 'Bill'}
];
var user;

for(let x = 0; x<users.length;x++){
    if(users[x].name=== "Bishal"){
            user = users[x];
            break;
        }
};

console.log(user);


// Find helper in place of for loop.
const letsFind =()=> users.find(function(user){
    return user.name === "Bishal";
});

console.log(letsFind());
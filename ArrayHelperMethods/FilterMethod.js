
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


// Filter method: ()=>
const newFruits = products.filter(function(product){
    return product.type === "fruit" && product.name === "apple";
});

console.log(newFruits);


// function curry and filter method example:=>
const posts = {id: 2, title: "New Post"};
const comments = [{postId: 3, content: "awesome"}, {postId: 2, content: "Neat"}];

function commentsOfThePost(posts, comments){
    return comments.filter(function(comment){
        return comment.postId === posts.id;
    });
};

console.log(commentsOfThePost(posts, comments));


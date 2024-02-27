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


// find helper real case scenario:->
const posts = [
    {id: 1, title: "New Era"},
    {id: 2, title: "Old Era"}
];

const comments = [
    {postId: 1, comment: "Nice One"},
    {postId: 2, comment: "Not Nice One"}
];

const cmtFind = function PostAtComment(posts, comments){
    return comments.find(function(comment){
        return comment.postId === posts[0].id;
    });
};

console.log(cmtFind(posts,comments));
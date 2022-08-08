// FAKE STORE API

//Get all products
fetch('https://fakestoreapi.com/products?limit=20')
    .then(res=>res.json())
    .then(json=>console.log(json));

//Get a single product
fetch('https://fakestoreapi.com/products/1')
    .then(res=>res.json())
    .then(json=>console.log(json));

//Get all categories
fetch('https://fakestoreapi.com/products/categories')
    .then(res=>res.json())
    .then(json=>console.log(json));

//Get products in a specific category
fetch('https://fakestoreapi.com/products/category/jewelery')
    .then(res=>res.json())
    .then(json=>console.log(json));

//Get all users
fetch('https://fakestoreapi.com/users')
    .then(res=>res.json())
    .then(json=>console.log(json));



//WHAT WE HAVE
const users = [
    { id: 20, name: 'Mauro Forghieri' },
    { id: 24, name: 'Paolo Stanzani' },
    { id: 56, name: 'Marcello Gandini' },
    { id: 88, name: 'Sergio Limone' }
  ];

//WHAT WE NEED
[20, 24, 56, 88];


//USING FOREACH
let usersIds = [];
users.forEach( (user)=>{
    usersIds.push(user.id);
});

//USING MAP
usersIds = [];
usersIds = users.map( user =>{
    return user.id
});

usersIds = users.map(user => user.id);


//USING REDUCE
usersIds = [];
usersIds = users.reduce( (acc, item) =>{
    acc.push(item.id);
    return acc
},[]);


//WHAT WE NEED
const filteredUsers = [
    { id: 24, name: 'Paolo Stanzani' },
    { id: 56, name: 'Marcello Gandini' },
  ];

//USING FILTER
let filtered  = users.filter( user =>{
    return user.id > 20 && user.id < 88
});


//WHAT WE NEED
const stanzani = [
    { id: 24, name: 'Paolo Stanzani' },
  ];

let userStanzani  = users.find( user =>{
    return user.id == 24
});

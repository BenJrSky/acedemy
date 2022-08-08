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


//ASYNC AWAIT
async function fetchProductsJSON() {
    const response = await fetch('https://fakestoreapi.com/products?limit=20');
    const products = await response.json();
    return products;
  }
  fetchProductsJSON().then(products => {
   console.log(products);
  }).catch(error => {
    console.log(error);
  });


/*
git init					    Initialize a repository 
git add *				        add all changes to next commit on status staged
git status				        verify status
git reset				        reset status from staged on unstaged 
git commit -m [message] 	    commit a change		
git push origin master		    push branch origin to master
git pull origin master		    pull master changes to origin
git diff				        whenever you want to see your local unstaged
git log				            commits history
git log --graph			        commits history in graph mode
git checkout -b [name]		    create a new branch
git fetch				        fetch branches informations from repository
git checkout [name]		        checkout on branch name
git pull --rebase origin [name]	pull all the recent changes from remote repository
git push origin [name]		    push all staged changes from origin to branch name
git push -f origin [name]	    force push changes from origin to branch name
git stash				        stash changes temporary 
git stash save [name]		    Create a Git stash with a name	
git stash list				    list the stashes
git stash show			        show the name of the most recent stash
git stash show -p			    show the changes of the most recent stash
git stash clear			        drop all stashes using clear
git stash apply			        pick up the latest stash and apply to branch
git reset -- path/to/folder	    remove folder from git add *
git clean -d -n			        preview of untracked files to be deleted
git clean -d -f			        delete untracked files
git branch -D [name]		    delete a branch name on local machine
git push -d origin :[name]	    delete a branch name on remote machine
git merge <branch name to merge>
git reset --hard <commit_before_merge>
git stash save 			        save current stash and clean the code
git stash pop			        put back the code stashed before
git restore 				    discarding all local changes
git clean -f				    delete untracked files
git remote add <name> <link>	add origin
*/
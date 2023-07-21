var name = 'Max';
var age = 29;
var hasHobbies = true;


function userDetails(userName,userAge,userHasHobbies){
    return (
        'Name is '+
        userName +
        ', age is '+
        userAge +
        ', and user has Hobbies: '+
        userHasHobbies
    );

}

console.log(userDetails(name,age,hasHobbies));

// example for const and let ; 

const newName = 'Max';
let newAge = 29;
const newHasHobbies = true;

// is we try to change const variable it will give error
// use const if something should never change

// newName = "Pragati";

// and  for 'let'
// let assure that we are not allowed to change the "name" of variable 
// const assure that we are not allowed to change the value of the variable.

newAge = 30;

console.log(userDetails(newName,newAge,newHasHobbies));


// arrow function

const summerizeUser = (userName,userAge,userHasHobbies) => {
    return (
        'Name is '+
        userName +
        ', age is '+
        userAge +
        ', and user has Hobbies: '+
        userHasHobbies
    );

}

// another way of writings

const add = (a,b) => a + b;
const addOne = a => a + 1;
const blankArgument = () => 1 + 1; 



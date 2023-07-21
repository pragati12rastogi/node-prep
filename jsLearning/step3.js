// Destructuring

const person = {
    name: 'Pragati',
    age: 27,
    greet() {
        console.log("Hi, I am " + this.name);
    } 
};

// type 1
const destructuring = ({ name }) => {
    console.log(name);
}

destructuring(person);

// type 2
const { name, age } = person;
console.log(name,age);

// same can be done for array with [] brackets

// desturcturing is just to drop data that we dont need not to delete them.


// object ,properties and method.

const person = {
    name: 'Pragati',
    age: 27,
    /* greet: () => {
        console.log("Hi, I am " + this.name);
    } */  // result 'undefine' because this refer to global scope to global node runtime scope not to the object
    
    /* greet: function() {
        console.log("Hi, I am " + this.name);
    } */ //result -> Hi, I am Pragati

    greet() {
        console.log("Hi, I am " + this.name);
    } // result => Hi, I am Pragati
};

person.greet();

// Array and Array Method 


const hobbies = ['Cricket','Cooking'];

// step1
for( let hobby of hobbies){
    console.log(hobby);
}

// step 2
console.log(hobbies.map(hobby => {
    return 'Hobby : '+ hobby;
}))

// step 3

console.log(hobbies.map(hobby => 'Hobby : '+ hobby));


// Array object and reference type

hobbies.push('Badminton');


// spread and rest operator

// spread
// they pull out the properties of object or array

const copiedArray = [...hobbies];
console.log(copiedArray);

// for object pass with {}


// Rest -> to merge multiple argument in one 

const toArray = (...args) => {
    return args;
};

console.log(toArray(1,2,3,4,5));
// this keyword in JavaScript
// The this keyword refers to the object that is executing the current function.

// Example 1: In a regular function, this refers to the global object (window in browsers)
function regularFunction() {
    console.log(this); // In a browser, this will log the window object
}
regularFunction();

// In strict mode, this will be undefined in a regular function
function strictFunction() {
    'use strict';
    console.log(this); // In strict mode, this will be undefined
}
strictFunction();


// Example 2: In an object method, this refers to the object itself
const obj = {
    name: 'Alice',
    greet: function() {
        console.log(`Hello, my name is ${this.name}`); // this refers to obj
    }
};
obj.greet(); // Output: Hello, my name is Alice

// Example 3: In an arrow function, this refers to the enclosing lexical context
const arrowFunctionExample = {
    name: 'Bob',
    greet: () => {
        console.log(`Hello, my name is ${this.name}`); // this does not refer to arrowFunctionExample
    }
};
arrowFunctionExample.greet(); // Output: Hello, my name is undefined

const arrowFunctionExample2 = () => {
    console.log(this); // this refers to the global object (window in browsers)
};
arrowFunctionExample2(); // Output: window object (or global object in Node.js)


// Example 4: In a constructor function, this refers to the newly created object
function Person(name) {
    this.name = name; // this refers to the new object being created
}
const person1 = new Person('Charlie');
console.log(person1.name); // Output: Charlie


// Example 5: In a class method, this refers to the instance of the class
class Animal {
    constructor(name) {
        this.name = name; // this refers to the instance of the class
    }
}
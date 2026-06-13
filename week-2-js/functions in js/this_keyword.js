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


// QnA 

// Conceptual Questions

// Q1: What does the this keyword refer to in a regular function?
// A1: In a regular function, the this keyword refers to the global object (window in browsers). However, in strict mode, it will be undefined.

// Q2: How does the this keyword behave in an object method?
// A2: In an object method, the this keyword refers to the object itself. For example, if you have an object with a method, this will refer to that object when the method is called.

// Q3: What is the behavior of the this keyword in an arrow function?
// A3: In an arrow function, the this keyword does not refer to the function itself. Instead, it refers to the enclosing lexical context, which is the value of this in the surrounding code where the arrow function is defined.

// Q4: How does the this keyword work in a constructor function?
// A4: In a constructor function, the this keyword refers to the newly created object that is being constructed. When you use the new keyword to create an instance of a constructor function, this will point to that new instance.    

// Interview Questions

// Q1: Can you explain the difference between how this works in regular functions and arrow functions?
// A1: In regular functions, the this keyword refers to the global object (window in browsers) or is undefined in strict mode. In contrast, in arrow functions, the this keyword does not have its own context and instead inherits the value of this from the enclosing lexical context. This means that in an arrow function, this will refer to whatever this refers to in the surrounding code where the arrow function is defined.

// Q2: How can you change the value of this in a function?
// A2: You can change the value of this in a function using the call(), apply(), or bind() methods. The call() and apply() methods allow you to invoke a function with a specific this value, while the bind() method creates a new function with a specified this value that can be called later. For example:
function greet() {
    console.log(`Hello, my name is ${this.name}`);
}
const person = { name: 'Dave' };
greet.call(person); // Output: Hello, my name is Dave

// Q3: What happens if you use the this keyword in a function that is not called as a method of an object?
// A3: If you use the this keyword in a function that is not called as a method of an object, it will refer to the global object (window in browsers) in non-strict mode. In strict mode, it will be undefined. For example:
function standaloneFunction() {
    console.log(this); // In non-strict mode, this will log the window object; in strict mode, it will be undefined
}
standaloneFunction();

// Q4: Can you give an example of how the this keyword can lead to unexpected behavior in JavaScript?
// A4: One common example of unexpected behavior with the this keyword is when using it inside a callback function or an event handler. In such cases, this may not refer to the expected object. For instance:
const button = document.querySelector('button');
button.addEventListener('click', function() {
    console.log(this); // In this case, this will refer to the button element, not the surrounding object
});

// To avoid this issue, you can use an arrow function for the event handler, which will inherit the this value from the surrounding context:
button.addEventListener('click', () => {
    console.log(this); // In this case, this will refer to the surrounding context, not the button element
}); 
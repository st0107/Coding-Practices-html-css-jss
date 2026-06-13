// Objest literals are a way to create objects in JavaScript using a simple syntax. They allow you to define properties and methods directly within curly braces. Here's an example of an object literal:

// example of an object literal
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
};

// You can access the properties and methods of the object using dot notation or bracket notation. For example:
console.log(person.firstName); // Output: John
console.log(person['lastName']); // Output: Doe
console.log(person.fullName()); // Output: John Doe

// You can also add new properties or methods to the object after it has been created. For example:
person.gender = 'male';
console.log(person.gender); // Output: male

// Object literals are a convenient way to create objects, especially when you need to define a small number of properties and methods. However, for more complex objects or when you need to create multiple instances of an object, you might want to consider using constructor functions or classes instead.

// short hand for creating an object literal
const name = 'Alice';
const age = 25;
const person2 = {
    name,
    age,
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
};
console.log(person2.greet()); // Output: Hello, my name is Alice and I am 25 years old.

// Object literals can also be nested, allowing you to create more complex data structures. For example:
const company = {
    name: 'Tech Co.',
    employees: [
        { name: 'Alice', position: 'Developer' },
        { name: 'Bob', position: 'Designer' }
    ],
    getEmployeeNames() {
        return this.employees.map(employee => employee.name);
    }
};
console.log(company.getEmployeeNames()); // Output: ['Alice', 'Bob']

// Moreover, you can use object literals to create objects with dynamic property names using computed property names. For example:
const dynamicKey = 'email';
const user = {
    name: 'Charlie',
    [dynamicKey]: 'charlie@example.com'
};
console.log(user.email); // Output: charlie@example.com

// In summary, object literals are a powerful and flexible way to create objects in JavaScript. They allow you to define properties and methods in a concise manner, making it easy to create and manage objects in your code.


// the Difference between Object Literals and Object.create()

// Object literals and Object.create() are two different ways to create objects in JavaScript, each with its own advantages and use cases.

// Object Literals:
// Object literals are a simple and concise way to create objects. They allow you to define properties and methods directly within curly braces. For example:
const person = {
    name: 'Alice',
    age: 25,
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
};
console.log(person.greet()); // Output: Hello, my name is Alice and I am 25 years old.

// Object.create():
// Object.create() is a method that creates a new object with the specified prototype object and properties. It allows you to create objects that inherit from a prototype, which can be useful for creating more complex objects or when you want to share methods across multiple instances. For example:
const personPrototype = {
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
};

const person2 = Object.create(personPrototype);
person2.name = 'Bob';
person2.age = 30;
console.log(person2.greet()); // Output: Hello, my name is Bob and I am 30 years old.

// If Discussing the differences between Object Literals and Object.create(), we can summarize as follows:

// 1. Syntax: Object literals use a simple and concise syntax, while Object.create() requires a more verbose syntax to create objects with a specified prototype.
// 2. Inheritance: Object literals do not support inheritance, while Object.create() allows you to create objects that inherit from a prototype, enabling code reuse and sharing of methods across multiple instances.
// 3. Use Cases: Object literals are ideal for creating simple objects with a small number of properties and methods, while Object.create() is better suited for creating more complex objects or when you want to create multiple instances that share common behavior through a prototype.


let obj = Object.create(null);
console.log(obj); // Output: {}
console.log(obj.toString); // Output: undefined

let obj2 = {};
console.log(obj2); // Output: {}
console.log(obj2.toString); // Output: [Function: toString]

// you can see that obj created with Object.create(null) does not have the toString method, while obj2 created with an object literal does have the toString method inherited from Object.prototype. This illustrates the difference in inheritance between the two approaches.



// QnA:

// Q1: Explain the functional difference between creating an object using an object literal (const obj = {}) versus using Object.create(null)

// A1: The functional difference between creating an object using an object literal (const obj = {}) and using Object.create(null) is that the former creates an object that inherits from Object.prototype, while the latter creates an object that does not inherit from any prototype. This means that an object created with an object literal will have access to built-in methods like toString(), hasOwnProperty(), and others, while an object created with Object.create(null) will not have access to these methods and will only contain the properties explicitly defined on it. This can be useful in certain scenarios where you want to create a plain object without any inherited properties or methods.

// Q2: How does the JavaScript engine handle duplicate property keys defined within a single object literal? (e.g., const obj = { a: 1, a: 2 };)

// A2: When duplicate property keys are defined within a single object literal, the JavaScript engine will use the last defined value for that key. In the example const obj = { a: 1, a: 2 };, the property 'a' is defined twice. The first definition assigns the value 1 to 'a', but the second definition overwrites it with the value 2. As a result, the final value of 'a' in the object will be 2. Therefore, when you access obj.a, it will return 2.

// Q3: In modern JavaScript, when would it be considered a best practice to use a Map instead of a standard object literal for storing key-value pairs?

// A3: In modern JavaScript, it is considered a best practice to use a Map instead of a standard object literal for storing key-value pairs when you need to maintain the order of insertion, when you require keys that are not strings (e.g., objects or functions), or when you need to perform frequent additions and deletions of key-value pairs. Maps provide better performance for these operations compared to standard objects, which can have issues with prototype inheritance and may not maintain the order of keys. Additionally, Maps have built-in methods like set(), get(), has(), and delete() that make it easier to work with key-value pairs compared to using plain objects.

// for example, if you need to store a collection of key-value pairs where the keys are objects, using a Map would be more appropriate:
// const myMap = new Map();
// const keyObj = { id: 1 };
// myMap.set(keyObj, 'value associated with keyObj');
// console.log(myMap.get(keyObj)); // Output: value associated with keyObj

// In this example, using a Map allows us to use an object as a key, which is not possible with a standard object literal. Additionally, the Map will maintain the order of insertion, which can be beneficial in certain scenarios.

// Q4: Explain how you could use ES6 Computed Property Names to handle state updates efficiently when dealing with multiple form input fields (e.g., handling onChange events in React or Vanilla JS)

// A4: ES6 Computed Property Names allow you to dynamically define property keys in an object literal. This can be particularly useful when handling state updates for multiple form input fields, as it allows you to update the state based on the name of the input field that triggered the onChange event.

// For example, in a React component, you could have a state object that holds the values of multiple form input fields. When an onChange event occurs, you can use the name attribute of the input field to determine which property in the state object to update. Here's how you could implement this:
//  ```jsx
// import React, { useState } from 'react';

// function MyForm() {
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         email: ''
//     });

//     const handleChange = (event) => {
//         const { name, value } = event.target;
//         setFormData(prevState => ({
//             ...prevState,
//             [name]: value // Using computed property names to update the specific field
//         }));
//     };
//    return (
//         <form>
//             <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
//             <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
//             <input type="email" name="email" value={formData.email} onChange={handleChange} />
//         </form>
//     );
// }
// In this example, the handleChange function uses the name attribute of the input field to determine which property in the formData state object to update. By using computed property names ([name]), we can efficiently update the state for multiple input fields without having to write separate handlers for each field. This approach keeps the code clean and scalable, especially when dealing with forms that have many input fields.

// Q5: What happens to the this context when you define an arrow function as a method inside an object literal, and why does this occur?

// A5: When you define an arrow function as a method inside an object literal, the this context does not refer to the object itself. Instead, it refers to the surrounding lexical context in which the arrow function was defined. This occurs because arrow functions do not have their own this binding; they inherit the this value from the enclosing scope at the time they are defined.

// For example:
// const obj = {
//     name: 'Alice',
//     greet: () => {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// };
// obj.greet(); // Output: Hello, my name is undefined

// In this example, the greet method is defined as an arrow function. When we call obj.greet(), the this context inside the arrow function does not refer to obj, but rather to the global scope (or undefined in strict mode). As a result, this.name is undefined, and the output is "Hello, my name is undefined". To fix this issue, you should use a regular function instead of an arrow function for methods that need to access the object's properties using this. For example:
// const obj2 = {
//     name: 'Bob',
//     greet: function() {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// };
// obj2.greet(); // Output: Hello, my name is Bob



// Interview Question:

// Q1 : Serialization: "Imagine we are sending a complex object literal to a backend server using JSON.stringify(). This object contains primitive data, methods (functions), undefined values, and Symbol keys. Walk me through exactly what gets serialized, what gets lost, and why."

// A1: When we use JSON.stringify() to serialize a complex object literal that contains primitive data, methods (functions), undefined values, and Symbol keys, the following happens:

// 1. Primitive Data: All primitive data types (such as strings, numbers, booleans, null) will be serialized correctly and included in the resulting JSON string.

// 2. Methods (Functions): Functions are not serializable in JSON. When JSON.stringify() encounters a function, it will omit it from the resulting JSON string. This means that any methods defined on the object will be lost during serialization.

// 3. Undefined Values: Similar to functions, undefined values are also not serializable in JSON. If a property of the object has an undefined value, it will be omitted from the resulting JSON string.

// 4. Symbol Keys: Symbol keys are not supported in JSON serialization. If an object has properties with Symbol keys, those properties will be ignored and not included in the resulting JSON string.

// In summary, when using JSON.stringify() on a complex object literal, only the primitive data will be serialized and included in the resulting JSON string. Methods (functions), undefined values, and Symbol keys will be lost during serialization because they are not supported in JSON. This is important to keep in mind when sending data to a backend server, as any functions or undefined values will not be transmitted, and Symbol keys will be ignored.


// Q2: Immutability: "In many modern applications, state is expected to be immutable. If you have a deeply nested object literal, what built-in JavaScript methods or techniques can you use to enforce immutability, and what are the limitations of those built-in approaches?"

// A2: To enforce immutability in a deeply nested object literal, you can use the following built-in JavaScript methods and techniques:

// 1. Object.freeze(): This method can be used to freeze an object, preventing any modifications to its properties. However, Object.freeze() only performs a shallow freeze, meaning that it does not affect nested objects. To achieve immutability for deeply nested objects, you would need to recursively freeze each nested object as well.
function deepFreeze(obj) {
    Object.freeze(obj);
    Object.keys(obj).forEach(key => {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            deepFreeze(obj[key]);
        }
    });
    return obj;
}

// 2. Spread Operator and Object.assign(): These techniques can be used to create new objects with updated properties, rather than modifying the original object. However, they also only perform a shallow copy, meaning that nested objects will still be mutable unless you also create new copies of those nested objects.
const original = { a: 1, b: { c: 2 } };
const updated = { ...original, b: { ...original.b, c: 3 } };
console.log(original); // Output: { a: 1, b: { c: 2 } }
console.log(updated); // Output: { a: 1, b: { c: 3 } }

// 3. Libraries: There are libraries like Immutable.js or Immer that provide more robust solutions for handling immutability in JavaScript. These libraries offer features like persistent data structures and efficient updates without mutating the original object. However, using these libraries can add complexity to your project and may require additional learning.

// Limitations of built-in approaches:
// - Shallow Freezing: Object.freeze() and the spread operator only perform shallow operations, which means that nested objects can still be modified unless you take additional steps to freeze or copy them.
// - Performance: Recursively freezing or copying deeply nested objects can have performance implications, especially if the object is large or has many levels of nesting.
// - Complexity: Managing immutability manually can lead to more complex code, especially when dealing with deeply nested structures. This can make it harder to maintain and understand the codebase over time.

// In conclusion, while there are built-in methods and techniques to enforce immutability in JavaScript, they have limitations when it comes to deeply nested objects. To achieve true immutability, you may need to use additional libraries or implement custom solutions that handle deep freezing or copying of objects.


// Q3: Prototypal Inheritance: "Can you explain how prototypal inheritance works in JavaScript, and how it differs from classical inheritance in other programming languages? Additionally, can you provide an example of how to create a prototype chain using Object.create()?"

// A3: Prototypal inheritance in JavaScript is a mechanism by which objects can inherit properties and methods from other objects. In JavaScript, every object has an internal property called [[Prototype]], which points to another object. When you try to access a property or method on an object, JavaScript first looks for it on the object itself. If it doesn't find it there, it looks up the prototype chain until it finds the property or reaches the end of the chain (null).

// This differs from classical inheritance in other programming languages, where classes are used to define blueprints for objects, and instances of those classes inherit properties and methods. In JavaScript, there are no classes (until ES6 introduced class syntax, which is syntactic sugar over prototypal inheritance), and objects can directly inherit from other objects without the need for a class structure.

// Example of creating a prototype chain using Object.create():
const animal = {
    eat() {
        console.log('The animal is eating.');
    }
};
const dog = Object.create(animal);
dog.bark = function() {
    console.log('The dog is barking.');
};
const puppy = Object.create(dog);
puppy.name = 'Buddy';
puppy.eat(); // Output: The animal is eating.
puppy.bark(); // Output: The dog is barking.
console.log(puppy.name); // Output: Buddy

// In this example, we have an object 'animal' with a method 'eat'. We create a new object 'dog' that inherits from 'animal' using Object.create(animal). The 'dog' object has its own method 'bark'. Then, we create another object 'puppy' that inherits from 'dog'. The 'puppy' object can access both the 'eat' method from 'animal' and the 'bark' method from 'dog', demonstrating the prototypal inheritance chain.

// Q4. Memory & Performance: "If you need to create 10,000 instances of an object that all share the exact same 5 methods, would you use a factory function returning object literals, or a different approach? Explain the memory implications of your choice."

// A4: If I need to create 10,000 instances of an object that all share the exact same 5 methods, I would use a constructor function or ES6 class to define the shared methods on the prototype, rather than using a factory function that returns object literals. This is because using a constructor function or class allows all instances to share the same methods through the prototype, which is more memory efficient.

// When using a factory function that returns object literals, each instance would have its own copy of the 5 methods, which would lead to a significant increase in memory usage. For example:
function createObject() {
    return {
        method1() { /* ... */ },
        method2() { /* ... */ },
        method3() { /* ... */ },
        method4() { /* ... */ },
        method5() { /* ... */ }
    };
}
const instances = [];   
for (let i = 0; i < 10000; i++) {
    instances.push(createObject());
}
// In this case, each of the 10,000 instances would have its own copy of the 5 methods, resulting in a large memory footprint.

// On the other hand, using a constructor function or class would allow all instances to share the same methods through the prototype, significantly reducing memory usage: 
function MyObject() {}
MyObject.prototype.method1 = function() { /* ... */ };
MyObject.prototype.method2 = function() { /* ... */ };
MyObject.prototype.method3 = function() { /* ... */ };
MyObject.prototype.method4 = function() { /* ... */ };
MyObject.prototype.method5 = function() { /* ... */ };

const instances2 = [];
for (let i = 0; i < 10000; i++) {
    instances2.push(new MyObject());
}
// In this case, all 10,000 instances share the same methods defined on MyObject.prototype, resulting in a much smaller memory footprint compared to the factory function approach. This is because the methods are stored in a single location (the prototype) rather than being duplicated for each instance.

// In conclusion, using a constructor function or class with methods defined on the prototype is the more memory-efficient approach when creating multiple instances that share the same methods, as it allows all instances to reference the same method definitions rather than creating separate copies for each instance.   

// Q5: Object Identity: "If you have two object literals that have the same properties and values, are they considered equal in JavaScript? Why or why not? How can you compare two objects for deep equality?"

// A5: In JavaScript, two object literals that have the same properties and values are not considered equal when using the strict equality operator (===) or the loose equality operator (==). This is because in JavaScript, objects are compared by reference, not by value. When you create an object literal, it creates a new object in memory, and even if two objects have the same properties and values, they are different objects with different references in memory.
const obj1 = { a: 1, b: 2 };
const obj2 = { a: 1, b: 2 };
console.log(obj1 === obj2); // Output: false

// In this example, obj1 and obj2 have the same properties and values, but they are different objects in memory, so they are not considered equal.
// To compare two objects for deep equality, you can use a recursive function that checks if the properties and values of both objects are the same. Here's an example of how to implement such a function:
function deepEqual(obj1, obj2) {
    if (obj1 === obj2) {
        return true; // They are the same reference
    }
    if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
        return false; // One of them is not an object or is null
    }
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
        return false; // They have different number of properties
    }
    for (let key of keys1) {
        if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
            return false; // They have different properties or values
        }
    }
    return true; // They are deeply equal
}
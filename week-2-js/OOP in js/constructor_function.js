// Constructor function

// Defination : A constructor function is a special type of function in JavaScript that is used to create and initialize objects. It is typically defined with a capitalized name and is called using the `new` keyword. When invoked, it creates a new object and sets the context (`this`) to that new object, allowing properties and methods to be added to it.

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// vs 

function person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Creating instances of the Person constructor function
const person1 = new Person('Alice', 30);
const person2 = new Person('Bob', 25);

// Calling the greet method on the instances
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
person2.greet(); // Output: Hello, my name is Bob and I am 25 years old.

const person3 = new person('Lisa', 30);
const person4 = new person('Charlie', 25);

// Calling the greet method on the instances
person3.greet(); // Output: Hello, my name is Lisa and I am 30 years old.
person4.greet(); // Output: Hello, my name is Charlie and I am 25 years old.

// as you can see, both Person and person functions work similarly, but by convention, constructor functions are typically named with an uppercase first letter to distinguish them from regular functions.

// why they both work? because in JavaScript, functions are objects, and when you use the `new` keyword with a function, it creates a new object and sets the context (`this`) to that new object. The capitalization of the function name is just a convention to indicate that it is intended to be used as a constructor function.



// QnA

// Conceptual Questions
// Q1: What is a constructor function in JavaScript?
// A1: A constructor function is a special type of function in JavaScript that is used to create and initialize objects. It is typically defined with a capitalized name and is called using the `new` keyword. When invoked, it creates a new object and sets the context (`this`) to that new object, allowing properties and methods to be added to it.

// Q2: How do you create an instance of a constructor function?
// A2: You create an instance of a constructor function by using the `new` keyword followed by the constructor function name and any necessary arguments. For example:
const person1 = new Person('Alice', 30);
// Q3: What is the purpose of the `this` keyword in a constructor function?
// A3: The `this` keyword in a constructor function refers to the newly created object that is being constructed. It allows you to assign properties and methods to that new object. When you use the `new` keyword to create an instance of a constructor function, `this` will point to that new instance, enabling you to initialize its properties and define its behavior.

// Q4: Can you have multiple constructor functions in a JavaScript application?
// A4: Yes, you can have multiple constructor functions in a JavaScript application. Each constructor function can be used to create different types of objects with their own properties and methods. For example, you could have a `Car` constructor function for creating car objects and a `Person` constructor function for creating person objects, each with their own unique properties and methods.

// Interview Questions

// Q1: Can you explain the difference between a constructor function and a regular function in JavaScript?

// A1: The main difference between a constructor function and a regular function in JavaScript is how they are intended to be used and how they behave when invoked. A constructor function is designed to create and initialize objects, and it is typically called using the `new` keyword. When you invoke a constructor function with `new`, it creates a new object, sets the context (`this`) to that new object, and allows you to define properties and methods on it. In contrast, a regular function is not intended for object creation and does not have this behavior. When you call a regular function, it executes its code without creating a new object or setting the context in the same way as a constructor function. Additionally, by convention, constructor functions are usually named with an uppercase first letter to distinguish them from regular functions.

// Q2: How can you add methods to objects created by a constructor function?

// A2: You can add methods to objects created by a constructor function by defining the methods within the constructor function itself or by adding them to the constructor function's prototype. For example, you can define a method directly in the constructor function like this:
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
// Alternatively, you can add methods to the constructor function's prototype, which allows all instances created by that constructor to share the same method:
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}
// Q3: Can you explain how the `new` keyword works when creating an instance of a constructor function?

// A3: When you use the `new` keyword to create an instance of a constructor function, it performs several steps under the hood. First, it creates a new empty object. Then, it sets the prototype of that new object to the constructor function's prototype, allowing the new object to inherit properties and methods from the constructor's prototype. Next, it binds the `this` keyword within the constructor function to the new object, allowing you to assign properties and methods to it. Finally, it executes the constructor function's code, initializing the new object with any properties or methods defined in the constructor. After these steps are completed, the new object is returned as the result of the `new` expression.

// Q4: Can you give an example of a real-world scenario where a constructor function would be useful?

// A4: A constructor function would be useful in a real-world scenario where you need to create multiple objects with similar properties and methods. For example, if you are building a web application for a school, you might use a constructor function to create `Student` objects, each with properties like `name`, `age`, and `grade`, and methods like `enrollInCourse()` or `submitAssignment()`. This allows you to easily create many student objects with consistent structure and behavior.

// Q5: How does a constructor function differ from a class in JavaScript?

// A5: A constructor function and a class in JavaScript are both used to create objects, but they differ in syntax and some underlying behavior. A constructor function is defined as a regular function that uses the `this` keyword to assign properties and methods to the new object. In contrast, a class is defined using the `class` keyword and provides a more structured and concise syntax for creating objects. Classes also support features like inheritance through the `extends` keyword and have a built-in constructor method for initializing properties. While both constructor functions and classes can achieve similar results, classes are generally considered more modern and easier to read, especially for developers coming from other object-oriented programming languages.

// Q6: Can we use arrow functions as constructor functions in JavaScript? Why or why not?

// A6: No, we cannot use arrow functions as constructor functions in JavaScript. This is because arrow functions do not have their own `this` context. When you try to use an arrow function as a constructor with the `new` keyword, it will throw a TypeError because arrow functions cannot be used as constructors. The `this` keyword in an arrow function refers to the enclosing lexical context, which is not suitable for creating new objects in the way that constructor functions do. Therefore, if you need to create objects using a constructor function, you should use a regular function instead of an arrow function.

// Example of using an arrow function in a constructor function (which will not work):
const Person = (name, age) => {
    this.name = name; // This will not work as expected
    this.age = age;   // This will not work as expected
    this.greet = function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person1 = new Person('Alice', 30); // This will throw a TypeError

// In summary, constructor functions are a fundamental part of JavaScript's object-oriented programming capabilities, allowing you to create and initialize objects with shared properties and methods. Understanding how they work and how to use them effectively is crucial for building complex applications in JavaScript.

// Q7: Can you explain how to use the `prototype` property to add methods to objects created by a constructor function?

// A7: The `prototype` property of a constructor function allows you to add methods (and properties) that will be shared by all instances created by that constructor. When you add a method to the constructor's prototype, it becomes available to all instances of that constructor without having to define the method inside the constructor function itself. This is more memory efficient, as all instances will reference the same method rather than creating a new copy for each instance.

// Example of using the `prototype` property to add a method:
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding a method to the prototype
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}
// Creating instances of the Person constructor function
const person1 = new Person('Alice', 30);
const person2 = new Person('Bob', 25);

// Calling the greet method on the instances
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
person2.greet(); // Output: Hello, my name is Bob and I am 25 years old.

// By using the `prototype` property, we ensure that the `greet` method is shared among all instances of `Person`, which can lead to better performance and memory usage, especially when creating many instances.


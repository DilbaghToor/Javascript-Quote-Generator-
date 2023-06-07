
// prototype in javascript 
//it is used to add new properties and methods to an existing object construction

// function person(_name, _age, _dob) {
//     this.name = _name;
//     this.age = _age;
//     this.dob = _dob;
// }

// let person1 = new person("dilbagh", 23, "15-may-2023");

// person.prototype.qualification = "B.tech";

// console.log(person1);

//we can also add methods with the hellp of prototype

//call apply and Bind methods 

// call method --> with this method an object can use a method belonging to another object

// let person1 = {
//     firstName : 'Dilbagh',
//     lastName : 'Singh',
//     printDetails : function() {
//         console.log(`Hello i am ${this.firstName} ${this.lastName}`);
//     }
    
// }

// let person2 = {
//     firstName : 'Vikash',
//     lastName : 'Kumar',
//     printDetails : function() {
//         console.log(`Hello i am ${firstName} ${lastName}`);
//     }
    
// }

// //call 

// person1.printDetails.call(person2);

//also we can make function global and call it


// let person1 = {
//     firstName : 'Dilbagh',
//     lastName : 'Singh',
    
    
// }

// let printDetails  = function() {
//     console.log(`Hello i am ${this.firstName} ${this.lastName}`);
// }

// let person2 = {
//     firstName : 'Vikash',
//     lastName : 'Kumar',
   
// }

// //call 
// printDetails.call(person2);

//also we  can pass argument

// let person1 = {
//     firstName : 'Dilbagh',
//     lastName : 'Singh',
    
    
// }

// let printDetails  = function(age) {
//     console.log(`Hello i am ${this.firstName} ${this.lastName} my age is ${age} year old`);
// }

// let person2 = {
//     firstName : 'Vikash',
//     lastName : 'Kumar',
// }

// printDetails.call(person2, '23');


// apply method is simlar to call but argument passed in array


// let person1 = {
//     firstName : 'Dilbagh',
//     lastName : 'Singh',
    
    
// }

// let printDetails  = function(age, edu) {
//     console.log(`Hello i am ${this.firstName} ${this.lastName} my age is ${age} year old i have done ${edu}`);
// }

// let person2 = {
//     firstName : 'Vikash',
//     lastName : 'Kumar',
// }

// printDetails.apply(person2, ['23', 'B.tech']);

// //Bind method

// //help you tu save function in variable and call it when you want

// let myFun = printDetails.bind(person2, '23', 'B.tech');

// console.log(myFun);

// myFun();

// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//    }
//    const member = new Person('Lydia', 'Hallie');
//    getFullName = function() {
   
//    return `${this.firstName} ${this.lastName}`;
   
//    };
//    console.log(getFullName.call(member));

// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     }
//     const lydia = new Person('Lydia', 'Hallie');
//     const sarah = new Person('Sarah', 'Smith');
//     console.log(lydia);
//     console.log(sarah);

// const bird = {
//     size: 'small',
//    };
   
//    const mouse = {
//     name: 'Mickey',
//     small: true,
//    };

//    console.log(mouse.bird.size);

const shape = {
    radius: 10,
    diameter() {
    return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius,
   };
   
   console.log(shape.diameter());
   console.log(shape.perimeter());
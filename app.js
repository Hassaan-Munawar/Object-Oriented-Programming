// class Car {
//     constructor(brand, speed) {
//         this.brand = brand;
//         this.speed = speed;
//     }
//     drive() {
//         console.log(`${this.brand} is driving at ${this.speed}km/h`);
//     }
// }

// const myCar = new Car("Toyota", 120);
// myCar.drive()

// mini challenge 1

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     introduce() {
//         console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old.`);
//     }
// }

// const myIntro = new Person("Hassaan", 17);
// myIntro.introduce()



// bonus challenge

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     introduce() {
//         console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old.`);
//     }
//     haveBirthday() {
//         this.age += 1
//         console.log(`🎉 Happy Birthday, ${this.name}! You are now ${this.age} years old.`);
//     }
// }

// const personIntro = new Person("Ayesha", 20);
// personIntro.introduce();
// personIntro.haveBirthday();
// personIntro.introduce();


// mini challenge 2

// class Student {
//     constructor(name, grade) {
//         this.name = name;
//         this.grade = grade;
//     }
//     displayInfo() {
//         console.log(`Student: ${this.name}, Grade: ${this.grade}`);
//     }
// }

// const studentInfo = new Student("Ali", 7);
// const studentInfo2 = new Student("Raza", 9);
// studentInfo.displayInfo();
// studentInfo2.displayInfo();



// Encapsulation

// class BankAccount {
//     #balance
//     constructor(owner, initialBalance) {
//         this.owner = owner;
//         this.#balance = initialBalance;
//     }
//     deposit(amount) {
//         if (amount > 0) {
//             this.#balance += amount;
//         }
//     }
//     getBalance() {
//         return this.#balance;
//     }
// }

// const account = new BankAccount("Hassaan", 1000);
// account.deposit(500);
// console.log(account.getBalance());


// class Person {
//     #age
//     constructor(name, age) {
//         this.name = name;
//         this.#age = age
//     }
//     get age() {
//         return this.#age;
//     }
//     set age(value) {
//         if (value >= 0 && value <= 120) {
//             this.#age = value;
//         }
//         else {
//             console.log(`Invalid Age`);
//         }
//     }
// }

// const p = new Person("Ali", 25)
// console.log(p.age);
// p.age = 20
// console.log(p.age)



// mini challenge 3

// class EmailAccount {
//     #password
//     constructor(password) {
//         this.#password = password
//     }
//     checkPassword(input) {
//         if (input === this.#password) {
//             return true;
//         }
//         else {
//             return false;
//         }
//     }
//     set password(value) {
//         if (value.length >= 6) {
//             this.#password = value;
//         }
//         else {
//             console.log("❌ Password must be at least 6 characters.");
//         }
//     }
// }

// const createAccount = new EmailAccount("abc123");
// console.log(createAccount.checkPassword("abc123"));
// createAccount.password = "abc";
// console.log(createAccount.checkPassword("abc"));
// createAccount.password = "abcdef";
// console.log(createAccount.checkPassword("abcdef"));


// Inheritance

// class Parent {
//     constructor(name) {
//         this.name = name;
//     }
//     greet() {
//         console.log(`Hello I'm ${this.name}`);
//     }
// }

// class Child extends Parent {
//     constructor(name, age) {
//         super(name)
//         this.age = age;
//     }
//     showAge() {
//         console.log(`${this.name} is ${this.age} years old`);
//     }
// }

// const c = new Child("Ali", 20)
// c.greet();
// c.showAge();

// mini challenge 4

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     makeSound() {
//         console.log(`Generic Animal Sound`);
//     }
// }

// class Dog extends Animal {
//     constructor(name, breed) {
//         super(name)
//         this.breed = breed;
//     }
//     makeSound(){
//         super.makeSound();
//         console.log(`${this.name} (a ${this.breed}) says: Woof!`);
//     }
// }

// const a = new Animal("Dog")
// a.makeSound();
// const d = new Dog("Rocky","German Shepherd");
// d.makeSound();


// Polymorphism

// class Animal {
//     constructor(name) {
//         this.name = name;    
//     }
//     makeSound(){
//         console.log(`${this.name} makes a sound.`);
//     }
// }

// class Cat extends Animal {
//     makeSound(){
//         console.log(`${this.name} says: Meow!`);
//     }
// }
// class Cow extends Animal {
//     makeSound(){
//         console.log(`${this.name} says: Moo!`);
//     }
// }

// const Animals =[
//     new Animal("Generic"),
//     new Cat("Whiskers"),
//     new Cow("Bessie")
// ];
// Animals.forEach((animal)=>{
//     animal.makeSound();
// });


// mini challenge 5

// class Shape {
//     calculateArea() {

//     }
// }

// class Circle extends Shape {
//     constructor(radius) {
//         super()
//         this.radius = radius;
//     }
//     calculateArea() {
//         console.log(`Area of circle: ${Math.PI * this.radius ** 2}`);
//     }

// }

// class Rectangle extends Shape {
//     constructor(width, height) {
//         super()
//         this.width = width;
//         this.height = height;
//     }
//     calculateArea() {
//         console.log(`Area of rectangle: ${this.width * this.height}`);
//     }
// }

// const c = new Circle(5);
// const r = new Rectangle(30, 15);
// const arrayOfShapes = [c, r]
// arrayOfShapes.forEach((shape) => {
//     shape.calculateArea();
// });




// static method

// class MathUtil {
//     static square(n) {
//         return n * n;
//     }
// }
// console.log(MathUtil.square(2));


// mini challenge 6

// class TemperatureConverter {
//     #celsius
//     constructor(celsius) {
//         this.#celsius = celsius

//     }
//     static celsiusToFarenheit(c) {
//         console.log(`The temperature in Farenheit is ${(c * 9 / 5) + 32}.`);
//     }
//     get farenheit() {
//         return (this.#celsius * 9 / 5) + 32;

//     }
//     set farenheit(value) {
//         this.#celsius = (value - 32) * 5 / 9
//     }
//     getCelsius() {
//         return this.#celsius;
//     }
// }

// TemperatureConverter.celsiusToFarenheit(100);
// const temp = new TemperatureConverter(30);
// console.log(temp.getCelsius());
// console.log(temp.farenheit);
// temp.farenheit = 212;
// console.log(temp.farenheit);


// Composition

// function canWalk(obj) {
//     obj.walk = () => console.log("Walking...");
// }
// function canEat(obj) {
//     obj.eat = () => console.log("Eating...");
// }

// const person = {};

// canWalk(person);
// canEat(person);

// person.walk();
// person.eat();


// mini challenge 7

// function canSpeak(obj) {
//     obj.speak = ()=> console.log("Beep Beep");
// };
// function canMove(obj) {
//     obj.move = () => console.log("Rolling...");
// };
// const robot ={};

// canSpeak(robot);
// canMove(robot);

// robot.speak();
// robot.move();



// factory design pattern

// function createUser(name, role) {
//     return {
//         name,
//         role,
//         describe() {
//             console.log(`${this.name} is a ${this.role}`);
//         }
//     };
// };
// const u1 = createUser("Hassaan","admin")
// const u2 = createUser("Ali","guest")

// u1.describe();
// u2.describe();


// mini challenge 8

// function createCar(brand, type) {
//     return {
//         brand,
//         type,
//         drive() {
//             console.log(`Driving a ${this.type} by ${this.brand}`);
//         }
//     };
// };
// const c1 = createCar("Toyota", "SUV");
// const c2 = createCar("Tesla", "Electric");

// c1.drive();
// c2.drive();




// singleton design pattern

// const Database = (function () {
//     let instance;
//     function createInstance() {
//         return {
//             connection: "Connected to database",
//             time: Date.now()
//         };
//     };
//     return {
//         getInstance() {
//             if (!instance) {
//                 instance = createInstance();
//             };
//             return instance;
//         }
//     };
// })();

// const db1 = Database.getInstance();
// const db2 = Database.getInstance();

// console.log(db1 === db2);



// mini challenge 9

// const Logger = (function () {
//     let instance;
//     let logs = [];
//     function createInstance() {
//         return {
//             log(message) {
//                 logs.push(`[${new Date().toISOString()}] ${message}`);
//             },
//             getLogs() {
//                 return logs;
//             }
//         }
//     }
//     return {
//         getInstance() {
//             if (!instance) {
//                 instance = createInstance();
//             }
//             return instance;
//         }
//     };
// }
// )();

// const logger1 = Logger.getInstance();
// const logger2 = Logger.getInstance();

// logger1.log("App started");
// logger2.log("User logged in");

// console.log(logger1.getLogs());
// console.log(logger1 === logger2);



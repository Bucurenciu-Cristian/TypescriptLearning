"use strict";
//Basic Types
let id = 5;
let company = "Salutare";
let isTrue = true;
let x = "Sa vina cabana";
let ids = [1, 2, 3, 4, 5];
// ids.push("salut")
let arr = ["tata", 1, 4, { events: "salut" }];
// console.log(id);
// Tuple
let person = [1, "Tata", false];
//Tuple Array
let employee;
employee = [
    [1, "Brad"],
    [2, "john"],
    [3, "Jill"],
];
//Union
let numar = 22;
//Enum
var Direction1;
(function (Direction1) {
    Direction1["Up"] = "Up";
    Direction1["Down"] = "Down";
    Direction1["Left"] = "Left";
    Direction1["Right"] = "Right";
})(Direction1 || (Direction1 = {}));
const user = { id: 1, name: "false" };
//Type Assertion
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
// customerId = true;
//Functions
function addNum(x, y) {
    return x + y;
}
const log = (message) => {
    console.log(message);
};
const user1 = { id: 1, name: "false" };
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
//Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    _register() {
        return `${this.name} is now registered`;
        // return 1;
    }
}
const Tata = new Person(1, "Adrian Bucurenciu");
const Mama = new Person(1, "Nicoleta Bucurenciu");
// Mama.id = 3; this doesn't work because of protected or private
// console.log(Tata._register());
// console.log(Mama._register());
//subclasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, "Duolingo", "Developer");
console.log(emp._register());
//Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4, 5, 6]);
let strArray = getArray(["Salam", "Prajit"]);
numArray.push(123);
strArray.push("12");

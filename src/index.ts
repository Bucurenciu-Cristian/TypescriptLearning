//Basic Types
let id: number = 5;
let company: string = "Salutare";
let isTrue: boolean = true;
let x: any = "Sa vina cabana";

let ids: number[] = [1, 2, 3, 4, 5];

// ids.push("salut")

let arr: any[] = ["tata", 1, 4, { events: "salut" }];

// console.log(id);

// Tuple
let person: [number, string, boolean] = [1, "Tata", false];

//Tuple Array
let employee: [number, string][];

employee = [
  [1, "Brad"],
  [2, "john"],
  [3, "Jill"],
];

//Union
let numar: string | number = 22;

//Enum
enum Direction1 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}
// console.log(Direction1.Right);
//Objects
type User = { id: number; name: string };

const user: User = { id: 1, name: "false" };
//Type Assertion
let cid: any = 1;
// let customerId = <number>cid
let customerId = cid as number;
// customerId = true;

//Functions
function addNum(x: number, y: number): number {
  return x + y;
}
const log = (message: string | number): void => {
  console.log(message);
};

//Interfaces

interface UserInterface {
  readonly id: number; // Proprietate care poate fi doar citita, nu scrisa | modificata
  name: string;
  age?: number; // this is an  optional argument
}

const user1: UserInterface = { id: 1, name: "false" };

// type Point = number | string; // This is correct
// interface Point = number | string; // This doesn't work because interface work best with the objects, not primitives or unions
// const p1: Point = 1;

//Function interface
interface MathFunc {
  (x: number, y: number): number;
}
const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

interface PersonInterface {
  id: number; // Proprietate care poate fi doar citita, nu scrisa | modificata
  name: string;
  _register(): string;
}

//Classes
class Person implements PersonInterface {
  id: number;
  name: string;
  constructor(id: number, name: string) {
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
  position: string;
  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Employee(3, "Duolingo", "Developer");
console.log(emp._register());

//Generics

function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}
let numArray = getArray<number>([1, 2, 3, 4, 5, 6]);
let strArray = getArray<string>(["Salam", "Prajit"]);
numArray.push(123)
strArray.push("12")


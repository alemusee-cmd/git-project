// // console.log(10);
// // console.log("Hello world");

// // console.log(10 + 10);
// // console.log(10 - 5);
// // console.log(10 / 2);
// // console.log(10 * 2);

// // console.log(10 % 3);
// // console.log(10 ** 2); // 10 to the power of 2

// // let x = 10;
// // x += 5;
// // console.log(x);
// // console.log("hello " + "world");

// // // variables
// // let name = "Yehuda";
// // console.log("Hello " + name);
// // let age = 30;
// // console.log("I am " + age + " years old");

// // constants
// // const birthYear = 1991;
// // console.log("My birth year is " + birthYear);
// // // birthYear = 1991; // This will cause an error because birthYear is a constant

// // exercise
// // let firstName = "Yehuda";
// // let age = 30;
// // const country = "Israel";

// // // backticks and template literals
// // console.log(
// //   `My name is ${firstName}, I am ${age} years old and I live in ${country}.`,
// // );
// // console.log(`In 5 years, I will be ${age + 5} years old.`);

// // if conditions
// // if(condition) {

// // }
// // console.log(10 > 8);
// // console.log(10 < 8);

// // let age = 30;
// // if (age > 18) {
// //   console.log("You are an adult.");
// // } else {
// //   console.log("You are a minor.");

// //   let age = 30;
// //   let haTicke = true;
// //   if (age > 18 && haTicke === true) {
// //     console.log("You are an adult and have a ticket.");
// //   }
// // }
// // const randomnumber = Math.random();
// // if (randomnumber >= 0 && randomnumber < 1 / 3) {
// //   console.log("Greater than or equal to 0");
// // }
// // = assignment operator
// // == equality operator (loose equality)
// // === strict equality operator

// // console.log(10 == "10"); // true
// // console.log(10 === "10"); // false
// // function name() {
// //   let firstName = "alemu";
// //   console.log(firstName);
// // }
// // name();

// // function givenumber() {
// //   return 5;
// // }
// // const result = givenumber();
// // console.log(result);

// const user = {
//   name: "alemu",
//   age: 28,
//   city: "netanya",
// };

// // json - java script object notation
// console.log(user);
// const userStringified = JSON.stringify(user);
// console.log(userStringified);
// const parseduser = JSON.parse(userStringified);
// console.log(parseduser);

// DOM = Document object model

// console.log(document.body);
// console.log((document.title = "text line"));
// console.log((document.body.innerHTML = "you name it"));
// console.log(document.querySelector('.Rock'));
// const RocBtn = document.querySelector('.Rock')
// RocBtn.innerHTML = 'test'
// console.log(RocBtn);

function numbers1() {
  console.log(5);
}

const numbers2 = function () {
  console.log(5);
};
numbers2();

const numbers3 = () => {
  console.log(5);
};
numbers3();

const numbers4 = (num1, num2) => num1 + num2;
const prices = (price, quantity) => price * quantity;
console.log(prices(50, 3));
console.log(prices(80, 6));

console.log(!true);

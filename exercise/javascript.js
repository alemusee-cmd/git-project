// let name = "Yehuda"; //string
// let age = 35; //number
// let isActive = true; //boolean
// let some = undefined; //undefined
// let userSelect = null;

// console.log(20 + 20);
// let x = 20;

// console.log(x + 20);
// let fullName = "Yehuda";
// console.log("my name is " + fullName);

// let name = "Yehuda";
// let age = 40;
// const country = "israel";
// console.log(`my name is ${name}, ${age} years old and i live in ${country}`);

// let age = 20;
// if (age >= 18) {
//   console.log("sucess");
// } else {
//   console.log("defiend");
// }
// function name() {
//   let firstName = "Yehuda";
//   console.log(firstName);
// }
// name();

// function givenumber() {
//   return 5;
// }
// const result = givenumber();
// console.log(result);

// var y = 4;
// if (y == 4) {
//   var y = 2;
//   console.log(y);
// }

// function getNumber(x, y) {
//   if (x > 0 && y > 0) {
//     return x * y;
//   }
//   return 0;
// }
// console.log(getNumber(5, 8));
// console.log(getNumber(-9, 8));

// let str = "";
// for (let i = 0; i < 100; i++) {
//   str += i;
// }
// console.log(str);

// for (let i = 0; i < 9; i++) {
//   console.log(i);
// }

// for (let i = ("start" in window) ? window.start : 0; i < 9; i++) {
//   console.log(i);
// }

// let i = 4;
// for (; i < 9; i++) {
//   console.log(i);
//   // more statements
// }

// for (let i = 0; ; i++) {
//   console.log(i);
//   if (i > 10) break;
//   // more statements
// }

// let x = 80;
// if (x === 80) {
//   let x = 100;
//   console.log(x);
// }
// console.log(x);

// function updateBrand(obj) {
//   obj.brand = "Toyota";
//   obj = null;
// }
// const car = {
//   brand: "Honda",
//   model: "Accord",
//   year: 1998,
// };
// console.log(car.brand);
// updateBrand(car);
// console.log(car.brand);
// console.log(car.model);
// console.log(car.year);
// console.log(car.brand + car.model + car.year);

// let selectedColor = "green";
// switch (selectedColor) {
//   case "red":
//     console.log("stop");
//     break;
//   case "yellow":
//     console.log("prepare to drive");
//     break;
//   case "green":
//     console.log("start drive");
//     break;
//   default:
//     console.log("error");
// }

// while
// let i = 0;
// while (i < 10) {
//   console.log("Hello" + i);

//   i = i + 1;
// }

// let i = 0;
// while (i < 10) {
//   console.log("Hello" + (i + 1));

//   //   i += 1;
//   i++;
// }

// let i = 0;
// do {
//   console.log("Hello" + (i + 1));
//   i++;
// } while (i < 10);

// for (let i = 0; 1 < 10; i++) {
//   console.log("Hello" + (i + 1));
// }

// let fruits = ["banana", "mango", "orange", "apple"];
// for (let i = 0; 0 < fruits.length; i++) {
//   console.log(fruits[i]);
// }
// ----------------------------------------------------------
// function drawTriangle() {
//   let triangle = "";
//   let stars = "";
//   for (let i = 0; i < 10; i++) {
//     stars += "*";
//     triangle += stars + "\n";
//   }
//   console.log(triangle);
// }

// drawTriangle();

// function drawTriangle(size) {
//   let triangle = "";
//   let stars = "";
//   for (let i = 0; i < size; i++) {
//     stars += "*";
//     triangle += stars + "\n";
//   }
//   console.log(triangle);
// }

// drawTriangle(8);
// drawTriangle(3);

// ----------------------------------------------------------

// // calculate_vat
// const vat = 0.18;
// let price = 300;

// function calculateTotal(vat, price) {
//   if (vat != 0.18) {
//     return "error: vat amount's incorrect";
//   } else {
//     let taxAmount = price * vat;
//     return price + taxAmount;
//   }
// }
// let sucessResult = calculateTotal(vat, price);
// console.log(sucessResult);

// // checkpassword
// let mypassword = "124sjh6358";
// function checkPassword(password) {
//   if (password.length < 8) {
//     return "error. paosswrd is short";
//   } else {
//     return `your password ${password} success`;
//   }
// }
// let result = checkPassword(mypassword);
// console.log(result);

// checkServerLoad
// let currentUsers = 99999;
// const maxCapacity = 10000;
// function checkServerLoad(users, limit) {
//   if (users > limit) {
//     return "סכנה: השרת קרס!";
//   } else if (users === limit) {
//     return "אזהרה: השרת מלא לחלוטין";
//   } else {
//     return "השרת במצב תקין";
//   }
// }
// let result = checkServerLoad(currentUsers, maxCapacity);
// console.log(result);

// calculateShipping(cart)
// let cartTotal = 500;
// function calculateShipping(cart) {
//   if (cart < 100) {
//     return cart + 30;
//   } else if (cart > 100 && cart <= 300) {
//     return cart + 15;
//   } else {
//     return cart;
//   }
// }
// let result = calculateShipping(cartTotal);
// console.log(result);

// -------------------------------------------------------

// let serverList = ["ok", "ok", "ERROR", "ok"];
// function scanServers(serverList) {
//   for (let i = 0; i < statuses.length; i++) {
//     if (serverList[i] === "ERROR") {
//       return "סכנה: נמצא שרת תקול!";
//     }
//   }
//   return "השרת נמצא תקין";
// }

// let result = scanServers(statuses);
// console.log(result);

// -----------------------------------------------------------
// let cartPrices = [50, 120, 30];
// function calculateCart(Prices) {
//   let total = 0;
//   for (let i = 0; i < Prices.length; i++) {
//     total = total + Prices[i];
//   }
//   return `הסכום הכולל לתשלום הוא: ${total} ש"ח`;
// }
// let result = calculateCart(cartPrices);
// console.log(result);

// -------------------------------------------------------------
// let serverLogs = [
//   "INFO",
//   "ERROR",
//   "WARNING",
//   "INFO",
//   "ERROR",
//   "ERROR",
//   "ERROR",
// ];
// function countError(logs) {
//   let errorCounts = 0;
//   for (let i = 0; i < logs.length; i++) {
//     if (logs[i] === "ERROR") {
//       errorCounts++;
//     }
//   }
//   return `there are ${errorCounts} errors`;
// }
// let result = countError(serverLogs);
// console.log(result);

// --------------------------------------------------------------
// let cpuLoads = [45, 82, 12, 95, 60];
// function findMaxLoad(loads) {
//   let max = loads[0];
//   for (let i = 0; i < loads.length; i++) {
//     if (loads[i] > max) {
//       max = loads[i];
//     }
//   }
//   return `the max cpu is ${max}`;
// }
// let result = findMaxLoad(cpuLoads);
// console.log(result);

// --------------------------------------------------------------
// let allServers = [12, 55, 30, 88, 10];
// function filterLargeServers(servers) {
//   let bigServers = [];
//   for (let i = 0; i < servers.length; i++) {
//     if (servers[i] > 50) {
//       bigServers.push(servers[i]);
//     }
//   }
//   return bigServers;
// }
// let result = filterLargeServers(allServers);
// console.log(result);

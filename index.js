// JavaScript Practice

// JavaScript console API and ways to print in Js
console.log("Hello World");
// alert("Hi");
// document.write("This is document write");
console.warn("This is warning");
console.error("This is an error");

// Variable
let num1 = 36;
let num2 = 44;
console.log(num1 + num2);

// Data types
// Strings
let str1 = "This is a string";
let str2 = "This is also a string";

// Numbers
let num3 = 54;

// Objects
let marks = {
  kashif: 22,
  Ali: 23,
  Imran: 34,
};
console.log(marks);

// Booleans
let isPresent = true;
let isAbsent = false;
console.log(isPresent);

// Undefined
// let und = undefined;
let und;
console.log(und);

// Null
let n = null;
console.log(n);
console.log("-------------------------------");

// Array
// Collection of elements
let arr = ["Kashif", "Aziz", "Ali", "Karim", "Kalim"];
console.log(arr[2]);
console.log(arr);
console.log("-------------------------------");

// at a very high level, there are two types of data types in JavaScript
// 1. Primitive datatype: undefined,null,number,string,boolean,symbo;
// 2. Reference: Arrays and Objects

// Operators
let a = 34;
let b = 33;
// Arithematic Operators
console.log("The value of a + b is ", a + b);
console.log("The value of a - b is ", a - b);
console.log("The value of a * b is ", a * b);
console.log("The value of a / b is ", a / b);
console.log("The value of a % b is ", a % b);
console.log("-------------------------------");
// Assignment Operators
let c = 22;
c = 45;
c -= 2; //c = c - 2
c += 2;
c *= 2;
c /= 2;
console.log(c);
console.log("-------------------------------");
// Comparison Operators
let x = 33;
let y = 45;
console.log(x == y);
console.log(x > y);
console.log(x < y);
console.log(x <= y);
console.log(x >= y);
console.log("-------------------------------");
// Logical Operators
console.log(true && true);
console.log(true && false);
console.log(true || false);
console.log(true || true);
console.log(!true);
console.log("--------------------------------------");

// JavaSccript Functions
// DRY Don't repeat yourself
function avg(a, b) {
  return (a + b) / 2;
}
c1 = avg(22, 33);
c2 = avg(657, 876);
console.log(c1, c2);
console.log("-------------------------------");
// Condotional in JavaScript
let age = 44;
if (age > 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
console.log("-------------------------------");
// Loops
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// For Loop
for (let i = 0; i < arr1.length; i++) {
  if (i == 3) {
    continue;
  }
  console.log(arr1[i]);
}
console.log("-------------------------------");
// For Each Loop
arr1.forEach((element) => {
  console.log(element);
});
console.log("-------------------------------");

// While Loop
let i = 0;
while (i < arr1.length) {
  console.log(arr1[i]);
  i++;
}
console.log("-------------------------------");
// Do While Loop
i = 0;
do {
  console.log(arr1[i]);
  i++;
} while (i < arr1.length);

console.log("-------------------------------");

let arr2 = ["Fan", "Camera", 32, null, true];
console.log(arr2.length);
console.log("-------------------------------");

arr2.pop();
arr2.push("Harry");
arr2.shift();
arr2.unshift("Harry");
// arr2.toString();
// arr2.sort();

for (let i = 0; i < arr2.length; i++) {
  console.log(arr2[i]);
}

console.log("-------------------------------");

// String method is JavaScript
let myString = "My name is Kashif Aziz";
console.log(myString.length);
console.log(myString.indexOf("Kashif"));
console.log(myString.lastIndexOf("Aziz"));
console.log(myString.slice(3, 10));
console.log(myString.replace("Aziz", "Hunzai"));

console.log("-------------------------------");

let myDate = new Date();
console.log(myDate);
console.log(myDate.getDate());
console.log(myDate.getFullYear());
console.log(myDate.getDay());

console.log("-------------------------------");

// DOM manipulation
let elem = document.getElementById("click");
console.log(elem);

let elemClass = document.getElementsByClassName("container");
console.log(elemClass);
elemClass[0].style.background = "yellow";
elemClass[0].classList.add("bg-primary");
console.log(elem.innerHTML);
console.log(elem.innerText);

console.log("-------------------------------");

tn = document.getElementsByTagName("button");
console.log(tn);
createdElement = document.createElement("p");
tn[0].appendChild(createdElement);
// removeChild(element); ---> removes an element;

console.log("-------------------------------");

// Selecting using Query
sel = document.querySelector(".container");
console.log(sel);
sel = document.querySelectorAll(".container");
console.log(sel);

console.log("-------------------------------");

// Events in JavaScript
// function clicked() {
//   console.log("The button was clicked");
// }
// window.onload = function () {
//   console.log("The document was loaded");
// };

// firstContainer.addEventListener("mouseover", function () {
//   console.log("Clicked");
// });
// firstContainer.addEventListener("click", function () {
//   console.log("Mouse over container");
// });
// firstContainer.addEventListener("mouseout", function () {
//   console.log("Mouse out of container");
// });
// firstContainer.addEventListener("mouseup", function () {
//   console.log("Mouse up on container");
// });
// firstContainer.addEventListener("mousedown", function () {
//   console.log("Mouse down on container");
// });

console.log("-------------------------------");
// Arrow Function
function sum() {
  return 5;
}

summ = (a, b) => {
  //This is a arrow function
  return a + b;
};

logKaro = () => {
  console.log("set timeout fired");
};

// Set timeout function
setTimeout(logKaro, 2000); //logKaro function will be called after 2000 milliseconds
clr = setInterval(logKaro, 2000); //after every 2 seconds function will run
clearInterval(clr);
// use clearInterval and clearTimeoutto cancel them

// Local Storage in JavaScript
// localstorage.setItem('name', 'Kashif');
// localStorage.getItem('name');
// localStorage.clear
// localStorage.removeItem

// Json
obj = {
  name: "Kashif",
  class: "BSCS",
  Age: 32,
};

jso = JSON.stringify(obj); //converting object into string using json
console.log(jso);
console.log(typeof jso);

parsed = JSON.parse(`{"name":"Kashif","class":"BSCS","Age":32}`);
console.log(parsed);

console.log("-------------------------------------");

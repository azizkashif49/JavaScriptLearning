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

// Array
// Collection of elements
let arr = ["Kashif", "Aziz", "Ali", "Karim", "Kalim"];
console.log(arr[2]);
console.log(arr);

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
// Assignment Operators
let c = 22;
c = 45;
c -= 2; //c = c - 2
c += 2;
c *= 2;
c /= 2;
console.log(c);
// Comparison Operators
let x = 33;
let y = 45;
console.log(x == y);
console.log(x > y);
console.log(x < y);
console.log(x <= y);
console.log(x >= y);
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

// Condotional in JavaScript
let age = 44;
if (age > 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

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

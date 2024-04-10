// Write out Hello World! in the console.
console.log("Hello World");

// 1-Declare a variable age and assign your age to it. Write it out in the console together with a description of the age. Like, "this is my age...".
const age = 40;
console.log("This is my age:", age);

// 2-Declare three variables using the three different keywords that we have learned. Write them all out in the console. What was the different between these keywords?
var varVariable = "A var variable"; //function-scoped and can be reassigned
let letVariable = "A let variable"; //block-scoped and can be reassigned
const constVariable = "A const variable"; // block-scoped and can't be reassigned
console.log(varVariable, letVariable, constVariable);

// 3-Declare three different variables, one of each data type. Assign them values and log them to the console in three different logs.
let oneString;
let oneNumber;
let oneBolean;
oneString = "Hello";
oneNumber = 99;
oneBolean = true;
console.log(oneString);
console.log(oneNumber);
console.log(oneBolean);

// 4-Create a const variabel called name and assign a value to it. Log it to the console. On a new line, try to reassign the value. Log that to the console. Does it work? If it doesn't, think about why that is. How would you correct it?
const name = "myName";
console.log(name);
// name = 'anotherName';
// console.log(name);
// doesn't work, can correct it by changing the keyword to 'let' instead of 'const'

// 5-Think about one case when we would like to use a boolean value. Discuss it with another person.
let isAdmin = true;
// admin validation to access admin functionality

// 6-If we create a variable that we know is not going to change its value during the duration of our program, should we declare it using let or const and why?
// By using 'const' keyword to ensure that it will not be changed accidentally

// 7-Create two numbers, save them in the variables number1 and number2. Add these two variabels together and save the result in a new variable that you log to the console.
let number1 = 9;
let number2 = 3;
let result = number1 + number2;
console.log(result);

// 8-Reuse the number1 and number2 variables and create three new variables:
// result1 should contain the difference (subtraction) between the numbers
// result2 should contain the product (multiplication) of the two numbers
// result3 should contain the quotient (division) of the two numbers
// Log them all to the console.
let result1 = number1 - number2;
console.log(result1);
let result2 = number1 * number2;
console.log(result2);
let result3 = number1 / number2;
console.log(result3);


// 9-Create a variable a and assign it a value. Log it to the console. Now add 5 to a by reassigning the value of a by using the existing a and the number 5. Log it to the console.
let A = 20;
console.log(A);
A += 5;
console.log(A);


// 10-What is the value of a in the console.log?
let a = 10;
a = a - 4;
a = 7;
a = a + 2;
console.log(a);
// the value of a in the console is: 9


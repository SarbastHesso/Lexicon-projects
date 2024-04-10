// 1-Använd prompt för att fråga användaren efter deras namn. Spara detta i en variabel och använd console.log för att visa ett hälsningsmeddelande som inkluderar deras namn.
// const uesrName = prompt('Please, enter your name');
// console.log(`Hello, ${uesrName}`);


// 2-Använd prompt för att fråga användaren efter deras födelseår. Spara detta i en variabel.
// const birthYear = prompt('What is your birth year?');


// 3-Beräkna användarens ålder genom att subtrahera födelseåret från det aktuella året. Du kan få det aktuella året med new Date().getFullYear() eller bara hårdkoda in det. Spara resultatet i en variabel och använd console.log för att visa ett meddelande som inkluderar deras ålder.
// let currentYear = new Date().getFullYear();
// let age = currentYear - birthYear;
// console.log(`Your age is: ${age} years`);


// 4-Använd prompt för att fråga användaren efter två nummer. Spara dem i variabler.
const number_1 = Number(prompt("choose a number, we will call it number_1"));
const number_2 = Number(prompt("choose an another number, we will call it number_2"));


// 5-Använd operatorerna +, -, *, och / för att utföra addition, subtraktion, multiplikation och division på dessa nummer. Använd console.log för att visa resultaten av dessa operationer.
let result_1 = number_1 + number_2;
let result_2 = number_1 - number_2;
let result_3 = number_1 * number_2;
let result_4 = number_1 / number_2;
console.log(`${number_1} + ${number_2} = ${result_1}`);
console.log(`${number_1} - ${number_2} = ${result_2}`);
console.log(`${number_1} * ${number_2} = ${result_3}`);
console.log(`${number_1} / ${number_2} = ${result_4}`);


// 6-Använd alert för att meddela användaren att beräkningarna är klara och att de kan kontrollera konsolen för resultaten.
alert("The calculations are complete and you can check the console for the results");
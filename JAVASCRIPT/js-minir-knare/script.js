alert('Hello, we will start with chossing two numbers');

// 1. Skapa en prompt som frågar om ett valfritt tal. Spara undan i en variabel.
const number_1 = Number(prompt("please, choose the first number"));


// 2. Skapa en prompt till som frågar om ett annat tal. Spara i en variabel.
const number_2 = Number(prompt("please, choose the second number"));


// 3. Skapa ny en tredje prompt som frågar vilket räknesätt användare vill använda. Det bör framgå att endast +, -, \* och / är möjliga. Denna ska också sparas i en variabel.
const clalcMethod = prompt("Now it's time to choose the calculation method you want to use. Choose between: + , - , * eller /");


// 4. Skapa en if-else-if check där du checkar de olika alternativen. Till exempel. Om räknesättet är lika med addition, så ska en addition utföras mellan de två talen och en alert ska poppa upp och redovisa resultatet. Är det subtraktion som gäller så ska subtraktion ske mellan talen och så vidare.
if (clalcMethod === "+") {
  let result_1 = number_1 + number_2;
  alert(`${number_1} + ${number_2} = ${result_1}`);
  alert('Thank you and see you soon with a new calculation')
} else if (clalcMethod === "-") {
  let result_2 = number_1 - number_2;
  alert(`${number_1} - ${number_2} = ${result_2}`);
  alert("Thank you and see you soon with a new calculation");
} else if (clalcMethod === "*") {
  let result_3 = number_1 * number_2;
  alert(`${number_1} * ${number_2} = ${result_3}`);
  alert("Thank you and see you soon with a new calculation");
} else if (clalcMethod === "/") {
  let result_4 = number_1 / number_2;
  alert(`${number_1} / ${number_2} = ${result_4}`);
  alert("Thank you and see you soon with a new calculation");
} else {
    alert('Something went wrong, please, make sure you entered the numbers and the calculation method symbol correctly')
}

// 6. Lägga gärna till lite skjyssta alerts innan och efter som hälsar en välkommen och säger hejdå och så.









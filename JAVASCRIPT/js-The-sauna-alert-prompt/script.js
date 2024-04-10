const fahrenheitToCelsius = (fahrenheit)  => {
  return parseInt((fahrenheit - 32) * 5/9)
};

const temperatureController = () => {

  let temperatureInFahrenheit = prompt('Pleas, enter the temperature in Fahrenheit:');

  while (temperatureInFahrenheit){

    let temperatureInCelsius = fahrenheitToCelsius(temperatureInFahrenheit);

    if (temperatureInCelsius <= 77 && temperatureInCelsius >= 73) {
      alert(`Sauna temperature is: ${temperatureInFahrenheit} fahrenheit. Enjoy!`);
      break;
    } else if (temperatureInCelsius < 73) {
      alert(`The sauna is cold, the temperature is: ${temperatureInFahrenheit} fahrenheit, turn up the heat a bit`);
    } else if (temperatureInCelsius > 77) {
      alert(`The sauna is hot, the temperature is: ${temperatureInFahrenheit} fahrenheit, turn down the heat a bit`);
    } else {
      alert(`Something went Wrong, please enter the temperature in a correct form`);
    }

    temperatureInFahrenheit = prompt("Pleas, Set a new temperature in Fahrenheit:");
    
  }
}

temperatureController();
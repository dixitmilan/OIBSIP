function convertTemperature() {
  const input = document.getElementById('tempInput').value;
  const fromUnit = document.getElementById('fromUnit').value;
  const toUnit = document.getElementById('toUnit').value;
  const resultDiv = document.getElementById('result');

  // Input validation
  if (input === '' || isNaN(input)) {
    resultDiv.innerText = 'Please enter a valid number!';
    return;
  }

  const temp = parseFloat(input);
  let converted;

  // Convert to Celsius first
  let celsius;
  if (fromUnit === 'celsius') {
    celsius = temp;
  } else if (fromUnit === 'fahrenheit') {
    celsius = (temp - 32) * 5 / 9;
  }

  // Convert from Celsius to target unit
  if (toUnit === 'celsius') {
    converted = celsius;
  } else if (toUnit === 'fahrenheit') {
    converted = (celsius * 9 / 5) + 32;
  }

  resultDiv.innerText = `Converted Temperature: ${converted.toFixed(2)}° ${capitalize(toUnit)}`;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

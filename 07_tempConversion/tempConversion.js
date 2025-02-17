const convertToCelsius = function(temp) {
  if (typeof temp === 'number') {
    return Math.round((temp-32)*(5/9)*10,1)/10
  } else {
    return "ERROR";
  }
};

const convertToFahrenheit = function(temp) {
  if (typeof temp === 'number') {
    return Math.round(10*((temp)*(9/5)+32))/10
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

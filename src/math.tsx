function kelvinToCelsius(temperature:number){
    return (temperature - 273.15).toFixed(2);
}

function kelvinToFahrenheit(temperature:number){
    return (1.8 * temperature - 459.67).toFixed(2);
}

function celsiusToKelvin(temperature:number){
    return (temperature + 273.15).toFixed(2);
}

function celsiusToFahrenheit(temperature:number){
    return (temperature * 1.8 + 32).toFixed(2);
}

function fahrenheitToKelvin(temperature:number){
    return ((temperature + 459.67)/1.8).toFixed(2);
}

function fahrenheitToCelsius(temperature:number){
    return ((temperature - 32)/1.8).toFixed(2);
}

export {kelvinToCelsius,kelvinToFahrenheit,celsiusToKelvin,celsiusToFahrenheit,fahrenheitToKelvin,fahrenheitToCelsius};


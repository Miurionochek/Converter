import {kelvinToCelsius,kelvinToFahrenheit,celsiusToKelvin,celsiusToFahrenheit,fahrenheitToKelvin,fahrenheitToCelsius} from './math';
import {validateFunc,validateSimilarMeasures} from './validation'

interface Props {
    temperature:string;
    measureLeft:string;
    measureRight: string;
    size: string;
}
function calculateTheResult({temperature,measureLeft,measureRight,size}:Props){
    let temperatureFrom;
    let temperatureTo;
    if(size === 'l'){
        temperatureFrom = measureLeft;
        temperatureTo = measureRight;
    }
    else{
        temperatureFrom = measureRight;
        temperatureTo = measureLeft;
    }
    switch(temperatureFrom){
        case 'kelvin':
            switch(temperatureTo){
                case 'kelvin':
                    return validateSimilarMeasures(temperature);
                case 'celsius':
                    return validateFunc(temperature,kelvinToCelsius);
                case 'fahrenheit':
                    return validateFunc(temperature,kelvinToFahrenheit);
                default:
                    break;    
            }
            break;
        case 'celsius':
            switch(temperatureTo){
                case 'kelvin':
                    return validateFunc(temperature,celsiusToKelvin);
                case 'celsius':
                    return validateSimilarMeasures(temperature);
                case 'fahrenheit':
                    return validateFunc(temperature,celsiusToFahrenheit);
                default:
                    break;
            }
            break;
        case 'fahrenheit':
            switch(temperatureTo){
                case 'kelvin':
                    return validateFunc(temperature,fahrenheitToKelvin);
                case 'celsius':
                    return validateFunc(temperature,fahrenheitToCelsius);
                case 'fahrenheit':
                    return validateSimilarMeasures(temperature);
                default:
                    break;
            }
            break;
        default:
            break;
    }
}
export {calculateTheResult}
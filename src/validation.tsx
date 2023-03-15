import { calculateTheResult } from "./calculs";



function validateFunc(temperature:string, func:Function){
    
    if(isNaN(parseFloat(temperature))||temperature === ''){
        return '';
    }  
    
    return func(parseFloat(temperature));
    
}
function validateSimilarMeasures(temperature:string){
    if(isNaN(parseFloat(temperature))||temperature === ''){
        return '';
    }  
    return temperature;
}
function ValidateLeft(temperature:string){
    if(temperature === ''){
        temperature = "0";
    }
    return temperature;
}
function ValidateRight(temperature:string,measureLeft:string,measureRight:string,size:string){
    if(temperature === ''){
        const props = {
            temperature:"0",
            measureLeft:measureLeft,
            measureRight:measureRight,
            size:'l'
        };
        temperature = calculateTheResult(props);
    }
    return temperature;
}
export {validateFunc,validateSimilarMeasures,ValidateLeft,ValidateRight};
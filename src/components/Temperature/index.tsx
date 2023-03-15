import React from "react";
interface TemperatureData{
    temperature:string;
    handleTemperatureChange:Function;
    measureVal:string;
    handleMeasure:Function;
}
function Temperature({temperature,handleTemperatureChange,handleMeasure,measureVal}:TemperatureData) {
    
    
    return (
        <div>
            <select id='MeasureTemperature'onChange={(e) => handleMeasure(e.target.value)} value={measureVal}>
                <option value='kelvin'>Kelvin</option>
                <option value='celsius'>Celsius</option>
                <option value='fahrenheit'>Fahrenheit</option>
            </select>
            <input 
                type='text' 
                value={temperature}
                onChange={(e)=>{handleTemperatureChange(e.target.value)}}
            ></input>
        </div>
    );
}

export {Temperature};
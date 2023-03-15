import {calculateTheResult} from '../../calculs';
import {Temperature} from '../Temperature'
import React, {useState, createContext} from 'react';
import { ValidateLeft,ValidateRight } from '../../validation';
 

interface ContextData{
    temperature1:string;
    temperature2:string;
    measureLeft:string;
    measureRight: string;
    size: string;
}
const defaultContext = {
    temperature1:"0",
        temperature2:"0",
        measureLeft:"kelvin",
        measureRight:"kelvin",
        size:"l"
}
const Bar = createContext<ContextData>(defaultContext);
function Converter(){
    const [temperature,ChangeTempData] = useState('');
    let [measureLeft,ChangeMeasureLeftData] = useState('kelvin');
    let [measureRight,ChangeMeasureRightData] = useState('kelvin');
    const [size,ChangeSize] = useState('l');
    const props = {
        temperature:temperature,
        measureLeft:measureLeft,
        measureRight:measureRight,
        size:size
    };
    
    let temperature1:string = size === 'l' ? temperature : calculateTheResult(props);
    let temperature2:string = size === 'r' ? temperature : calculateTheResult(props);
    const ContextObject = {
        temperature1:temperature1,
        temperature2:temperature2,
        measureLeft:measureLeft,
        measureRight:measureRight,
        size:size
    }
    return( 
        <div>
            <Temperature 
                temperature = {temperature1}
                handleTemperatureChange = {(temperature:string)=>{
                    ChangeTempData(temperature);
                    ChangeSize('l');
                }}
                measureVal = {measureLeft}
                handleMeasure = {(measureLeft:string) => ChangeMeasureLeftData(measureLeft)}
            ></Temperature>
            <Temperature
                temperature = {temperature2}
                handleTemperatureChange = {(temperature:string)=>{
                    ChangeTempData(temperature);
                    ChangeSize('r');
                    }}
                    measureVal = {measureRight}
                handleMeasure = {(measureRight:string) => ChangeMeasureRightData(measureRight)}
            ></Temperature>
            <button onClick={()=>{
                const temp = measureLeft;
                ChangeMeasureLeftData(measureRight);
                ChangeMeasureRightData(temp);
                if(size === 'l'){
                    ChangeSize('r');
                }
                else{
                    ChangeSize('l');
                }
            }}>Reverse</button>
            <Bar.Provider
                value= {
                    ContextObject
                }
            >
                <Bar.Consumer>
                    
                    {({temperature1,temperature2,measureLeft,measureRight,size})=>(
                        <div>{ValidateLeft(temperature1)} in {measureLeft} is {ValidateRight(temperature2,measureLeft,measureRight,size)} in {measureRight}</div>
                    )}
                </Bar.Consumer>
            </Bar.Provider>
        </div>
    );
}

export {Converter};
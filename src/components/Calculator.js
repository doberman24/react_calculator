import InputPan from "./calculator/InputPan";
import OutputPan from "./calculator/OutputPan";
import InputData from "./calculation/InputData";
import GetResult from "./calculation/GetResult"
import './Calculator.css';
import React, {useState} from 'react';

function Calculator() {
    const [onDisplay, setOnDisplay] = useState([]);
    const valueButton = (selectValue) => {
        if (selectValue !== 'C' && selectValue !== '=') {
            setOnDisplay((outputValue) => InputData(outputValue, selectValue))
        } else if (selectValue === 'C') {
            setOnDisplay(outputValue => outputValue = []);
        } else if (selectValue === '=') {
            setOnDisplay(outputValue => GetResult(outputValue));
        }
    }
    return(
        <>
        <main className="calculator">
            <OutputPan outValueButton={onDisplay}/>
            <InputPan onValueButton={valueButton}/>
        </main>
        </>
    );
}


export default Calculator
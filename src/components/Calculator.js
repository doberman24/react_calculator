import InputPan from "./calculator/InputPan";
import OutputPan from "./calculator/OutputPan";
import InputData from "./calculation/InputData";
import GetResult from "./calculation/GetResult"
import InputKeyboard from "./calculator/InputKeyboard";
import './Calculator.css';
import React, {useState, useEffect} from 'react';

function Calculator() {
    const pushButton = keyPush(InputKeyboard());
    const [onDisplay, setOnDisplay] = useState([]);
  
    useEffect(() => {
        document.addEventListener('keydown', (event) => {
            let pushKeyDisplay = keyPush(event.key);
            if (event.key === 'Escape') {
                setOnDisplay(outputValue => outputValue = []);
            } else if (event.key === 'Enter') {
                setOnDisplay(outputValue => GetResult(outputValue));
            } else if (pushKeyDisplay !== null) {
                setOnDisplay(outputValue => InputData(outputValue, pushKeyDisplay));
            }
        })            
    }, [])
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
            <OutputPan outValueButton={onDisplay} />
            <InputPan onValueButton={valueButton} onKeyboardButton={pushButton}/>
        </main>
        </>
    );
}


const keyPush = (key) => {
    let value = null;
    if (key >= '0' && key <= '9') {
        value = Number(key);        
    } else {
        switch(key) {
            case '*':
                value = '×';
                break;
            case '-':
                value = '−';
                break;
            case '/':
                value = '÷';
                break;
            case 'Enter':
                value = '=';
                break;
            case 'Escape':
                value = 'C';
                break;
            case '(':
            case ')':
                value = '( )';
                break;
            case '+':
            case '.':
            case '%':
                value = key;
                break;
            default:
                break;
            }
    
    }
    return value;
}

export default Calculator
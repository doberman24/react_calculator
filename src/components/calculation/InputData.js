import { number } from "mathjs";

const InputData = (outputValue, selectValue) => {

    let operator = selectValue;
    if (operator === '( )') {
        operator = setBrackets(selectValue, outputValue);
    }

    outputValue = getCorrectOutputValue(outputValue);
    const lastOutputValue = outputValue[outputValue.length - 1];
    if (selectValue === '.') {
        if (outputValue.length === 0) {
            outputValue = [0, '.']
        } else if (typeof lastOutputValue !== 'number') {
            if (lastOutputValue !== '.' && lastOutputValue !== ')') {
                outputValue = [...outputValue, 0, selectValue];
            } else if (lastOutputValue === ')') {
                outputValue = [...outputValue, '×', 0, selectValue];
            }
        } else if (setPoint(outputValue)) {
            outputValue = [...outputValue, '.'];    
        }
    } else if (typeof selectValue === 'number') {
        if (lastOutputValue === ')' || lastOutputValue === '%') {
            outputValue = [...outputValue, '×', selectValue];
        } else if (selectValue === 0 && outputValue.length === 0) {
            selectValue = 0;
        } else {
            outputValue = [...outputValue, selectValue];
        }
    } else {

        if (typeof lastOutputValue  === 'number' || lastOutputValue === ')' || lastOutputValue === '.' || lastOutputValue === '%') {
            if (operator === '(' || operator === '√') {
                outputValue = [...outputValue, '×', operator];
            } else {
            outputValue = [...outputValue, operator];
            }
        } else if (lastOutputValue !== '√') {
            if (operator === '(' || operator === '√') {
                outputValue = [...outputValue, operator];
            }
        }
    }
    // console.log(outputValue);
    return outputValue;
}


const setPoint = (outputValue) => {
    let point = true;
    for (let i = outputValue.length - 1; i > 0; i--) {
        if (outputValue[i] === '.') {
            point = false;
            break;
        } else if (typeof outputValue[i]  !== 'number') {
            point = true;
            break;
        }
    }
    return point;
}

const getCorrectOutputValue = (outputValue) =>
    outputValue = outputValue.map(item => {
        try {
            return number(item);    
        } catch (error) {
            return item;
        }
    })


const setBrackets = (bracket, inputValues) => {
    let listBrackets = [];
    for (let value of inputValues) {
        if (value === '(' || value === ')') {
            listBrackets = [...listBrackets, value];
        }
    }

    const listOpenBrack = listBrackets.filter((item) => {
        return item === '(';
    })
    const listCloseBrack = listBrackets.filter((item) => {
        return item === ')';
    })

    const lenValues = inputValues.length;
    const lastOutputValue = inputValues[inputValues.length - 1];

    if ((lenValues !== 0  
        && (typeof(lastOutputValue) === 'number' || lastOutputValue === ')' || lastOutputValue === '.')
        && listOpenBrack.length > listCloseBrack.length)) {
        bracket = ')';
    } else {
        bracket = '(';
    }

    return bracket;
}

export default InputData
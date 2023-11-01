import { number } from "mathjs";

const InputData = (outputValue, selectValue) => {

    outputValue = getCorrectOutputValue(outputValue);
    const lastOutputValue = outputValue[outputValue.length - 1];
    if (typeof(selectValue) === 'number' || selectValue === '.') {
        if (outputValue.length === 0 && outputValue[0] !== 0 
            && selectValue === '.' ) {
            outputValue = [0, '.']
        } else if (typeof(lastOutputValue) !== 'number' 
                    && lastOutputValue !== '.' && lastOutputValue !== ')'
                    && selectValue === '.') {
            outputValue = [...outputValue, 0, selectValue];
        } else if (typeof(lastOutputValue) !== 'number' 
            && lastOutputValue === ')' 
            && selectValue === '.') {
            outputValue = [...outputValue, '×', 0, selectValue];
        } else if (outputValue[0] !== 0 
                   || (outputValue[0] === 0 && outputValue[1] === '.')) {
            if (selectValue === '.' && setPoint(outputValue)) {
                outputValue = [...outputValue, '.'];    
            } 
            else if ((lastOutputValue === ')' || lastOutputValue === '%') 
                     && selectValue !== '.') {
                outputValue = [...outputValue, '×', selectValue];
            } else if (selectValue !== '.') {
                outputValue = [...outputValue, selectValue];
            }
        }
    } else {
        let operator = selectValue;
        if (operator === '( )') {
            operator = setBrackets(selectValue, outputValue);
        }
        
        if ((typeof(lastOutputValue) === 'number'   
            || lastOutputValue === ')' || lastOutputValue === '.' || lastOutputValue === '%')
            && (operator === '(' || operator === '√')) {
            outputValue = [...outputValue, '×', operator];
        } else if ((typeof(lastOutputValue) === 'number' 
                  || lastOutputValue === ')' || lastOutputValue === '.' || lastOutputValue === '%'
                  || operator === '(' || operator === '√') && lastOutputValue !== '√') {
            outputValue = [...outputValue, operator];
        }
    }
    console.log(outputValue);
    return outputValue;
}


const setPoint = (outputValue) => {
    let point = true;
    for (let i = outputValue.length - 1; i > 0; i--) {
        if (outputValue[i] === '.') {
            point = false;
            break;
        } else if (typeof(outputValue[i]) !== 'number') {
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
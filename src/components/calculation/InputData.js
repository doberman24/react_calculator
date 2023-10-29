const InputData = (outputValue, selectValue) => {


    if (typeof(selectValue) === 'number' || selectValue === '.') {
        if (outputValue.length === 0 && outputValue[0] !== 0 && selectValue === '.') {
            outputValue = [0, '.']
        } else if (outputValue[0] !== 0 || (outputValue[0] === 0 && outputValue[1] === '.')) {
            if (selectValue === '.' && !outputValue.some(item => item === '.')) {
                outputValue = [...outputValue, '.'];    
            } else if (selectValue !== '.') {
                outputValue = [...outputValue, selectValue];
            }
        }
    } else {
        const operator = OutOperator(selectValue, outputValue);
        if ((typeof(outputValue[outputValue.length - 1]) === 'number'
            || outputValue[outputValue.length - 1] === ')') && operator === '(') {
            outputValue = [...outputValue, '×', operator];    
        } else if (typeof(outputValue[outputValue.length - 1]) === 'number'
                  || outputValue[outputValue.length - 1] === ')' || operator === '(') {
            outputValue = [...outputValue, operator];
        }
    }
    // console.log(outputValue);

    return outputValue;
}

const OutOperator = (operator, value) => {
    switch (operator) {
        case '÷':
        case '×':
        case '−':
        case '+':
            operator = `${operator}`;    
            break;
        case '√':
            operator = `${operator}(`;
            break;
        case '( )':
            operator = setBrackets(operator, value);
            // value.length === 0 ? `${'('}` : `${')'}`;
            break;
        default:
            break;
    }
    return operator;
}

const setBrackets = (bracket, values) => {
    let brackets = [];
    console.log(bracket);
    for (let value of values) {
        if (value === '(' || value === ')') {
            brackets = [...brackets, value];
        }
    }

    if ((values.length === 0 || typeof(values[values.length - 1]) !== 'number')
    || (values.length > 0 && typeof(values[values.length - 1]) === 'number' 
    && ((brackets.length > 0 && brackets[brackets.length - 1] === ')') 
    || brackets.length === 0)) ) {
        bracket = '(';
    } else {
        bracket = ')';
    }

    
    
    
    // brackets = [...brackets, bracket]

    // const openBrack = brackets.filter((item) => {
    //     return item === '(';
    // })
    // const closeBrack = brackets.filter((item) => {
    //     return item === ')';
    // })

    // if (openBrack.length > closeBrack.length) {
    //     bracket = ')'
    // } else if (openBrack.length < closeBrack.length) {
    //     bracket = '('
    // }

    // console.log(openBrack.length, closeBrack.length);
    
    
    

    return bracket;
}

export default InputData
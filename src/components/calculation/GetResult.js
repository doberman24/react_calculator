import { evaluate, string } from 'mathjs'

const GetResult = (outputValue) => {

    let correctOperators = [];
    for (let value = 0; value < outputValue.length; value++) {
        let operator = '';
        switch (outputValue[value]) {
            case '×':
                operator = '*';
                break;
            case '−':
                operator = '-';
                break;
            case '÷':
                operator = '/';
                break;
            case '√':
                operator = 'sqrt(';
                value++;
                do {
                    operator += outputValue[value];
                    value++;
                }
                while ((typeof(outputValue[value]) === 'number'));
                operator += ')';
                console.log(operator);
                break;
            default:
                operator = outputValue[value];
                break;
        }
        correctOperators = [...correctOperators, operator]
    }
    const stringResult = correctOperators.join('');

    let result = string(evaluate(stringResult)).split('');
    
    return result;
}

export default GetResult;
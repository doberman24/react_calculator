import './InputPan.css'

function InputPan({onValueButton}) {
    const buttonsList = [
        {type: 'action', value: 'C'},
        {type: 'oper', value: '( )'},
        {type: 'action', value: '√'},
        {type: 'oper', value: '÷'},
        {type: 'num', value: 7},
        {type: 'num', value: 8},
        {type: 'num', value: 9},
        {type: 'oper', value: '×'},
        {type: 'num', value: 4},
        {type: 'num', value: 5},
        {type: 'num', value: 6},
        {type: 'oper', value: '−'},
        {type: 'num', value: 1},
        {type: 'num', value: 2},
        {type: 'num', value: 3},
        {type: 'oper', value: '+'},
        {type: 'num', value: 0},
        {type: 'num', value: '.'},
        {type: 'action', value: '%'},
        {type: 'action', value: '='},
    ]

    const buttonsItem = buttonsList.map((item) => (
        <ButtonsCalc 
            key={item.value} 
            type={item.type} 
            value={item.value} 
            onButton={onValueButton}
        />
    ));

    return (
        <section className='input-data'>
            <ul className='main-keyboard'>
                {buttonsItem}
            </ul>
        </section>
    );
}

function ButtonsCalc({type, value, special = '', onButton}) {
    const className = type === 'num' ? 'num' : type === 'oper' ? 'oper' : 'action';
    switch (value) {
        case 'C':
            special = 'reset';
            break;
        case '=':
            special = 'result';
            break;
        case '√':
        case '%':
            special = 'oper-act';
            break;
        default:
            break;
    } 

    const handleClick = () => {
        onButton(value);
    }

    return (
        <li onClick={handleClick} className={`button ${className} ${special}`}>
            {value}
        </li>
    );
}


export default InputPan
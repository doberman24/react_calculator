import { buttonsList } from './CalcButtons';
import './InputPan.css'

function InputPan({onValueButton, onKeyboardButton}) {

    const buttonsItem = buttonsList.map((item) => (
        <ButtonsCalc 
            key={item.value} 
            type={item.type} 
            value={item.value} 
            onButton={onValueButton}
            onKey={onKeyboardButton}
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

function ButtonsCalc({type, value, special = '', onButton, onKey}) {
    const className = type === 'num' ? 'num' : type === 'oper' ? 'oper' : 'action';
    let active = '';
    if (onKey === value) {
        active = 'active';
    }
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
        <li onClick={handleClick} className={`button ${className} ${special} ${active}`}>
            {value}
        </li>
    );
}


export default InputPan
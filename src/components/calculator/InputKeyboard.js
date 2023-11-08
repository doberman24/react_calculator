import {useState, useEffect} from 'react';

const InputKeyboard = () => {
    const [isButtonPushed, setIsBottonPushed] = useState('');
    const downButton = ({key}) => {
        setIsBottonPushed(key);
    }
    const upButton = ({key}) => {
        setIsBottonPushed('');
    }

    useEffect(() => {
        document.addEventListener('keydown', downButton);
        document.addEventListener('keyup', upButton);
    }, [])

    return isButtonPushed;
}

export default InputKeyboard
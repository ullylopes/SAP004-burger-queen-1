import React from 'react';
import './style.css';

const Button = (props) => {
    return (
        <button onClick={props.handleClick} className={['btn-login', props.className].join(' ')}>{props.name}</button>
    )
};
export default Button;
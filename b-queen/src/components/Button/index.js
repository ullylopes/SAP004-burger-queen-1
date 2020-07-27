import React from 'react';
import './style.css';

const Button = (props) => {
    return (
        <button onClick={props.handleClick} className='btn btn-lg btn-block btn-login'>{props.name}</button>
    )
};
export default Button;
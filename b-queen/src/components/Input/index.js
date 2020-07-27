import React from 'react';
import './style.css';

const Input = (props) => {
    return (
        <input
            input type={props.type}
            className='form-control form-control-lg my-1 form-login'
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}>
        </input>
    )
};
export default Input;
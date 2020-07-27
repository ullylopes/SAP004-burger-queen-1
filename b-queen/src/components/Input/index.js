import React from 'react';
import './style.css';

const Input = (props) => {
    return (
        <input onChange={props.handleChange} className='form-control form-control-lg my-1 form-login' placeholder={props.placeholder} />
    )
};
export default Input;
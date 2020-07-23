import React from 'react';

const Button = (props) => {
    return <button id={props.id} className={props.class} onClick={props.handleClick} >{props.name}</button>
}

export default Button;
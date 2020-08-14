import React from 'react';
import Button from '../Button';
import './style.css';

const Card = (props) => {

    
    let arrayRequestsNames = [];
    for(let arrayItem of props.viewRequests){
        arrayRequestsNames.push(arrayItem.name)
    }  

    return (

        <div className="basic-structure mx-auto text-center">
            <h4>Mesa {props.tableNumber}</h4>
            <h5>Cliente: {props.client}</h5>
            <h6>Atendente: {props.worker}</h6>

            <div className="view-orders mx-auto text-center">
            {arrayRequestsNames.map(item => 
                <p>{item}</p>
            )}
            </div>
            <h6>{props.time}</h6>
            <Button
                name={props.buttonTitle}
                type="button"
                className="btn btn-card"
                handleClick={props.sendClick}
            />
        </div>

    )

}

export default Card;
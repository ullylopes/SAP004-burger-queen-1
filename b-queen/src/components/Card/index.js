import React from 'react';
import './style.css';

const Card = (props) => {

    return (

        <div className="basic-structure mx-auto text-center">
            <h4>Mesa {props.tableNumber}</h4>
            <p>Cliente: {props.client}</p>
            <p>Atendente: {props.worker}</p>

            <div className="view-orders mx-auto text-center">
                <p>Aqui verá os ítens do pedido</p>
                <p>Aqui verá os ítens do pedido</p>
                <p>Aqui verá os ítens do pedido</p>
                <p>Aqui verá os ítens do pedido</p>
            </div>

            <button>{props.buttonTitle}</button>
        </div>

    )

}

export default Card;
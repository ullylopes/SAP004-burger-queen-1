import React from 'react';
import Button from '../Button';
import './style.css';

const Card = (props) => {

    return (

        <div className="basic-structure mx-auto text-center">
            <h4>Mesa {props.tableNumber}</h4>
            <h5>Cliente: {props.client}</h5>
            <h6>Atendente: {props.worker}</h6>

            <div className="view-orders mx-auto text-center">
                Pedidos <br/>
                Pedidos <br/>
                Pedidos <br/>
                Pedidos <br/>
                Pedidos <br/>
                Pedidos <br/>
                Pedidos <br/>
                Pedidos <br/>
                Pedidos <br/>
                Pedidos <br/>
                Pedidos <br/>
                Pedidos <br/>
                Pedidos <br/>
                Pedidos <br/>
                Pedidos <br/>
                Pedidos <br/>
                Pedidos <br/>
            </div>
            
            <Button
                name={props.buttonTitle}
                type="button"
                className="btn btn-card"
            />
        </div>

    )

}

export default Card;
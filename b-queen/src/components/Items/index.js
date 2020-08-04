import React from 'react';
import './items.css';

const Items = (props) => {
    return (
        <div id={props.idCard} className="classCard">
            <div className="container-icon-item">
                <figure className="container-icons">
                    <img id={props.imgId} alt="icon-item"></img>
                </figure>
                <span className="class-item">{props.item_name}</span>
            </div>

            <div className="container-options-price">
                <select id={props.idOptions} className="options">
                    <option value="default" selected disabled id={props.flavors}>Opções</option>
                    <option id={props.idSabores}>{props.flavors}</option>
                    <option id={props.idSabores}>{props.flavors}</option>
                    <option id={props.idSabores}>{props.flavors}</option>
                    <option id={props.idSabores}>{props.flavors}</option>
                </select>
                <span className="price">R${props.price}</span>
            </div>

        </div>
    )
};

export default Items;
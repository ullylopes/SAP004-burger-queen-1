import React from 'react';
import './items.css';
import Button from '../Button';

const Items = (props) => {
    return (

        <div className='item-content my-sm-3'>

            <span> NOME DO ITEM{props.item_name} </span>
            <span> R${props.price} </span>

            <Button
                name='Adicionar'
                className='btn btn-add-item btn-sm my-sm-2 ml-sm-3 '
            />

        </div>
        //<div id={props.idCard} className="classCard">
        //    <div className="container-icon-item">
        //        <figure className="container-icons">
        //            <img id={props.imgId} alt="icon-item"></img>
        //        </figure>
        //        <span className="class-item">{props.item_name}</span>
        //    </div>

        //    <div className="container-options-price">
        //        <select id={props.idOptions} className="options">
        //            <option value="default" selected disabled id={props.flavors}>Opções</option>
        //            <option id={props.idSabores}>{props.flavors}</option>
        //            <option id={props.idSabores}>{props.flavors}</option>
        //            <option id={props.idSabores}>{props.flavors}</option>
        //            <option id={props.idSabores}>{props.flavors}</option>
        //        </select>
        //        <span className="price">R${props.price}</span>
        //    </div>

        //</div>
    )
};

export default Items;
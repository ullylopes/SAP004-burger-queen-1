import React from 'react';
import './items.css';
import Button from '../Button';

const Items = (props) => {
    return (

        <div className='item-content my-sm-3'>
            <div className=' d-flex justify-content-between mt-2'>
                <span> NOME DO ITEM{props.item_name} </span>
                <span> R${props.price} </span>
            </div>

            <div className="container-options-price d-flex justify-content-between mt-2">
                <select id={props.idOptions} className="options">
                    <option value="default" selected disabled id={props.flavors}>Opções</option>
                    <option id={props.idSabores}>{props.flavors}</option>
                    <option id={props.idSabores}>{props.flavors}</option>
                    <option id={props.idSabores}>{props.flavors}</option>
                    <option id={props.idSabores}>{props.flavors}</option>
                </select>
                <Button
                    name='Adicionar'
                    className='btn btn-add-item btn-sm my-sm-2 ml-sm-3 flex-row-reverse'
                />
            </div>

        </div >









    )
};

export default Items;
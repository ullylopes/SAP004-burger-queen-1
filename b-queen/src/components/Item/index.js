import React from 'react';
import './item.css';
import Button from '../Button';

const ItemSummary = (props) => {
    return (

        <div className='item-summary-list'>
            <div className='pt-3 pl-2'>
                <span> NOME DO ITEM {props.item_name} </span>
                <button className='btn-quantity'>-</button>
                <span className='counter'>0{props.quantity}</span>
                <button className='btn-quantity'>+</button>
            </div>
        </div>

    )
}

export default ItemSummary;
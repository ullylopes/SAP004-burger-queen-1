import React from 'react';
import './item.css';
import Button from '../Button';


const ItemSummary = (props) => {
    return (

        <div className='item-summary-list w-100 my-sm-2'>
            <span className='font-style'> NOME DO ITEM{props.item_name} </span>
            <div className=''>
                <button className='btn-quantity'>-</button>
                <span className='counter'>0{props.quantity}</span>
                <button className='btn-quantity'>+</button>

                <span className='justify-content-end font-style'> R${props.price} </span>

                <Button
                    name='excluir'
                    className='flex-row-reverse' />
            </div>
        </div>



    )
}

export default ItemSummary;
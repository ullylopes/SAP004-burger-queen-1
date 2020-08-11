import React, { useState, useEffect } from 'react';
import './items.css';
import Button from '../Button';

const Items = ({ key, name, price, options, props }) => {
    return (

        <div className='item-content my-sm-3'>
            <div className='d-flex font-style-orange justify-content-between my-sm-2'>
                <span>{name} </span>
                <span>R${price} </span>
            </div>

            <div className="container-options-price d-flex justify-content-between">
                <select className="options ">
                    <option login="default" selected disabled id=''></option>


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
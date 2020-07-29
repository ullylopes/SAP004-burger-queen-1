import React, { useState } from 'react';
import './salon.css';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';

function Salon() {
    return (

        <div className='salon-content'>
            <form className='form-salon'>
                <Header />
            </form>
        </div>


    )
}

export default Salon;
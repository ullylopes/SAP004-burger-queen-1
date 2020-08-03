import React, { useState } from 'react';
import './salon.css';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Input from '../../components/Input';

function Salon() {
  return (
    <div className='salon-content'>
      <section>
        <Header />
      </section>

      <section className='form-salon row'>
        <div className='col-sm-3'>
          <span>Nome do cliente</span>
          <Input
            type='text' />
        </div>
        <div className='col-sm-2'>
          <span>Mesa</span>
          <Input
            type='text' />
        </div>
      </section>

      <section className='select-menu row col-lg-5'>
        {/*<span>Selecione o menu 🍽️</span>*/}

        <Button
          name='Café da manhã'
          className='btn btn-lg select-menu-bttn col-sm-2' />
        <Button
          name='Restante do dia'
          className='btn btn-lg select-menu-bttn col-sm-2' />
      </section>


      {/*<div className='description col-sm-2'>
        <h2>MUNDO</h2>
      </div>*/}


    </div >


  )
}

export default Salon;
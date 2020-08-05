import React, { useState } from 'react';
import './salon.css';
import '../../reset.css';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Items from '../../components/Items';

function Salon(props) {
  return (
    <div className='salon-content container-fluid'>
      <section>
        <Header
          name1='Fazer pedido'
          name2='Pedidos prontos'
        />
      </section>

      <div className='row content-both-sides'>
        <div className='content-on-the-left col-md-8 col-sm-push-8'>
          <section className='form-salon row'>
            <div className='col-sm-2 my-sm-2'>
              <span>Nome do cliente</span>
              <Input
                className='input'
                type='text' />
            </div>
            <div className='col-sm-2 my-sm-2 ml-xl-5  '>
              <span>Mesa</span>
              <Input
                className='input'
                type='text' />
            </div>
          </section>

          <span>Selecione o menu 🍽️</span>

          <section className='select-menu row col-lg-5'>

            <Button
              name='Café da manhã ☕'
              className='btn btn-sm my-sm-2 select-menu-bttn w-30 p-3' />
            <Button
              name='Restante do dia'
              className='btn btn-sm my-sm-2 select-menu-bttn w-30 p-3 ml-3' />
          </section>

          <Items />

        </div>

        <div className='content-on-the-right col-sm-push-8 col-md-2'>
          <section className='my-sm-2' >
            <span>Resumo do Pedido</span>
            <div className='customer-info-box pt-3'>
              <div className='pb-1'>Nome: {props.user_name} </div>
              <div className='pt-1'>Mesa: {props.table_number}</div>
            </div>



          </section>


        </div>




        {/*<div classNameName='description col-sm-2'>
      <h2>MUNDO</h2>
    </div>*/}

      </div>
    </div>


  )
}

export default Salon;
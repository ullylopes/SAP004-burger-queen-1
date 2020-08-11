import React, { useState, useEffect } from 'react';
import firebase from '../../config/firebase';
import 'firebase/firestore';
import './salon.css';
import '../../reset.css';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Items from '../../components/Items';
import ItemSummary from '../../components/Item';

function Salon(props) {

  const [allDay, setAllDay] = useState([]);
  const [breakfast, setBreakfast] = useState([])
  let menuAllDay = [];

  useEffect(() => {
    firebase
      .firestore()
      .collection('allday')
      .get()
      .then(async (result) => {
        await result
          .docs
          .forEach(doc => menuAllDay
            .push({
              id: doc.id,
              ...doc.data()
            })
          )
        setAllDay(menuAllDay);

      })
  });

  //console.log(setBreakfast);


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
          <section className='form-salon mx-auto row font-style-pink'>
            <div className='col-sm-2 my-sm-4 col-lg-2 mx-2'>
              <span>Nome do cliente</span>
              <Input
                className='input'
                type='text' />
            </div>
            <div className='col-sm-2 my-sm-4 ml-lg-5'>
              <span>Mesa</span>
              <Input
                className='input'
                type='text' />
            </div>
          </section>
          <div className='select-menu mx-4'>
            <span className='font-style-orange'>Selecione o menu 🍽️</span>
            <div>
              <Button
                name='Café da manhã ☕'
                className='btn btn-lg my-sm-2 select-menu-bttn w-30 p-3 font-weight-bold' />
              <Button
                name='Restante do dia 🍴'
                className='btn btn-lg my-sm-2 select-menu-bttn w-30 p-3 ml-3 font-weight-bold' />
            </div>
          </div>
          <section className='items-list row mx-auto'>

            {allDay.map(item => <Items key={item.id} name={item.name} price={item.price} options={item.options} />)}

          </section>
        </div>
        <div className='content-on-the-right col-sm-push-8 col-md-4'>
          <section className='my-sm-4' >
            <span className='font-style-orange'>Resumo do Pedido</span>
            <div className='customer-info-box'>
              <div className='my-sm-1'>Nome: {props.user_name} </div>
              <div>Mesa: {props.table_number}</div>
            </div>
            <div className='item-summary-box mx-auto my-sm-2 '>
              <ItemSummary />
              <ItemSummary />
              <ItemSummary />
              <ItemSummary />
            </div>
            <div className='d-flex justify-content-between mx-auto p-1 font-style-pink my-sm-4'>
              <span>TOTAL </span>
              <span>R${props.price}</span>
            </div>

            <Button
              name='Enviar pedido para cozinha'
              className='btn btn-add-item btn-send-to-kitchen btn-lg '
            />
          </section>
        </div>




        {/*<div classNameName='description col-sm-2'>
      <h2>MUNDO</h2>
    </div>*/}

      </div>
    </div >


  )
}

export default Salon;
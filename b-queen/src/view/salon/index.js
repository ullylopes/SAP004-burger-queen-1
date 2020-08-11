import React, { useState, useEffect } from 'react';
import firebase from '../../config/firebase';
import 'firebase/firestore';
import './salon.css';
import '../../reset.css';
import { Link } from 'react-router-dom';
import history from '../../history';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Items from '../../components/Items';
import ItemSummary from '../../components/Item';

function Salon(props) {

  const [allDay, setAllDay] = useState([]);
  const [breakfast, setBreakfast] = useState([]);
  const [clientNameValue, setClientNameValue] = useState("");
  const [tableNumberValue, setTableNumberValue] = useState("");
  const [status, setStatus] = useState(true);
  let menuAllDay = [];
  let menuBreakfast = [];

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

  useEffect(() => {
    firebase
      .firestore()
      .collection('breakfast')
      .get()
      .then(async (result) => {
        await result
          .docs
          .forEach(doc => menuBreakfast
            .push({
              id: doc.id,
              ...doc.data()
            })
          )
		  setBreakfast(menuBreakfast);
      })
  });

  const showMenuAllDay = () =>{
		setStatus(false)
  };

  const showMenuBreakfast = () =>{
	  setStatus(true)
  };  

  const sendRequest = () => {
    firebase.firestore().collection('orders-shipped').doc().set({
      uid: firebase.auth().currentUser.uid,
      clientName: clientNameValue,
      tableNumber: tableNumberValue,
      requests: []
    })
  }

  return (
    <div className='container-fluid'>
      <section>
        <Header
          name1='Fazer pedido'
          name2='Pedidos prontos'

          butClick1={() => history.push('/salon')}
          butClick2={() => history.push('/readyorders')}
        />
      </section>
      <div className='row content-both-sides'>
        <div className='content-on-the-left col-md-7 col-sm-push-8 my-sm-2'>
          <section className='mx-auto row font-style-pink'>
            <div>
              <label for="clientName">Nome do cliente: </label>
              <Input 
                className='input customizingInput' 
                type='text' 
                name="clientName" 
                onChange={(e) => setClientNameValue(e.target.value)}/>
            </div>
            <div className="forDicClientTable ml-3">              
              <label for="clientTable">Nº da Mesa: </label>
              <Input 
                className='forInputClientTable customizingInput'             
                type='text' 
                name="clientTable" 
                onChange={(e) => setTableNumberValue(e.target.value)}
                />
            </div>
          </section>
          <section className='select-menu'>
            <span className='font-style-orange forExibition mt-3'>Selecione o menu 🍽️</span>
            <Button
              name='Café da manhã ☕'
			        className='btn my-sm-2 select-menu-bttn w-30 font-weight-bold' 
			        handleClick={showMenuBreakfast}
            />
            <Button
              name='Restante do dia 🍴'
			        className='btn select-menu-bttn w-30 font-weight-bold ml-2' 
			        handleClick={showMenuAllDay}
            />
          </section>
                                        
          { status ? 
              <section className='items-list row mx-auto'><span className="font-style-orange mb-3">Menu Café Da Manhã</span>{/*breakfast.map(item => <Items key={item.id} name={item.name} price={item.price} options={item.options} />)*/}</section> 
            :
              <section className='items-list row mx-auto'><span className="font-style-orange mb-3">Menu All Day</span>{/*allDay.map(item => <Items key={item.id} name={item.name} price={item.price} options={item.options} />)*/}</section>            
          }
        </div>

        <div className='content-on-the-right col-md-5 col-sm-push-8 my-sm-2'>
          
            <span className='font-style-orange'>Resumo do Pedido</span>
            <div className='customer-info-box'>
              <div>Nome: {clientNameValue} </div>
              <div>Mesa: {tableNumberValue}</div>
            </div>
            <div className='item-summary-box mx-auto'>
              <ItemSummary item_name='NOME DO ITEM1' />
              <ItemSummary item_name='NOME DO ITEM2' />              
            </div>
            <div className='d-flex justify-content-between mx-auto p-1 font-style-pink my-sm-4'>
              <span>TOTAL </span>
              <span>R${props.price}</span>
            </div>

            <Button
              name='Enviar pedido para cozinha'
              className='btn btn-add-item btn-send-to-kitchen btn-lg'
              handleClick={sendRequest}
            />
          
        </div>

        {/*<div classNameName='description col-sm-2'>
      <h2>MUNDO</h2>
    </div>*/}

      </div>
    </div >

  )
}

export default Salon;
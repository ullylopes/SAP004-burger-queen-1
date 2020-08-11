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
  const [statusSendRequest, setStatusSendRequest] = useState("nulo");
  const [order, setOrder] = useState([]);
  let menuAllDay = [];
  let menuBreakfast = [];

  const firebaseRequisition = (collectionP, arrayP, setP) =>{
    firebase
      .firestore()
      .collection(collectionP)
      .get()
      .then(async (result) => {
        await result
          .docs
          .forEach(doc => arrayP
            .push({
              id: doc.id,
              ...doc.data()
            })
          )
          setP(arrayP);
      })
  }

  useEffect(() => {
    firebaseRequisition('allday', menuAllDay, setAllDay)
  });
  
  useEffect(() => {
    firebaseRequisition('breakfast', menuBreakfast, setBreakfast)
  });

  const showMenuAllDay = () =>{
		setStatus(false)
  };

  const showMenuBreakfast = () =>{
	  setStatus(true)
  };  

  const sendRequest = () => {
    
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        firebase.firestore().collection('users').where('uid', '==', firebase.auth().currentUser.uid)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              const attendantNameF = doc.data().name;
  
              firebase.firestore().collection('orders-shipped').doc().set({
                  uid: firebase.auth().currentUser.uid,
                  attendantName: attendantNameF,
                  clientName: clientNameValue,
                  tableNumber: tableNumberValue,
                  requests: []
                }, function(error) {
                  if (error) {
                    setStatusSendRequest("erroAoEnviar");
                  } else {
                    setStatusSendRequest("enviado"); 
                  }
                })
            })
          })
      }
    })    
  }

  const addItem = (itemID) => {
    
    setOrder([...order, itemID]);
  
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
            <><h3 className="font-style-orange">Menu Café Da Manhã</h3><section className='items-list row mx-auto'>{breakfast.map(item => <Items key={item.id} name={item.name} price={item.price} options={item.options} butClick={addItem(item)} />)}</section></>
            :
            <><h3 className="font-style-orange">Menu All Day</h3><section className='items-list row mx-auto'>{allDay.map(item => <Items key={item.id} name={item.name} price={item.price} options={item.options} butClick={addItem(item)} />)}</section></>           
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
            </div>
            <div className='d-flex justify-content-between mx-auto p-1 font-style-pink my-sm-4'>
              <span>TOTAL </span>
              <span>R${props.price}</span>
            </div>

            <Button
              name='Enviar pedido para cozinha'
              className='btn btn-send-to-kitchen btn-lg'
              handleClick={sendRequest}
            />
          
            { statusSendRequest == "enviado" ? <div class="alert alert-success" role="alert"><button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> Pedido enviado com <strong>SUCESSO</strong>!</div> : "" }
            
            { statusSendRequest == "erroAoEnviar" ? <div class="alert alert-warning" role="alert"><button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> Houve um <strong>ERRO</strong> ao enviar o pedido!</div> : "" }
        </div>

      </div>
    </div >

  )
}

export default Salon;
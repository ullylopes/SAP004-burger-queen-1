import React, { useState, useEffect } from 'react';
import firebase from '../../config/firebase';
import 'firebase/firestore';
import './salon.css';
import '../../reset.css';
import { Link } from 'react-router-dom';
import { history } from '../../history';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Items from '../../components/Items';
import ItemSummary from '../../components/Item';
import { useSelector } from 'react-redux';

function Salon(props) {

  const [allDay, setAllDay] = useState([]);
  const [breakfast, setBreakfast] = useState([]);
  const [clientNameValue, setClientNameValue] = useState('');
  const [tableNumberValue, setTableNumberValue] = useState('');
  const [status, setStatus] = useState(true);
  const [statusSendRequest, setStatusSendRequest] = useState("nulo");
  const [statusSendRequestValue, setStatusSendRequestValue] = useState("nuloValue");
  const [order, setOrder] = useState([]);
  const menuAllDay = [];
  const menuBreakfast = [];
  const [options, setOptions] = useState('');

  const firebaseRequisition = (collectionP, arrayP, setP) => {
    firebase
      .firestore()
      .collection(collectionP)
      .get()
      .then(async (result) => {
        await result
          .docs
          .forEach((doc) => arrayP
            .push({
              id: doc.id,
              ...doc.data(),
            }),
          )
        setP(arrayP);
      });
  };

  useEffect(() => {
    firebaseRequisition('allday', menuAllDay, setAllDay);
    firebaseRequisition('breakfast', menuBreakfast, setBreakfast);
  }, []);

  const showMenuAllDay = () => {
    setStatus(false);
  };

  const showMenuBreakfast = () => {
    setStatus(true);
  };

  const sendRequest = () => {

    if ((tableNumberValue !== "" && clientNameValue !== "") && order.length !== [].length) {
      //tableNumberValue !== ""   clientNameValue !== ""      order.length !== [].length

      
          firebase.firestore().collection('users').where('uid', '==', firebase.auth().currentUser.uid)
            .get()
            .then((querySnapshot) => {
              querySnapshot.forEach((doc) => {

                firebase.firestore().collection("orders-shipped").doc().set({
                  uid: firebase.auth().currentUser.uid,
                  attendantName: doc.data().name,
                  clientName: clientNameValue,
                  tableNumber: tableNumberValue,
                  requests: order,
                  hourSend: Date.now()
                }).then(function () {

                  console.log("Document successfully written!");
                  setStatusSendRequest("enviado");
                  setOrder([]);
                  setClientNameValue("");
                  setTableNumberValue("");

                }).catch(function (error) {

                  console.error("Error writing document: ");
                  setStatusSendRequest("erroAoEnviar");
                  setOrder([]);
                  setClientNameValue("");
                  setTableNumberValue("");
                })
                setTimeout(() => {setStatusSendRequest("nulo")}, 4000)
                              })              
            })
            
    }else{
      if (tableNumberValue == "") {
        setStatusSendRequestValue("tableNumberNulo")
        setTimeout(() => { setStatusSendRequestValue("nulo") }, 2000)
      } else if (clientNameValue == "") {
        setStatusSendRequestValue("clientNameNulo")
        setTimeout(() => { setStatusSendRequestValue("nulo") }, 2000)
      } else if (order.length == [].length) {
        setStatusSendRequestValue("orderNulo")
        setTimeout(() => { setStatusSendRequestValue("nulo") }, 2000)
      }

    }
  }

  const addItem = (itemID) => {
    const index = order.findIndex((item) => item.id === itemID.id);
    if (index === -1) {
      setOrder([...order, { ...itemID, quantity: 1 }]);
    } else {
      order[index].quantity++
      setOrder([...order]);
    }
  };

  const addItemSummary = (itemID) => {
    const index = order.findIndex((item) => item.id === itemID);
    order[index].quantity++
    setOrder([...order]);
  }

  const reduceItemSummary = (itemID) => {
    const index = order.findIndex((item) => item.id === itemID);
    order[index].quantity--
    setOrder([...order]);
  }





  const removeItem = (itemID) => {
    const newOrder = [];
    for (let obj of order) {
      if (obj.id !== itemID.id) {
        newOrder.push(obj)
      }
    }
    setOrder(newOrder);
  };

  const totalPrice = () => {
    const totalItemPrice = order.reduce((acc, current) => acc + (current.price * current.quantity), 0);
    return order ? totalItemPrice : '0'
  }

  console.log(useSelector(state => state.userLogged))
  console.log(useSelector(state => state.userEmail))
  console.log(useSelector(state => state.userLocal))

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
                onChange={(e) => setClientNameValue(e.target.value)}
                value={clientNameValue}
              />
            </div>
            <div className='forDicClientTable ml-3'>
              <label for='clientTable'>Nº da Mesa: </label>
              <Input
                className='forInputClientTable customizingInput'
                type='text'
                name='clientTable'
                onChange={(e) => setTableNumberValue(e.target.value)}
                value={tableNumberValue}
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

          {status ?
            <><h3 className='font-style-orange'>Menu Café Da Manhã</h3><section className='items-list row mx-auto'>
              {breakfast.map(item =>
                <Items key={item.id} name={item.name} price={item.price} setOptions={setOptions} options={item.options} butClick={() => { addItem(item) }} />)}</section></>
            :
            <><h3 className='font-style-orange'>Menu All Day</h3><section className='items-list row mx-auto'>
              {allDay.map(item =>
                <Items key={item.id} name={item.name} price={item.price} setOptions={setOptions} options={item.options} butClick={() => { addItem(item) }} />)}</section></>
          }
        </div>

        <div className='content-on-the-right col-md-5 col-sm-push-8 my-sm-2'>
          <span className='font-style-orange'>Resumo do Pedido</span>
          <div className='customer-info-box'>
            <div>Nome: {clientNameValue} </div>
            <div>Mesa: {tableNumberValue}</div>
          </div>

          <div className='item-summary-box mx-auto'>
            {order.map(item => <ItemSummary
              key={item.id} setOptions={options} itemId={item.id} addItemSummary={addItemSummary} reduceItemSummary={reduceItemSummary} quantity={item.quantity} item_name={item.name} price={item.price} deleteClick={() => { removeItem(item) }}
            />)}
          </div>

          <div className='d-flex justify-content-between mx-auto p-1 font-style-pink my-sm-4'>
            <span>TOTAL </span>
            <span>R$ {totalPrice()}</span>
          </div>

          <Button
            name='Enviar pedido para cozinha'
            className='btn-send-to-kitchen btn-lg'
            handleClick={sendRequest}
          />

          {statusSendRequest == "enviado" ? <div class="alert alert-success" role="alert"><button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> Pedido enviado com <strong>SUCESSO</strong>!</div> : ""}

          {statusSendRequest == "erroAoEnviar" ? <div class="alert alert-warning" role="alert"><button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> Houve um <strong>ERRO</strong> ao enviar o pedido!</div> : ""}

          {statusSendRequestValue == "tableNumberNulo" ? <div class="alert alert-danger" role="alert"><button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> Insira o número da mesa! </div> : ""}

          {statusSendRequestValue == "clientNameNulo" ? <div class="alert alert-danger" role="alert"><button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> Insira o nome do cliente! </div> : ""}

          {statusSendRequestValue == "orderNulo" ? <div class="alert alert-danger" role="alert"><button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> Adicione itens para enviar o pedido! </div> : ""}

        </div>

      </div>
    </div>

  );
}

export default Salon;
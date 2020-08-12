import React, { useState, useEffect } from 'react';
import '../kitchen/kitchen.css';
import '../../reset.css';
import firebase from '../../config/firebase';
import { Link } from 'react-router-dom';
import history from '../../history';
import 'firebase/firestore';
import Header from '../../components/Header';
import Card from '../../components/Card';



const Readyorders = () =>  {

    return(
        <div>
            <Header
                    name1='Fazer pedido'
                    name2='Pedidos prontos'

                    butClick1={() => history.push('/salon')}
                	butClick2={() => history.push('/readyorders')}
                />
                <h1 className="for-title">Pedidos Prontos</h1>
        </div>
    )
}


export default Readyorders;
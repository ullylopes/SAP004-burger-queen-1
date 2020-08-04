import React, { useState, useEffect } from 'react';
import './kitchen.css';
import firebase from '../../config/firebase';
import 'firebase/auth';
import Input from '../../components/Input'
import { Link } from 'react-router-dom';
import history from '../../history'
import 'firebase/firestore';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Card from '../../components/Card';

const Kitchen = () => {



    return(
        <div className="div-kitchen">
            
                <Header
                    name1='Em Andamento'
                    name2='Pedidos Concluídos'
                />
                <h3 className="for-title">PEDIDOS EM ANDAMENTO</h3>

                <div className="d-flex ">
                    <Card
                            tableNumber='4'
                            buttonTitle='PRONTO PARA SERVIR'
                            client='Zaine'
                            worker='Amanda'
                    />

                    <Card
                            tableNumber='5'
                            buttonTitle='PRONTO PARA SERVIR'
                            client='Zaine'
                            worker='Amanda'
                    />
                    
                    
                </div>
            
        </div>
    )

}

export default Kitchen;
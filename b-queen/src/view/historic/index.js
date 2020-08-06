import React, { useState, useEffect } from 'react';
import '../kitchen/kitchen.css';
import '../../reset.css';
import firebase from '../../config/firebase';
import { Link } from 'react-router-dom';
import history from '../../history';
import 'firebase/firestore';
import Header from '../../components/Header';
import Card from '../../components/Card';


const Historic = () => {


    return(

        <div className="div-kitchen">
            
                <Header
                    name1='Em Andamento'
                    name2='Histórico de Pedidos'

                    butClick1={() => history.push('/kitchen')}
                	butClick2={() => history.push('/historic')}
                />
                <h1 className="for-title">Histórico de Pedidos</h1>


                <div className="container">

                	<Card
                        tableNumber='4'                        
                        client='Zaine'
						worker='Amanda'
						buttonTitle='DELETAR PEDIDO'
                    />

					<Card
                        tableNumber='4'                        
                        client='Zaine'
						worker='Amanda'
						buttonTitle='DELETAR PEDIDO'
                    />

					<Card
                        tableNumber='4'                        
                        client='Zaine'
						worker='Amanda'
						buttonTitle='DELETAR PEDIDO'
                    />

					<Card
                        tableNumber='4'                        
                        client='Zaine'
						worker='Amanda'
						buttonTitle='DELETAR PEDIDO'
                    />
                    
                </div>
        </div>

    )


}

export default Historic;
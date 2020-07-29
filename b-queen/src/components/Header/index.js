import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import minilogocut from '../../img/mini-logo-cut.png';
import Button from '../Button';

function Header() {
    return (
        <div className="header-content d-flex justify-content-around" aria-label="Exemplo básico">
            <img src={minilogocut} className=' mini-logo img-responsive' alt='minilogo' />
            <Button
                type="button"
                className="btn btn-header"
                name='Fazer pedido'
            />
            <Button
                type="button"
                className="btn btn-header"
                name='Pedidos prontos'
            />
            <Button
                type="button"
                className="btn btn-header"
                name='Sair ⇲'
            />
            <Link to='login'></Link>
        </div >
    )
}


export default Header;
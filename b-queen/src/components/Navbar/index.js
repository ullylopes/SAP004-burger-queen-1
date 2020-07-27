import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import minilogo from '../../img/mini-logo.png'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <img src={minilogo} className='mini-logo' alt='minilogo' />
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="#">Fazer pedido</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="#">Pedidos prontos</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/login">Sair</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
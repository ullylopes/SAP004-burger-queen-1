import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import history from '../../history';
import minilogocut from '../../img/mini-logo-cut.png';
import Button from '../Button';
import LogOut from '../../view/login/logout';
import 'firebase/auth';
import 'firebase/firestore';


function Header(props) {
	
    return (
        <div className="header-content d-flex justify-content-around" aria-label="Exemplo básico">
            <img src={minilogocut} className=' mini-logo img-responsive' alt='minilogo' />
            <Button
                type="button"
                className="btn btn-header"
                name={props.name1}
                handleClick= {props.butClick1}
            />
            <Button
                type="button"
                className="btn btn-header"
                name={props.name2}
                handleClick= {props.butClick2}
            />
            <Button
                type="button"
                className="btn btn-header"
                name='Sair ⇲'
                handleClick={LogOut}
            />
            <Link to='login'></Link>
        </div >
    )
}


export default Header;
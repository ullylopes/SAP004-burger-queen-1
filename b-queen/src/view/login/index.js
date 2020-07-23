import React, { useState } from 'react';
import './login.css';
import firebase from '../../config/firebase';
import 'firebase/auth';
import { Link } from 'react-router-dom';
//import './LogoBQ.png';


function Login() {
  //variável de estado = nome do valor, função que atualiza esse valor = (início)
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  const [msgTipo, setMsgTipo] = useState();

  function logar() {

    firebase.auth().signInWithEmailAndPassword(email, senha).then(resultado => {


    }).catch(erro => {


    })
  }

  return (
    <div className='login-content d-flex '>


      <form className="form-signin mx-auto ">
        <div className="text-center mb-4">
          <img className="mb-4" src="/docs/4.5/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
        </div>


        <input onChange={(e) => setEmail(e.target.value)} type="email" id="inputEmail" className="form-control form-control-lg my-3" placeholder="Email" />
        <input onChange={(e) => setSenha(e.target.value)} type="password" id="inputPassword" className="form-control form-control-lg my-3" placeholder="Senha" />


        <button onClick={logar} className="btn btn-lg btn-block btn-login" type="button">Entrar</button>


        <div className='nav-register mt-5 text-center'>
          <p className='mx-2'>Ainda não é cadastrado?
    <Link to='register' className='mx-2'><u>Cadastre-se clicando aqui</u></Link>
          </p>
        </div>

      </form>
    </div>
  )
}

export default Login;
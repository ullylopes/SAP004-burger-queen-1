import React, { useState } from 'react';
import '../../view/login/login.css';
import firebase from '../../config/firebase';
import 'firebase/auth';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';
import Button from '../../components/Button/index';
import Input from '../../components/Input/index';
import authErrors from '../../config/firebase-error';


function Login(props) {
  //variável de estado = nome do valor, função que atualiza esse valor = (início)
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  let [errorMsg, setErrorMsg] = useState();

  function signIn() {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(result => {
        alert("LOGADO")
      }).catch(function (error) {
        if (authErrors[error.code]) {
          setErrorMsg(authErrors[error.code])
        } else {
          setErrorMsg('Tente novamente!')
        }
      })
  };

  //chamada do login
  const loginCall = (e) => {
    e.preventDefault();
    signIn(email, password);
  }

  return (
    <div className='login-content d-flex'>

      <form className="form-signin mx-auto ">

        <img src={logo} class="img-fluid" alt='logo' />

        <Input
          type='text'
          placeholder='Email'
          onChange={
            (e) => setEmail(e.target.value)
          }
        />
        <Input
          type='password'
          placeholder='Senha'
          onChange={
            (e) => setPassword(e.target.value)
          }
        />
        <Button
          name='Entrar'
          handleCLick={
            (e) => loginCall(e)
          }
        />
        {
          errorMsg ? (
            <div> {errorMsg}</div>
          ) : ""
        }

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
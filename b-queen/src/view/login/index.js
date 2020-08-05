import React, { useState } from 'react';
import '../../view/login/login.css';
import '../../reset.css';
import firebase from '../../config/firebase';
import 'firebase/auth';
import 'firebase/firestore';
import { Link } from 'react-router-dom';
import logoCut from '../../img/logo-cut.png';
import Button from '../../components/Button/index';
import Input from '../../components/Input/index';
import authErrors from '../../config/firebase-error';
import history from '../../history'
import { useDispatch } from 'react-redux'


function Login(props) {
  //variável de estado = nome do valor, função que atualiza esse valor = (início)
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  let [errorMsg, setErrorMsg] = useState();

  const dispatch = useDispatch();

  function signIn() {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        dispatch({ type: 'LOG_IN', userEmail: email })
        firebase
          .firestore()
          .collection('users')
          .get()
          .then((querySnapshot) => {
            const emailArray = [];
            querySnapshot
              .forEach((doc) => {
                emailArray
                  .push(doc.data()
                    .email);
              });

            const status = emailArray.indexOf(email);

            if (status === -1) {
              alert("Usuário não cadastrado!")
            } else {
              firebase
                .firestore()
                .collection('users')
                .where('email', '==', email)
                .get()
                .then((querySnapshot) => {
                  querySnapshot.forEach((doc) => {
                    if (doc.data().local === 'salao') {
                      history.push('/salon')
                    } else {
                      history.push('/kitchen')
                    }
                  })
                })
            }
          })
      }).catch(function (error) {
        if (authErrors[error.code]) {
          setErrorMsg(authErrors[error.code])
        } else {
          setErrorMsg('Tente novamente!')
          return
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
      <form className='form-signin mx-auto '>
        <img src={logoCut} class='img-fluid' alt='logo' />
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
          className='btn btn-login btn-lg btn-block'
          handleClick={
            (e) => {
              loginCall(e)
            }
          }
        />
        {
          errorMsg ? (
            <div className='error-msg'> {errorMsg}</div>
          ) : ''
        }
        <div className='nav-register mt-1 text-center'>
          <p className='mx-2'>Ainda não é cadastrado?
          <br />
            <Link to='register' className='mx-2'><u>Cadastre-se clicando aqui</u></Link>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Login;

import React, { useState } from 'react';
import './register.css';
import firebase from '../../config/firebase';
import 'firebase/auth';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Register = () => {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [errorType, setErrorType] = useState();
  const [errorMessage, setErrorMessage] = useState();

  const [radioSalao, setRadioSalao] = useState();
  const [radioCozinha, setRadioCozinha] = useState();


  const registerFirebase = () => {
    setErrorType(null)

    /*
    if(!email || !password){
        setErrorType('error')
        setErrorMessage('É necessário informar pelo menos email e senha para realizar o cadastro!')
        return;
    }else{}
    */
    firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {

      firebase.firestore().collection('users').get().then((querySnapshot) => {
        const emailArray = [];
        querySnapshot.forEach((doc) => {
          emailArray.push(doc.data().email);
        })

        const booleanEmail = [];
        for (let value of emailArray) {
          booleanEmail.push(value === email);
        }

        const status = booleanEmail.indexOf(true);
        if (status === -1) {
          firebase.firestore().collection('users').doc().set({
            uid: firebase.auth().currentUser.uid,
            email: email,
            name: name
          })
          alert("Cadastro Efetuado!")
        }
      })

    }).catch(error => {
      setErrorMessage('error')
      alert("Houve um erro ao cadastrar!")
    })

  }

  return (
    <div className="register-content d-flex">
      <div className="form-register d-flex">
        <form className="mx-auto text-center">

          <p className="edit-text-color" id="register-title">Cadastro</p>
          <div className="for-border">
            <Input
              onChange={
                (e) => setName(e.target.value)
              }
              type="text"
              id=""
              placeholder="Nome"
            />

            <Input
              onChange={
                (e) => setEmail(e.target.value)
              }
              type="email"
              id=""
              placeholder="Email"
            />

            <Input
              onChange={
                (e) => setPassword(e.target.value)
              }
              type="password"
              id="registration-password"
              placeholder="Senha"
            />

            <Input
              onChange={
                (e) => setConfirmPassword(e.target.value)
              }
              type="password"
              id="confirm-registration-password"
              placeholder="Confirmar Senha"
            />

            <p className="edit-text-color">Selecione o setor de trabalho:</p>


            <label for="salao" className="edit-text-color">
              <input type="radio" id="radio-hall" className="mx-2" name="local" value="salao" />
                        &#127828; Salão </label>

            <label for="cozinha" className="edit-text-color">
              <input type="radio" id="radio-kitchen" className="mx-2" name="local" value="cozinha" />
                        &#128293; Cozinha</label>

            <br />
          </div>
          <Link to='login'>
            <button className="btn btn-register-page edit-text-color" type="button">Cancelar</button>
          </Link>
          <button onClick={registerFirebase} className="btn btn-register-page edit-text-color" type="button">Cadastrar</button>

          <div className="text-center">
            {errorType === "error" && <span><strong>{errorMessage}</strong></span>}
          </div>
        </form>
      </div>
    </div >
  )
}

export default Register;
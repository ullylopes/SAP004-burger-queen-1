import React, { useState } from 'react';
import './register.css';
import firebase from '../../config/firebase';
import 'firebase/auth';
import { Link } from 'react-router-dom';

function Register(){  
    
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [errorType, setErrorType] = useState();
    const [errorMessage, setErrorMessage] = useState();
    
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
                
            }).catch(error =>{
                setErrorMessage('error')
                alert("Houve um erro ao cadastrar!")
            })
               
    }
    
    return(
        <div className="register-content d-flex">
            <div className="form-register d-flex">
                <form className="mx-auto text-center">
                    
                    <p className="edit-text-color" id="register-title">Cadastro</p>
                    <div className="for-border">
                        <input onChange={(e) => setName(e.target.value)} type="text" id="" className="form-control form-control-lg my-1" placeholder="Nome"/>
                        
                        <input onChange={(e) => setEmail(e.target.value)} type="email" id="" className="form-control form-control-lg my-1" placeholder="Email"/>

                        <input onChange={(e) => setPassword(e.target.value)} type="password" id="registration-password" className="form-control form-control-lg my-1" placeholder="Senha"/>

                        <input onChange={(e) => setConfirmPassword(e.target.value) } type="password" id="confirm-registration-password" className="form-control form-control-lg my-1" placeholder="Confirmar Senha"/>

                        <p className="edit-text-color">Selecione o setor de trabalho:</p>

                        <input type="radio" id="radio-hall" className="mx-2" name="local" value="salao"/>
                        <label for="salao" className="edit-text-color">&#127828; Salão </label>
                        
                        <input type="radio" id="radio-kitchen" className="mx-2" name="local" value="cozinha"/>
                        <label for="cozinha" className="edit-text-color">&#128293; Cozinha</label>

                        <br/>
                    </div>
                    <button className="btn btn-register-page edit-text-color" type="button">Cancelar</button>
                    <button onClick={registerFirebase} className="btn btn-register-page edit-text-color" type="button">Cadastrar</button>

                    <div className="text-center">
                        {errorType === "error" && <span><strong>{errorMessage}</strong></span>}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;
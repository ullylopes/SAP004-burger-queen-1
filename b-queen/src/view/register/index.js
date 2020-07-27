import React, { useState, useEffect } from 'react';
import './register.css';
import firebase from '../../config/firebase';
import 'firebase/auth';
import Input from '../../components/Input'
import { Link } from 'react-router-dom';
import miniLogo from '../../img/mini-logo.png';

const Register = () => {  
    
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [radioLocal, setRadioLocal] = useState("salao");

    const [errorType, setErrorType] = useState();
    const [errorMessage, setErrorMessage] = useState();
    
    useEffect(() => {
        console.log(radioLocal)
    }, [radioLocal])

    const registerFirebase = () => {
        /*
        alert(name)
        alert(email)
        alert(password)
        alert(confirmPassword)
        alert(radioLocal)        
        */       
        
            if(password !== confirmPassword){

            }else{
                firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
                    firebase.auth().currentUser
                    .updateProfile({ displayName: name })

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
                            name: name,
                            local: radioLocal
                        })
                        alert("Cadastro Efetuado!")                    
                        }
                    })
                }).catch(error =>{
                    setErrorMessage('error')
                    alert("Houve um erro ao cadastrar!")
                })  
            }           
    }
    
    return(
        <div className="register-content d-flex">
            
            <div className="form-register d-flex">        

                <form className="mx-auto text-center">                    
                    <p className="edit-text-color" id="register-title">Cadastro</p>
                    <div className="for-border">                     

                        <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Nome"/>
                        
                        <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email"/>

                        <input onChange={(e) => setPassword(e.target.value)} type="password" id="registration-password" placeholder="Senha"/>

                        <input onChange={(e) => setConfirmPassword(e.target.value) } type="password" id="confirm-registration-password" placeholder="Confirmar Senha"/>

                        <p className="edit-text-color">Selecione o setor de trabalho:</p>

                        <label for="salao" className="edit-text-color">
                            <input onChange={(e) => setRadioLocal(e.target.value)} type="radio" id="radio-hall" className="mx-2" name="local" value="salao" defaultChecked />
                        &#127828; Salão </label>
                        
                        <label for="cozinha" className="edit-text-color">
                            <input onChange={(e) => setRadioLocal(e.target.value)} type="radio" id="radio-kitchen" className="mx-2" name="local" value="cozinha" />
                        &#128293; Cozinha</label>

                        <br/>
                    </div>
                    <button className="btn btn-register-page edit-text-color" type="button">Cancelar</button>
                    <button onClick={registerFirebase} className="btn btn-register-page edit-text-color" type="button">Cadastrar</button>
                    
                </form>
            </div>
        </div>
    )
}

export default Register;
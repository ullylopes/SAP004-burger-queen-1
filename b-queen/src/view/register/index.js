import React, { useState } from 'react';
import './register.css';
import firebase from '../../config/firebase';
import 'firebase/auth';

function Register(){  
    
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    
    function registerFirebase(){
        alert("Cadastrou")
    }
    
    return(
        <div className="login-content d-flex align-items-center">

            <form className="form-signin mx-auto ">
                <div className="text-center mb-4">
                    <img className="mb-4" src="/docs/4.5/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/>
                </div>

                <p>Cadastro:</p>
                <input onChange={(e) => setName(e.target.value) } type="text" id="" className="form-control form-control-lg my-3" placeholder="Nome" />
                <input onChange={(e) => setEmail(e.target.value) } type="email" id="" className="form-control form-control-lg my-3" placeholder="Email" />
                <input onChange={(e) => setPassword(e.target.value) } type="password" id="registration-password" className="form-control form-control-lg my-3" placeholder="Senha"/>
                <input onChange={(e) => setConfirmPassword(e.target.value) } type="password" id="confirm-registration-password" className="form-control form-control-lg my-3" placeholder="Confirmar Senha"/>

                <p>Setor:</p>
                <input type="radio" id="radio-hall" className="mx-2" name="local" value="salao"/>
                <label for="male">&#127828; Salão</label>
                
                <input type="radio" id="radio-kitchen" className="mx-2" name="local" value="cozinha"/>
                <label for="female">&#128293; Cozinha</label>

                <button className="btn btn-lg btn-block btn-register-page" type="button">Cancelar</button>
                <button onClick={registerFirebase} className="btn btn-lg btn-block btn-register-page" type="button">Cadastrar</button>

            </form>
        </div>
    )
}

export default Register;
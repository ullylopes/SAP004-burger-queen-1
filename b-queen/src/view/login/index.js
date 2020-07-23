import React, { useState } from 'react';
import './login.css';
import firebase from '../../config/firebase';
import 'firebase/auth';


function Login() {
    //variável de estado = nome do valor, função que atualiza esse valor = (início)
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    const [msgTipo, setMsgTipo] = useState();

    function logar() {

       firebase.auth().signInWithEmailAndPassword(email, senha).then(resultado => {
         console.log('sucesso')
          
       }).catch(erro => {
         console.log('erro')
          
       })
    }

    return(
        <div className='login-content d-flex align-items-certer'>

        <form className="form-signin mx-auto ">
  <div className="text-center mb-4">
    <img className="mb-4" src="/docs/4.5/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
  </div>


    <input onChange={(e) => setEmail(e.target.value)}  type="email" id="inputEmail" className="form-control form-control-lg my-3" placeholder="Email" />  
    <input onChange={(e) => setSenha(e.target.value)} type="password" id="inputPassword" className="form-control form-control-lg my-3" placeholder="Senha" />
  

  <button onClick={logar} className="btn btn-lg btn-block btn-login" type="button">Entrar</button>


  <div className='opcoes-login mt-5 text-center'>
    <a href='//#endregion' className='mx-2'>Recuperar Senha</a>
    <a href='//#endregion' className='mx-2'>Quero cadastrar</a>
  </div>

</form>
</div>
    )
}

export default Login;
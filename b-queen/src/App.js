import React from 'react';
import Button from './components/Button.js'
import './App.css';

function App() {

  const fineOk = () => {
    alert("Fine")
  }

  return (
    <div className="App">
      <p>Zaine</p>
      <br/>
      <Button id="01" class="App-link" handleClick={fineOk} name="Ok"/>
      <br/>
      <Button id="02" handleClick={() =>{alert("Hii")}} name="Olá"/>
    </div>
  );
}

export default App;

/*

<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
</header>

*/
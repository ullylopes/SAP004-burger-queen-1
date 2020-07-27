import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

/*PAGINAS*/
import Login from './view/login/index';
import Register from './view/register/index';
import Salon from '../src/view/salon';

function App() {
  return (
    <Router>

      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/salon' component={Salon} />

    </Router>
  );
}

export default App;

/*
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
</header>
*/
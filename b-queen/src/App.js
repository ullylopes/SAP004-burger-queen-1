import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';


/*PAGINAS*/
import Login from './view/login/index';
import Register from './view/register/index';
import Salon from '../src/view/salon';
//import Kitchen from '../src/view/kitchen';

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/salon' component={Salon} />
        <Route component={() => <div>Essa página não existe!</div>} />
        {/*<Route path='/kitchen' component={Kitchen} />*/}
      </Switch>
    </Router>
  );
}

export default App;
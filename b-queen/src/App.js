import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import store from '../src/store/';

/*PAGINAS*/
import Login from './view/login/index';
import Register from './view/register/index';
import Salon from '../src/view/salon';
import Kitchen from '../src/view/kitchen'
import { Provider } from 'react-redux';
//import Kitchen from '../src/view/kitchen';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/salon' component={Salon} />
          <Route path='/kitchen' component={Kitchen} />
          <Route component={() => <div>Essa página não existe!</div>} />
          {/*<Route path='/kitchen' component={Kitchen} />*/}
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
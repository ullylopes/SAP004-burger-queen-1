import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import store from '../src/store/';

/*PAGINAS*/
import Login from './view/login/index';
import Register from './view/register/index';
import Salon from '../src/view/salon';
import Kitchen from '../src/view/kitchen';
import Historic from '../src/view/historic';
import Readyorders from '../src/view/readyorders';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/salon' component={Salon} />
          <Route path='/kitchen' component={Kitchen} />
          <Route path='/historic' component={Historic} />
          <Route path='/readyorders' component={Readyorders} />
          <Route component={() => <div>Essa página não existe!</div>} />
          
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
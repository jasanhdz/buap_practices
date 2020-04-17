import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Bank from '../pages/Bank';
import Transaction from '../pages/Transaction';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/bank_expert' component={Bank} />
          <Route exact path='/transaction_expert' component={Transaction} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;

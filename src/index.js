import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import App from './App';
import TestPage from './components/TestPage/TestPage';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={TestPage} exact />
      <Route path="/page**" component={TestPage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);

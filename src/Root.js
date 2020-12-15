import React from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import AddAddressPage from './components/AddAddressPage/AddAddressPage';
import AddEmailPage from './components/AddEmailPage/AddEmailPage';
import AddNamePage from './components/AddNamePage/AddNamePage';
import AddPasswordPage from './components/AddPasswordPage/AddPasswordPage';
import FinishPage from './components/FinishPage/FinishPage';
import HomePage from './components/HomePage/Homepage';
import VerificationCode from './components/NavBar/VerificationCode/VerificationCode';
import WelcomeBack from './components/WelcomeBack/WelcomeBack';

const Root = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/welcome" component={WelcomeBack} />
      <Route exact path="/add-name" component={AddNamePage} />
      <Route exact path="/add-email" component={AddEmailPage} />
      <Route exact path="/verification-code" component={VerificationCode} />
      <Route exact path="/add-password" component={AddPasswordPage} />
      <Route exact path="/add-address" component={AddAddressPage} />
      <Route exact path="/finish" component={FinishPage} />
    </Switch>
  </Router>
);

export default Root;

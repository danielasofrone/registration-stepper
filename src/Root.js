import React from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import AddEmailPage from './components/AddEmailPage/AddEmailPage';
import AddNamePage from './components/AddNamePage/AddNamePage';
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
    </Switch>
  </Router>
);

export default Root;

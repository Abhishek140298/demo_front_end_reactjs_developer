import React from 'react';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Signup from './components/login/Signup'
import { Switch, Route } from 'react-router-dom';
export default class App extends React.Component {
  render() {
    return (
      <>
        <Switch>
          <Route path='/home' exact component={Home} />
          <Route path='/' exact component={Login} />
          <Route path='/signup' exact component={Signup}/>
        </Switch>
      </>
    );
  }
}

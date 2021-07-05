import React from 'react';
import Home from './components/home/Home';
import Login from './components/login/Login'
import {Switch,Route} from 'react-router-dom';
export default class App extends React.Component {
  render() {
    return (
      <>
       <Switch><Route path='/home' exact component={Home}/>
       <Route path ='/' exact component={Login}/></Switch>
      </>
    );
  }
}

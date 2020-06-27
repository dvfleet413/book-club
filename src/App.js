import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './components/Home';
import Books from './containers/Books';
import LoginForm from './components/LoginForm';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/books'><Books /></Route>
        <Route path='/login'><LoginForm /></Route>
        <Route extact path='/'><Home /></Route>
      </Switch>
    </Router>
  
  );
}

export default App;

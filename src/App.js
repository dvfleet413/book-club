import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import LoginForm from './components/LoginForm';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/login'><LoginForm /></Route>
      </Switch>
    </Router>
  
  );
}

export default App;

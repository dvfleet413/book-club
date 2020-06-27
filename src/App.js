import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Layout from './containers/Layout';
import Home from './components/Home';
import Books from './containers/Books';
import BookDetail from './components/BookDetail';
import CurrentBook from './containers/CurrentBook';
import LoginForm from './components/LoginForm';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path='/books/current'><CurrentBook /></Route>
          <Route path='/books/:id'><BookDetail /></Route>
          <Route path='/books'><Books /></Route>
          <Route path='/login'><LoginForm /></Route>
          <Route extact path='/'><Home /></Route>
        </Switch>
      </Layout>
    </Router>
  
  );
}

export default App;

import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { useAuth } from './hooks/useAuth';
import Layout from './containers/Layout';
import Home from './components/Home';
import Books from './containers/Books';
import BookDetail from './components/BookDetail';
import CurrentBook from './containers/CurrentBook';
import LoginForm from './components/LoginForm';
import './App.css';

function App() {
  const [user, setUser] = useAuth();

  return (
    <Router>
      <Layout setUser={setUser}>
        <Switch>
          <Route path='/books/current'><CurrentBook /></Route>
          <Route path='/books/:id'><BookDetail /></Route>
          <Route path='/books'><Books /></Route>
          <Route path='/login'><LoginForm setUser={setUser} /></Route>
          <Route extact path='/'><Home /></Route>
        </Switch>
      </Layout>
    </Router>
  
  );
}

export default App;

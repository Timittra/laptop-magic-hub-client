/* eslint-disable no-unused-vars */
import React, { createContext, useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import CheckOut from './components/CheckOut/CheckOut';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Order from './components/Order/Order';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Admin from './components/Admin/Admin';

export const UserContext = createContext();

function App() {

  let [loggedInUser, setLoggedInUser] = useState({
    isSignedIn : false,
    userName: '',
    email: ''
  });

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header />

        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <PrivateRoute path='/order'>
          <Order/>
          </PrivateRoute>
          <PrivateRoute path='/admin'>
            <Admin />
          </PrivateRoute>
          <PrivateRoute path='/checkout/:id'>
            <CheckOut />
          </PrivateRoute>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>

      </Router>
    </UserContext.Provider>
  );
}

export default App;

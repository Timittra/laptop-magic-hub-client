/* eslint-disable no-unused-vars */
import React, { useContext, useState, useRef } from 'react';
import { UserContext } from '../../App';
import firebase from 'firebase/app';
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router';
import GoogleImage from '../../images/google.png';
import './Login.css';

const Login = () => {
    
    let [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      } else {
        firebase.app();
      }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
    
        firebase.auth().signInWithPopup(provider)
          .then((result) => {
            const { displayName, email } = result.user;
            const signedInUser = {
              userName: displayName,
              email: email
            }
            setLoggedInUser(signedInUser);
            history.replace(from);
          }).catch((error) => {
            const errorMessage = error.message;
            console.log('Google sign in error', errorMessage);
          });
      }

    return (
        <div className='login'>
            <h2>This is login</h2>
            <p>
            <span onClick={handleGoogleSignIn} className='google-login'><img className='google-img' src={`${GoogleImage}`} alt=''/>
             Continue with Google</span>
            </p>
        </div>
    );
};

export default Login;
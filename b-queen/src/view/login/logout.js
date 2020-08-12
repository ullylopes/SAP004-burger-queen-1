//import React from 'react';
//import { withRouter } from "react-router-dom";
import firebase from '../../config/firebase';
import 'firebase/auth';
import 'firebase/firestore';
import history from '../../history';

const LogOut = () => {
    
        firebase
            .auth()
            .signOut()
            .then(() => {
                history.push('/login')
            })
    
};

export default LogOut;


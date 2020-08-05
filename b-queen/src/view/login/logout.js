//import React from 'react';
//import { withRouter } from "react-router-dom";
import firebase from '../../config/firebase';
import 'firebase/auth';
import 'firebase/firestore';


const LogOut = () => {
    return (
        firebase
            .auth()
            .signOut()
            .then(() => {
                alert('Volte Sempre')
            })
    )
};

export default LogOut;


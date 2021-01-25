import { Button } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../store/userSlice';
import { auth, provider } from '../../firebase';
import * as classes from './Login.module.css';

const Login = ()=> {

    const dispatch = useDispatch();
    
    const signIn = ()=> {
        auth.signInWithPopup(provider)
            .then(({user})=>{
                dispatch(login({
                    displayName: user.displayName,
                    email: user.email,
                    photoUrl: user.photoURL
                }));
            })
            .catch(error=>{
                alert(error.message);
            })
    }

    return (
        <div className={classes.login}>
            <div className={classes.login_container}>
                <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png" alt="" />
                <Button onClick={signIn}
                    color="primary"
                    variant="contained"
                >SIGN IN</Button>
            </div>
        </div>
    )
}

export default Login;
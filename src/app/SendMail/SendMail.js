import React from 'react';
import * as classes from './SendMail.module.css';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from '../../store/mailSlice';
import { db } from '../../firebase';
import firebase from 'firebase';

import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';



const SendMail = ()=> {

    const { register, handleSubmit, watch, errors } = useForm();
    const dispatch = useDispatch();

    const onSubmit = (formData) => {
        
        db.collection('emails').add({
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        dispatch(closeSendMessage());
    }

    return (
        <div className={classes.send_mail}>
            <div className={classes.send_mail_header}>
                <h3>New Message</h3>
                <CloseIcon className={classes.send_mail_close} onClick={()=>dispatch(closeSendMessage())}/>
            </div>
            <form onSubmit={ handleSubmit(onSubmit)}>
                <input 
                    type="email" 
                    name="to" 
                    placeholder="To" 
                    ref={register({ required:true })} 
                />
                {errors.to && <p className={classes.send_mail_error}>To is required</p>}
                <input 
                    type="text" 
                    name="subject" 
                    placeholder="Subject" 
                    ref={register({ required:true })} 
                />
                {errors.subject && <p className={classes.send_mail_error}>Subject is required</p>}
                <input 
                    type="text" 
                    name="message" 
                    placeholder="Message" 
                    className={classes.send_mail_message} 
                    ref={register({ required:true })} 
                />       
                {errors.message && <p className={classes.send_mail_error}>Message is required</p>}         
                <div className={classes.send_mail_options}>
                    <Button 
                        className={classes.send_mail_send_button}
                        type="submit"
                        color="primary"
                        variant="contained"
                    >
                        Send
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default SendMail;
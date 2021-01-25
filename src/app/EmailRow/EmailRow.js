import React from 'react';
import * as classes from './EmailRow.module.css';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectMail } from '../../store/mailSlice';

import { Checkbox, IconButton } from '@material-ui/core';
import StarBorderOutlineIcon from '@material-ui/icons/StarOutline';


const EmailRow = ({id, title, subject, description, time})=>{

    const history = useHistory();
    const dispatch = useDispatch();

    const openMail = ()=> {
        dispatch(selectMail({
            id, 
            title, 
            subject, 
            description, 
            time,
        }));

        history.push('/mail')
    }

    return (
        <div className={classes.email_row} onClick={openMail}>
            <div className={classes.email_row_options}>
                <Checkbox />
                <IconButton>
                    <StarBorderOutlineIcon />
                </IconButton>
            </div>
            <div className={classes.email_row_title}>
                {title}
            </div>
            <div className={classes.email_row_message}>
                <h4>{subject}
                    <span className={classes.email_row_description}>
                        {description}
                    </span>
                </h4>
            </div>
            <div className={classes.email_row_time}>
                {time}
            </div>
        </div>
    )
}

export default EmailRow;
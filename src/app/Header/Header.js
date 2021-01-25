import React from 'react';
import * as classes from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../store/userSlice';

import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { auth } from '../../firebase';


const Header = (props) => {
    const user = useSelector(selectUser);

    const dispatch = useDispatch();

    const signOut = ()=> {
        
        auth.signOut()
            .then(()=>{                
                    dispatch(logout());
                }
            );
    }

    return (
        <div className={classes.header}>
            <div className={classes.header_left}>
                <IconButton>
                    <MenuIcon />
                </IconButton>    
                <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png" alt="" />           
            </div>
            <div className={classes.header_middle}>
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <input placeholder="Search mail"  />
                <IconButton>
                    <ArrowDropDownIcon className={classes.header.inputCaret} />
                </IconButton>
                
            </div>
            <div className={classes.header_right}>
                    <IconButton>
                        <HelpOutlineIcon />
                    </IconButton>
                    <IconButton>
                        <AppsIcon />
                    </IconButton>
                    <IconButton>
                        <NotificationsIcon />
                    </IconButton>
                    <Avatar src={user?.photoUrl} onClick={signOut}/>
            </div>
        </div>
     );
}
 
export default Header;
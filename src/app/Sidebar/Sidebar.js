import React from 'react';
import * as classes from './Sidebar.module.css';
import SidebarOption from './SidebarOption/SidebarOption';
import { useDispatch } from 'react-redux';
import { openSendMessage } from '../../store/mailSlice';

import { Button, Icon, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SendIcon from '@material-ui/icons/Send';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import PersonIcon from '@material-ui/icons/Person';
import VideoCallRoundedIcon from '@material-ui/icons/VideoCallRounded';
import CallRoundedIcon from '@material-ui/icons/CallRounded';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const Sidebar = () => {

    const dispatch = useDispatch();

    return ( 
        <div className={classes.sidebar}>
            <Button startIcon={<AddIcon fontSize="large" />} className={classes.sidebar_compose} onClick={ ()=>dispatch(openSendMessage())}>Compose</Button>
            <SidebarOption Icon={InboxIcon} number="54" title="Inbox" selected />
            <SidebarOption Icon={StarIcon} number="12" title="Starred" />
            <SidebarOption Icon={AccessTimeIcon} number="2" title="Snoozed" />
            <SidebarOption Icon={SendIcon} number="23" title="Send" />
            <SidebarOption Icon={InsertDriveFileIcon} number="23" title="Drafts" />
            <SidebarOption Icon={ExpandMoreIcon} number="" title="More" />
            
            <div className={classes.sidebarFooter}>
                <div className={classes.sidebarFooterIcons}>
                    <IconButton>
                        <PersonIcon />
                    </IconButton>
                    <IconButton>
                        <VideoCallRoundedIcon />
                    </IconButton>                    
                    <IconButton>
                        <CallRoundedIcon />
                    </IconButton>                    
                </div>
            </div>
        </div>
     );
}
  
export default Sidebar;
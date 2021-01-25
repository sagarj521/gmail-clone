import React from 'react';
import * as classes from './Mail.module.css';
import { useHistory } from 'react-router-dom';

import { Avatar, IconButton } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArchiveIcon from '@material-ui/icons/Archive';
import ReportIcon from '@material-ui/icons/Report';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import LabelIcon from '@material-ui/icons/Label';
import WatchLaterSharpIcon from '@material-ui/icons/WatchLaterSharp';
import MailIcon from '@material-ui/icons/Mail';
import OfflinePinIcon from '@material-ui/icons/OfflinePin';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SettingsIcon from '@material-ui/icons/Settings';
import PrintIcon from '@material-ui/icons/Print';
import LaunchIcon from '@material-ui/icons/Launch';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ReplyIcon from '@material-ui/icons/Reply';
import { useSelector } from 'react-redux';
import { selectOpenMail } from '../../store/mailSlice';

const Mail = ()=> {

    const history = useHistory();
    const selectedMail = useSelector(selectOpenMail);
    console.log(selectedMail);

    return (
        <div className={classes.mail}>
            <div className={classes.mail_tools}>
                <div className={classes.mail_tools_left}>
                    <IconButton onClick={()=>history.push('/')}>
                        <ArrowBackIcon />
                    </IconButton>
                    <IconButton>
                        <ArchiveIcon />
                    </IconButton>
                    <IconButton>
                        <ReportIcon />
                    </IconButton>
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton>
                        <MailIcon />
                    </IconButton>
                    <IconButton>
                        <WatchLaterSharpIcon />
                    </IconButton>
                    <IconButton>
                        <OfflinePinIcon />
                    </IconButton>
                    <IconButton>
                        <LabelIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>                                
                </div>
                <div className={classes.mail_tools_right}>
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                </div>
            </div>
            <div className={classes.mail_body}>
                <div className={classes.mail_body_header}>
                    <h2>{selectedMail?.subject}</h2>
                    <div>
                        <IconButton>
                            <PrintIcon />
                        </IconButton>
                        <IconButton>
                            <LaunchIcon />
                        </IconButton>
                    </div>
                </div>
                <div className={classes.sender_section}>
                    <div className={classes.sender_section_left}>
                        <Avatar />
                        <h2>sender name</h2>
                        <span>{selectedMail?.title}</span>                        
                    </div>                        
                    <div className={classes.sender_section_right}>
                        <span>{selectedMail?.time}</span>
                        <IconButton>
                            <StarBorderIcon />
                        </IconButton>
                        <IconButton>
                            <ReplyIcon />
                        </IconButton>
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
                    </div>
                </div>
                <div className={classes.mail_message}>
                    <p>{selectedMail?.description}</p>
                </div>                
            </div>          
        </div>
    )
}

export default Mail;
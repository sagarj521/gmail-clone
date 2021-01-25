import React from 'react';
import * as classes from './SidebarOption.module.css';

const SidebarOption = ({Icon, title, number, selected }) => {

    let sidebar_option_class = [classes.sidebar_option];

    if(selected) { sidebar_option_class.push(classes.sidebar_option_active) }

    return ( 
        <div className={sidebar_option_class.join(" ")}>
           <Icon />
           <h3>{title}</h3>
           <p>{number}</p>
        </div>
        
     );
}
 
export default SidebarOption;
import React from 'react';
import * as classes from './Section.module.css';

const Section = ({Icon, title, color, selected }) => {

    let section_classes = [classes.section];

    if(selected) {
        section_classes.push(classes.section_selected);
    }

    return ( 
            <div className={section_classes.join(" ")}
            >
                <Icon />
                <h4>{title}</h4>
            </div>   
     );
}
 
export default Section;
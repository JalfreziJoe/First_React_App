import React from 'react';
import classes from './Cockpit.css'

const cockpit=(props) => {
    const assignedClasses = [];
    let btnClass = '';
    if (props.showPeople) {
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2){
      assignedClasses.push('red');
    }
    if (props.persons.length <= 1) {
      assignedClasses.push('bold');
    }

    return(
    <div className={classes.Cockpit}>
        <h1>I'm a react app</h1>
        <p className={assignedClasses.join(' ')}>This is really working</p>
        <button
        className={btnClass}
        onClick={props.clicked}>Toggle display people</button>
    </div>
    );
};

export default cockpit;
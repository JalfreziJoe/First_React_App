import React, {useEffect, useRef, useContext} from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit=(props) => {
    // functional based way to get a ref for a component
    const toggleButtonRef = useRef(null);
    const authContext = useContext(AuthContext);
    
    useEffect(() => {
      console.log('[Cockpit.js] useEffect');
      toggleButtonRef.current.click();
      // const timer = setTimeout(() => {
      //     console.log('saved data to cloud');
    
      //   }, 1000);
        return () => {
          // about to be removed from DOM
          //clearTimeout(timer);
          console.log('[cockpit.js] cleanup here');
        }
    }, []);

    // if no useeffect second param and you want to cancel a cleanup or just run clean up after
    useEffect(() => {
      console.log('[Cockpit.js] 2nd useEffect');
      return () => {
        // about to be removed from DOM
        console.log('[cockpit.js] 2nd cleanup here');
      }
    });

    const assignedClasses = [];
    let btnClass = '';
    if (props.showPeople) {
        btnClass = classes.Red;
    }

    if (props.personsLength <= 2){
      assignedClasses.push('red');
    }
    if (props.personsLength <= 1) {
      assignedClasses.push('bold');
    }

    return(
    <div className={classes.Cockpit}>
        <h1>{props.title}</h1>
        <p className={assignedClasses.join(' ')}>This is really working</p>
        <button
        ref={toggleButtonRef}
        className={btnClass}
        onClick={props.clicked}>Toggle display people</button>
        
        <button onClick={authContext.login}>Login</button>
        
    </div>
    );
};

// React memo allows you to optimise your rendering. It will compare the props from last render (although its more top level. String changes or number, etc. Not array or object data)
export default React.memo(cockpit);
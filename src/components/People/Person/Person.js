import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import Aux from '../../../hoc/Auxillary';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';



class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    // React v16 version of accessing the context
    static contextType = AuthContext;

    componentDidMount() {
        //this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.auth);
    }

    render() {
        console.log('[Person.js] rendering...');
        // return (
        //    // <div className="Person" style={style}>
        //   <div className={classes.Person}>
        //         <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old</p>
        //         <p>{this.props.children}</p>
        //         <input type="text" onChange={this.props.changed} value={this.props.name} />
        //     </div>
        // )

        // Or return Array so you can render without a wrapping <div>
        // return [
        //     // <div className="Person" style={style}>
           
        //     <p key="a1" onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old</p>,
        //     <p key="a2" >{this.props.children}</p>,
        //     <input key="a3" type="text" onChange={this.props.changed} value={this.props.name} />
        // ]

        // OR use an auxillary
        return (
           // <div className="Person" style={style}>
           <Aux >
                {this.context.auth ? <p>Logged in</p>:<p>Please login</p>}
                <p key="a1" onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old</p>
                <p key="a2">{this.props.children}</p>
                <input
                 key="a3"
                 //older versions of React
                 //ref={(inputEl) => {this.inputElement = inputEl}}
                 ref={this.inputElementRef}
                 type="text"
                 onChange={this.props.changed}
                 value={this.props.name} />
            </Aux>
        )

        // or use React.fragment
        // return (
        //     // <div className="Person" style={style}>
        //     <React.Fragment>
        //          <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old</p>
        //          <p>{this.props.children}</p>
        //          <input type="text" onChange={this.props.changed} value={this.props.name} />
        //      </React.Fragment>
        //  )
 
 
    }
}

// function property definitions
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);
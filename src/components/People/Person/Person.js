import React, {Component} from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Auxillary';
import withClass from '../../../hoc/withClass';


class Person extends Component {
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
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
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

export default withClass(Person, classes.Person);
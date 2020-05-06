import React, {PureComponent} from 'react';
import Person from './Person/Person';


class People extends PureComponent {
    //PureComponent does all the checking of props for you.

    // static getDerivedStateFromProps(props, state) {
    //     console.log('[People.js] getDerivedStateFromProps');
    //     return state;
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[People.js] shouldComponentUpdate');
    //     // checking here before re-render should occure
    //     if (nextProps.persons !== this.props.persons ||
    //         nextProps.clicked !== this.props.clicked ||
    //         nextProps.changed !== this.props.changed)
    //         return true;
    //     else
    //         return false;
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[People.js] getSnapshotBeforeUpdate');
        return {message:'test message'};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[People.js] componentDidUpdate');
        console.log(snapshot);
    }

    componentWillUnmount() {
        // Use when component is about to be removed
        console.log('[People.js] componentWillUnmount');
    }

    render() {
        console.log('[People.js] rendering...');
        return this.props.persons.map( (person, index) => { 
            return (
                <Person
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event)=> this.props.changed(event, person.id)}
                 />
            )
        });
    }
}

export default People;
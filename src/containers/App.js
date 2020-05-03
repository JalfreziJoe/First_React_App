import React, { Component } from 'react';

import classes from './App.css';

import People from '../components/People/People';
import Cockpit from '../components/Cockpit/Cockpit';



class App extends Component {
  state = {
    persons: [
      { id:'asd', name: 'Joe', age:41},
      { id:'qwe', name: 'Claire', age:39},
      { id:'zcx', name: 'Scout', age:7}
    ],
    showPeople: false
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // this uses spread to no mutate the state object
    const person = {
      ...this.state.persons[personIndex]
    };

    // alternative non-modern approach
    //const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons:persons });
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const isShowing = this.state.showPeople;
    this.setState({showPeople: !isShowing});
  }

  
  render() {

    
    let people = null;
    let btnClass = [classes.button];
    
    if (this.state.showPeople) {
      people = (
        <div>
          <People
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
           />
          </div>
      );

      btnClass.push(classes.Red)
      // css.backgroundColor = 'green';
      // css[':hover'] = {
      //   backgroundColor: 'lightgreen',
      //   color: 'black'
      // }
    } 
    

    
    //console.log(classes);
    
    return (
    
      <div className={classes.App}>
        <Cockpit
          showPeople={this.state.showPeople}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
        {people}
          
      </div>

    );
    //return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'does this work'));
  }
}

export default App;
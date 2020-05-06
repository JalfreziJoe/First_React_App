import React, { Component } from 'react';

import classes from './App.css';

import People from '../components/People/People';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxillary';



class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id:'asd', name: 'Joe', age:41},
      { id:'qwe', name: 'Claire', age:39},
      { id:'zcx', name: 'Scout', age:7}
    ],
    showPeople: false,
    showCockpit: true,
    changeCounter: 0
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouleComponentUpdate');
    return true;
  }
  
  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

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
    // setState can use a pass through of the object OR a function. You should use a function when updating app time critical elements - such as a counter)
    // dont do this EVER this.setState({persons:persons, changeCounter: this.state.changeCounter+1 });
    //this.setState({persons:persons});

    // best practice for changes that depend on the old state
    this.setState((prevState, props) => {
      return {
        persons:persons,
        changeCounter: prevState.changeCounter +1
      };
    });
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
    console.log('[App.js] render');
    
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
    
      <Aux>
        <button onClick={() => {
         this.setState({showCockpit: false}); 
        }}>Remove Cockpit</button>
        {this.state.showCockpit ? (
          <Cockpit
            title={this.props.appTitle}
            showPeople={this.state.showPeople}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonsHandler} />
        ) : null}
        {people}
          
      </Aux>

    );
    //return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'does this work'));
  }
}

export default withClass(App, classes.App);

import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Joe', age:41},
      { name: 'Claire', age:39},
      { name: 'Scout', age:7}
    ]
  };

  switchNameHandler = (newName) => {
    //console.log('clicked!');
    // Don't do this!! this.state.persons[0].name = "Alex";
    this.setState({persons:[
      { name: newName, age:18},
      { name: 'Noah', age:14},
      { name: 'Porridge', age:'8+'}
    ] });
  }

  nameChangeHandler = (event) => {
    this.setState({persons:[
      { name: 'Hope', age:18},
      { name: event.target.value, age:14},
      { name: 'Porridge', age:'8+'}
    ] });
  }

  render() {
    const css = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    
    return (
      <div className="App">
        <h1>I'm a react app</h1>
        <p>This is really working</p>
        <button
          style={css}
          onClick={() => this.switchNameHandler('Joseph')}>Switch Name</button>
        <Person
         name={this.state.persons[0].name}
         age={this.state.persons[0].age}>
           Hobbies: running</Person>
        <Person
        name={this.state.persons[1].name}
        age={this.state.persons[1].age}
        changed={this.nameChangeHandler}/>
        <Person
        click={this.switchNameHandler.bind(this, 'Joe!')}
        name={this.state.persons[2].name}
        age={this.state.persons[2].age}/>
      </div>
    );
    //return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'does this work'));
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>I'm a react app</h1>
        <p>This is really working</p>
        <Person />
      </div>
    );
    //return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'does this work'));
  }
}

export default App;

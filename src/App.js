import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [personsState,setPersonsState] = useState({
    persons: [
    { name: 'Joe', age:41},
    { name: 'Claire', age:39},
    { name: 'Scout', age:7}
  ]});

  console.log(personsState);

  const switchNameHandler = () => {
    //console.log('clicked!');
    // Don't do this!! this.state.persons[0].name = "Alex";
    setPersonsState({persons:[
      { name: 'Hope', age:18},
      { name: 'Noah', age:14},
      { name: 'Porridge', age:'8+'}
    ] });
  }

  return (
      <div className="App">
        <h1>I'm a react app</h1>
        <p>This is really working</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>Hobbies: running</Person>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
      </div>
    );
    //return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'does this work'));
  
}

export default App;





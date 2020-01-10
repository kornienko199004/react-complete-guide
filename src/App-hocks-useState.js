import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = (props) => {
  const [personsState, setPersons] = useState({
    persons: [
      { name: 'Aleksey', age: 29 },
      { name: 'Manu', age: 27 },
      { name: 'Max', age: 28 },
    ],
    otherState: 'some state',
  });

  const switchNameHandler = () => {
    setPersons({
      persons: [
        { name: 'Alex', age: 29 },
        { name: 'Manu', age: 27 },
        { name: 'Max', age: 20 },
      ]
    });
  };

  console.log(personsState);

    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <p>This is really working!</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My hobbies: Racing</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
      </div>
    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi, I\'m React App'));
};

export default app;

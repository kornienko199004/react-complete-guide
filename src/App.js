import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <p>This is really working!</p>
        <Person name="Alesey" age="29" />
        <Person name="Manu" age="27">My hobbies: Racing</Person>
        <Person name="Max" age="28" />
      </div>
    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi, I\'m React App'));
  }
}

export default App;

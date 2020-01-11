import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { name: 'Aleksey', age: 29 },
            { name: 'Manu', age: 27 },
            { name: 'Max', age: 28 },
        ],
        showPersons: false,
    };

    switchNameHandler = newName => {
        this.setState({
            persons: [
                { name: newName, age: 29 },
                { name: 'Manu', age: 27 },
                { name: 'Max', age: 20 },
            ],
        });
    };

    nameChangedHandler = event => {
        this.setState({
            persons: [
                { name: 'Aleksey', age: 29 },
                { name: event.target.value, age: 27 },
                { name: 'Max', age: 20 },
            ],
        });
    };

    togglePersonsHandler = () => {
        this.setState({ showPersons: !this.state.showPersons });
    };

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    <Person
                        name={this.state.persons[0].name}
                        age={this.state.persons[0].age}
                    />
                    <Person
                        name={this.state.persons[1].name}
                        age={this.state.persons[1].age}
                        click={this.switchNameHandler.bind(this, 'Koko')}
                        changed={this.nameChangedHandler}
                    >
                        My hobbies: Racing
                    </Person>
                    <Person
                        name={this.state.persons[2].name}
                        age={this.state.persons[2].age}
                    />
                </div>
            );
        }

        return (
            <div className="App">
                <h1>Hi, I'm React App</h1>
                <p>This is really working!</p>
                <button style={style} onClick={this.togglePersonsHandler}>
                    Switch Name
                </button>
                {persons}
            </div>
        );
        // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi, I\'m React App'));
    }
}

export default App;

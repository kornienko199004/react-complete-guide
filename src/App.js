import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { id: 'asd1', name: 'Aleksey', age: 29 },
            { id: 'asd2', name: 'Manu', age: 27 },
            { id: 'asd3', name: 'Max', age: 28 },
        ],
        showPersons: false,
    };

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({ persons: persons }); 
    };

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => p.id === id);
        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({
            persons: persons,
        });
    };

    togglePersonsHandler = () => {
        this.setState({ showPersons: !this.state.showPersons });
    };

    render() {
        let persons = null;
        let btnClass = [classes.Button];

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                                    click={() => this.deletePersonHandler(index)}
                                    name={person.name}
                                    age={person.age}
                                    key={person.id}
                                    changed={(event, id) => this.nameChangedHandler(event, person.id)}
                                    />;
                    })}
                </div>
            );
            btnClass.push(classes.Red);
        }

        let assignedClasses = [];
        if (this.state.persons.length <= 2) {
            assignedClasses.push(classes.red);
        }
        if (this.state.persons.length <= 1) {
            assignedClasses.push(classes.bold);
        }

        return (
            <div className={classes.App}>
                <h1>Hi, I'm React App</h1>
                <p className={assignedClasses.join(' ')}>This is really working!</p>
                <button className={btnClass.join(' ')} onClick={this.togglePersonsHandler}>
                    Toggle persons
                </button>
                {persons}
            </div>
        );
        // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi, I\'m React App'));
    }
}

export default App;

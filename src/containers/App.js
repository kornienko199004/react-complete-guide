import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
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
            { id: 'asd1', name: 'Aleksey', age: 29 },
            { id: 'asd2', name: 'Manu', age: 27 },
            { id: 'asd3', name: 'Max', age: 28 },
        ],
        showPersons: false,
        changeCounter: 0,
        authenticated: false,
    };

    static getDerivedStateFromProps(props, state) {
        console.log(props);
        console.log('[App.js] getDerivedStateFromProps');
        return state;
    }

    componentDidMount() {
        console.log('[App.js] componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[App.js] shouldComponentUpdate');
        // if (nextProps.persons !== this.props.persons) {
        //     return true;
        // } else {
        //     return false;
        // }
        return true;
    }   

    componentDidUpdate() {
        console.log('[App.js] componentDidUpdate');
    }

    deletePersonHandler = personIndex => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({ persons: persons });
    };

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => p.id === id);
        const person = {
            ...this.state.persons[personIndex],
        };

        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;

        // this.setState({
        //     persons: persons,
        //     changeCounter: this.state.changeCounter + 1
        // });

        this.setState((prevState, props) => {
            return {
                persons: persons,
                changeCounter: prevState.changeCounter + 1
            }
        });
    };

    togglePersonsHandler = () => {
        this.setState({ showPersons: !this.state.showPersons });
    };

    loginHandler = () => {
        this.setState({
            authenticated: true,
        });
    };

    render() {
        console.log('[App.js] render');
        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangedHandler}
                    isAuthenticated={this.state.authenticated}
                />
            );
        }

        return (
            <Aux>
                <Cockpit
                    title={this.props.appTitle}
                    clicked={this.togglePersonsHandler}
                    showPersons={this.state.showPersons}
                    personsLength={this.state.persons.length}
                    login={this.loginHandler}
                />
                {persons}
            </Aux>
        );
        // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi, I\'m React App'));
    }
}

export default withClass(App, classes.App);

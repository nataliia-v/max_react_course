import React, { Component } from 'react';

import classes from './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 },
    ],
    // eslint-disable-next-line react/no-unused-state
    otherState: 'some other value',
    showPersons: false,
  };

  nameChangedHandler = (event, id) => {
    // eslint-disable-next-line react/destructuring-assignment
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      // eslint-disable-next-line react/destructuring-assignment
      ...this.state.persons[personIndex],
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    // eslint-disable-next-line react/destructuring-assignment,react/no-access-state-in-setstate
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons });
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    // eslint-disable-next-line react/destructuring-assignment,react/no-access-state-in-setstate
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons });
  };

  togglePersonsHandler = () => {
    // eslint-disable-next-line react/destructuring-assignment
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const { showPersons } = this.state;

    let persons = null;
    let btnClass = '';

    if (showPersons) {
      persons = (
        <div>
          {/* eslint-disable-next-line react/destructuring-assignment */}
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );

      btnClass = classes.Red;
    }

    const assignedClasses = [];

    // eslint-disable-next-line react/destructuring-assignment
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    // eslint-disable-next-line react/destructuring-assignment
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I am a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        {/* eslint-disable-next-line react/button-has-type */}
        <button className={btnClass} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;

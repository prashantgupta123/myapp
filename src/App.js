import React, {Component} from 'react';
import './App.css';
import Person from './person/Person';
import Aux from './hoc/Aux';
import WithClass from './hoc/WithClass';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            persons: [
                {id: 1, name: "Prashant", age: 26},
                {id: 2, name: "Aman", age: 27},
                {id: 3, name: "Rahul", age: 25}
            ],
            showPerson: true
        }
    }

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                {name: newName, age: 26},
                {name: "Aman", age: 27}
            ]
        });
    };

    nameChangeHandler = (event, id) => {
        const persons = [...this.state.persons];

        const personIndex = persons.findIndex(p => {
                return p.id === id;
            }
        );
        const person = persons[personIndex];
        person.name = event.target.value;

        persons[personIndex] = person;

        this.setState({persons: persons});
    };

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPerson;
        this.setState({showPerson: !doesShow});
    };

    render() {
        let person = null;
        let newClasses = [];
        let style = {
            backgroundColor: 'blue',
            color: 'white',
            padding: '8px',
            cursor: 'pointer'
        };

        if (this.state.persons.length <= 2) {
            newClasses.push('red');
        }
        if (this.state.persons.length <= 1) {
            newClasses.push('bold');
        }

        if (this.state.showPerson) {
            person = (
                <Aux>
                    {
                        this.state.persons.map((person, index) => {
                            return <Person
                                name={person.name}
                                age={person.age}
                                key={person.id}
                                click={() => this.deletePersonHandler(index)}
                                change={(event) => this.nameChangeHandler(event, person.id)}
                            />
                        })
                    }
                </Aux>
            );

            style.backgroundColor = "red";
        }

        return (
            <Aux>

                <p className={newClasses.join(' ')}>This Style working</p>

                <button onClick={() => this.switchNameHandler("Gary")}>Switch</button>

                <button style={style} onClick={() => this.togglePersonsHandler()}>Toggle</button>

                {person}

                {/*<Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click={this.switchNameHandler.bind(this, 'Guru')}
                />

                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                />*/}

            </Aux>
        );
    }
}

export default WithClass(App, "App");
import { Component } from 'react';

export class App extends Component {
  constructor() {
    super();

    this.state = {
      person: {
        firstName: 'John',
        lastName: 'Doe',
      },
      counter: 0,
    };
  }

  buttonClickHandler() {
    this.setState({
      person: {
        firstName: 'Jane'
      }
    });
  }

  render() {
    console.log('Component rendering');

    return (
      <div>
        Counter value: { this.state.counter }
        <button onClick={ () => this.buttonClickHandler() }>Increment</button>
        <div>{ `${this.state.person.firstName} ${this.state.person.lastName}` }</div>
      </div>
    )
  }

}


import { Component } from 'react';
import { Counter } from './components/Counter';
import { CustomButton } from './components/CustomButton';

export class App extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
    };
  }

  componentDidMount() {
    console.log('App mounted');
  }

  buttonClickHandler() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  render() {
    console.log('App rendering');

    return (
      <div>
        <Counter counterValue={ this.state.counter }/>
        <CustomButton isClicked={() => this.buttonClickHandler()}>
          <div>GO1!</div>
          <div>GO2!</div>
          <div>GO3!</div>
        </CustomButton>
      </div>
    )
  }

}


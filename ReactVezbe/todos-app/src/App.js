import { Counter } from './components/Counter';
import { CustomButton } from './components/CustomButton';
import { useState } from 'react';

export function App() {
  
  const [counterState, setCounterState] = useState({
    counter: 0
  });

  const incrementCounter = () => {
    this.setState({
      counter: counterState.counter + 1
    });
  };

    return (
      <>
        <Counter counterValue={ counterState.counter }/>
        <CustomButton isClicked={incrementCounter}>
          Increment
        </CustomButton>
      </>
    )

}


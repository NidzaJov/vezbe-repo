import { Counter } from './components/Counter';
import { CustomButton } from './components/CustomButton';
import { useState, useEffect } from 'react';

export function App() {
  
  const [counterState, setCounterState] = useState({
    counter: 0
  });

  const incrementCounter = () => {
    setCounterState({
      counter: counterState.counter + 1
    });
  };

  useEffect(() => {
    console.log('Use effect hook ran: ', counterState.counter)
  })

    return (
      <>
        <Counter counterValue={ counterState.counter }/>
        <CustomButton isClicked={incrementCounter}>
          Increment
        </CustomButton>
      </>
    )

}


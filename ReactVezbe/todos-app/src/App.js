import { Counter } from './components/Counter';
import { CustomButton } from './components/CustomButton';
import { useCounter } from './hooks/useCounter'

export function App() {
  
  const { counter, decrementCounter, incrementCounter } = useCounter(5);

    return (
      <>
        <Counter counterValue={ counter }/>
        <CustomButton isClicked={incrementCounter}>
          Increment
        </CustomButton>
        <CustomButton isClicked={decrementCounter}>
          Decrement
        </CustomButton>
      </>
    )

}


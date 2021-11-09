import { Counter } from './components/Counter';
import { CustomButton } from './components/CustomButton';
import { useCounter } from './hooks/useCounter'

export function App() {
  
  const { counter, decrementCounter } = useCounter();

    return (
      <>
        <Counter counterValue={ counter }/>
        <CustomButton isClicked={decrementCounter}>
          Decrement
        </CustomButton>
      </>
    )

}


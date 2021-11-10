import { Counter } from './components/Counter';
import { CustomButton } from './components/CustomButton';
import { useCounter } from './hooks/useCounter';
import { Messages } from './components/Messages'

export function App() {
  
  const { counter, decrementCounter, incrementCounter } = useCounter(5);
  const messageStrings = [];

  const divisibleByTen = (counter % 10) === 0;
  const divisibleByFifteen = (counter % 15) === 0;
  const divisibleByTweenty = (counter % 20) === 0;

  if (divisibleByTen) messageStrings.push({
    text: 'Counter is divisible by 10.',
    isWarning: false
  });
  if (divisibleByFifteen) messageStrings.push({
    text: 'Counter is divisible by 15.',
    isWarning: true
  });
  if (divisibleByTweenty) messageStrings.push({
    text: 'Counter is divisible by 20.',
    isWarning: false
  });

    return (
      <>
        <Counter counterValue={ counter }/>
        <CustomButton isClicked={incrementCounter}>
          Increment
        </CustomButton>
        <CustomButton isClicked={decrementCounter}>
          Decrement
        </CustomButton>
        <Messages messages={messageStrings} />
      </>
    )

}


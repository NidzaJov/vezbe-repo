import { Counter } from './components/Counter';
import { CustomButton } from './components/CustomButton';
import { useCounter } from './hooks/useCounter'

export function App() {
  
  const { counter, decrementCounter, incrementCounter } = useCounter(5);
  const messages = [];

  const divisibleByTen = (counter % 10) === 0;
  const divisibleByFifteen = (counter % 15) === 0;
  const divisibleByTweenty = (counter % 20) === 0;

  if (divisibleByTen) messages.push('Counter is divisible by 10.');
  if (divisibleByFifteen) messages.push('Counter is divisible by 15');
  if (divisibleByTweenty) messages.push('Counter is divisible by 20.');

  const messageElements = messages
  .map(
    (msg, idx) => (
    <div key={`message-${idx}`}>
      {msg}
      </div>
    )
  );
  console.log(messageElements)
    return (
      <>
        <Counter counterValue={ counter }/>
        <CustomButton isClicked={incrementCounter}>
          Increment
        </CustomButton>
        <CustomButton isClicked={decrementCounter}>
          Decrement
        </CustomButton>
        {messageElements}
      </>
    )

}


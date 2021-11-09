import { useState } from 'react';

export function useCounter(step=1) {
    const [counterState, setCounterState] = useState({
        counter: 0,
        name: "Nikola"
    })

    const incrementCounter = () => {
        setCounterState({
            counter: counterState.counter + step
        })
    }

    const decrementCounter = () => {
        setCounterState({
            counter: counterState.counter -step
        })
    }

    return {
        counter: counterState.counter,
        incrementCounter,
        decrementCounter
    }
}
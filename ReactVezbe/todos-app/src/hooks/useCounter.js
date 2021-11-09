import { useState } from 'react';

export function useCounter() {
    const [counterState, setCounterState] = useState({
        counter: 0,
        name: "Nikola"
    })

    const incrementCounter = () => {
        setCounterState({
            counter: counterState.counter + 1
        })
    }

    const decrementCounter = () => {
        setCounterState({
            counter: counterState.counter -1
        })
    }

    return {
        counter: counterState.counter,
        incrementCounter,
        decrementCounter
    }
}
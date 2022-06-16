import React, { useState } from 'react'

export default function CounterComponent() {

    const [name, setName] = useState('Zartab')
    const [counter, setCounter] = useState(0)

    const incrementCount = () => {
        setCounter(counter + 1)
    }

    const decerementCount = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }
    return (
        <div>
            <h3>Counter Component</h3>
            <h2>Name:{name}</h2>
            <h2>Counter: {counter} </h2>
            <br />
            <br />
            <button onClick={incrementCount}>Increment</button> &nbsp; &nbsp;
            <button onClick={decerementCount}>Decrement</button>
        </div>

    )
}

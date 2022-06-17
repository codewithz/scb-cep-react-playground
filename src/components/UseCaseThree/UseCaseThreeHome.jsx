import React, { useState, useEffect } from 'react'

export default function UseCaseThreeHome() {

    const [name, setName] = useState("")
    const [count, setCount] = useState(0)

    // componentDidMount,componentDidUpdate,componentWillUnmount
    useEffect(() => {
        document.title = `${name} have clicked for ${count} times`

        return () => {
            // here we write code which is supposed to go in componentWillUnmount
            console.log("Clean Up")
        }
    })

    const handleIncrement = () => {
        setCount(count + 1)
    }

    const handleInput = (event) => {
        setName(event.target.value)
    }

    return (
        <div>
            <h1>Counter App</h1>
            <div>
                <input type="text" onChange={handleInput} />
                <div>
                    {name} have clicked for {count} times
                </div>
                <br />
                <button
                    className="btn btn-warning"
                    onClick={handleIncrement}>
                    Increment
                </button>
            </div>
        </div>
    )
}

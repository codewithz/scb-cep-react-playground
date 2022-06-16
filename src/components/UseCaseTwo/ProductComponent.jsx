import React, { useState } from 'react'

export default function ProductComponent(props) {
    const [productName, setProductName] = useState(props.name)
    const [quantity, setQuantity] = useState(props.quantity)

    const increment = () => {
        setQuantity(quantity + 1)
    }

    const decrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1)
        }
    }

    const styles = {
        fontSize: 20,
        fontWeight: 'bold'
    }

    return (
        <div>
            <h4>{productName}</h4>
            <button
                className="btn btn-primary btn-sm m-2"
                onClick={increment}
            >
                +
            </button>
            <span style={styles} className='badge badge-warning m-2'> {quantity}</span>
            <button
                className="btn btn-success btn-sm m-2"
                onClick={decrement}
            >
                -
            </button>
        </div>
    )
}

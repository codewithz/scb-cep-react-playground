import React from 'react'

export default function ProductComponent(props) {

    const { name, quantity, id } = props.product

    const increment = () => {
        props.onIncrement(props.product)
    }

    const decrement = () => {
        props.onDecrement(props.product)
    }

    const removeFromCart = () => {
        props.onRemove(id)
    }

    const styles = {
        fontSize: 20,
        fontWeight: 'bold'
    }

    return (
        <div>
            <h4>{name}</h4>
            <button
                className="btn btn-primary btn-sm m-2"
                onClick={increment}
            >
                +
            </button>
            <span style={styles} className='badge badge-warning m-2'>
                {quantity}
            </span>
            <button
                className="btn btn-success btn-sm m-2"
                onClick={decrement}
            >
                -
            </button>
            &nbsp; &nbsp;
            <button
                className="btn btn-sm btn-danger m-2"
                onClick={removeFromCart}
            >Remove From Cart</button>
        </div>
    )
}

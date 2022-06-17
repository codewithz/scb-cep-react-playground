import React from 'react'
// import { useHistory } from 'react-router-dom'

export default function ProductDetails(props) {

    // const history = useHistory()

    const handleSave = () => {
        //Some call to save the application
        //Navigate to Products
        // history.push("/products")

        props.history.push("/products")
    }

    const { id } = props.match.params
    return (
        <div>
            <h1>Product Details - {id}</h1>
            <button onClick={handleSave}>Save</button>
        </div>
    )
}

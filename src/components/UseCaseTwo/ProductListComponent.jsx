import React, { useState } from 'react'
import ProductComponent from './ProductComponent';

export default function ProductListComponent() {

    const productList = [
        { id: 1, name: 'Bread', quantity: 3 },
        { id: 2, name: 'Butter', quantity: 1 },
        { id: 3, name: 'Jam', quantity: 1 },
        { id: 4, name: 'Maggi', quantity: 4 },
        { id: 5, name: 'Eggs', quantity: 6 },
        { id: 6, name: 'Salt', quantity: 1 }
    ]

    const [products, setProducts] = useState(productList);

    const removeFromCart = (productId) => {
        console.log(productId)
        const filteredProductList = products.filter(
            (product) => (product.id !== productId)
        );

        setProducts(filteredProductList);
    }

    const handleIncrement = (product) => {
        const productsClone = [...products];
        const index = productsClone.indexOf(product);
        productsClone[index] = { ...product }
        productsClone[index].quantity++;
        setProducts(productsClone);
    }

    const handleDecrement = (product) => {
        const productsClone = [...products];
        const index = productsClone.indexOf(product);
        productsClone[index] = { ...product }
        productsClone[index].quantity--;
        setProducts(productsClone);
    }

    return (
        <div >
            {
                products.map((product) =>

                    <ProductComponent
                        onRemove={removeFromCart}
                        key={product.id}
                        product={product}
                        onIncrement={handleIncrement}
                        onDecrement={handleDecrement}
                    />


                )
            }
        </div>
    )
}

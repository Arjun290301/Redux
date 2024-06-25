// Card.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Hero = () => {
    const products = useSelector(state => state.products);
    const totalSum = useSelector(state => state.totalSum);
    const dispatch = useDispatch();

    const incrementQuantity = (id) => {
        dispatch({ type: 'INCREMENT_QUANTITY', payload: id });
    };

    const decrementQuantity = (id) => {
        dispatch({ type: 'DECREMENT_QUANTITY', payload: id });
    };

    return (
        <div className="card">
            <h2>Product Card</h2>
            {products.map(product => (
                <div key={product.id} className="product">
                    <h3>{product.name}</h3>
                    <img src={product.thumbnail} />
                    <p>Price: ${product.price}</p>
                    <p>Quantity: {product.quantity}</p>
                    <p>Total: ${product.price * product.quantity}</p>
                    <button onClick={() => decrementQuantity(product.id)}>-</button>
                    <button onClick={() => incrementQuantity(product.id)}>+</button>
                    <hr></hr>
                </div>
            ))}
            <div className="total-sum">
                <h3>Total Sum: ${totalSum}</h3>
            </div>
        </div>
    );
};

export default Hero;
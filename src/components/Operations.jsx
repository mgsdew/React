import React from 'react';
import { add, subtract, multiply, divide as divideBySingleNumbers } from '../utils/math/math'



const Operations = () => {

    const sum = add(5, 3);
    const difference = subtract(10, 4);
    const product = multiply(6, 7);
    const quotient = divideBySingleNumbers(20, 5);  

    return (
        <div>
            <h2>Operations Results:</h2>
            <p>Sum: {sum}</p>
            <p>Difference: {difference}</p>
            <p>Product: {product}</p>
            <p>Quotient: {quotient}</p>
        </div>
    );
};

export default Operations;
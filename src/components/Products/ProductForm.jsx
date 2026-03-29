import React, { useState } from 'react';


const ProductForm = ({ handleAddProduct }) => {

    const[error, setError] = useState('');

    const handleProductSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        // form.reset();

        if(name.length === 0){
            setError('Product name is required');
            return;
        }
        else if(price.length === 0 || price <= 0){
            setError('Product price is required and must be a positive number');
            return;
        }
        else if(quantity.length === 0 || quantity <= 0){
            setError('Product quantity is required and must be a positive number');
            return;
        }
        else{
            setError('');
        }


        const newProduct = {
            name,
            price,
            quantity
        }
        // console.log(newProduct);
        handleAddProduct(newProduct);
    }

    return (
        <div>
            <h3>Add a Product</h3>
            <form onSubmit={handleProductSubmit}>
                <input type="text" name='name' placeholder='Enter product name' />
                <br/>
                <input type="number" name='price' placeholder='Enter product price' />
                <br/>
                <input type="number" name='quantity' placeholder='Enter product quantity' />
                <br/>
                <input type="submit" value="Submit" />
            </form>

            <small>{error && <p style={{ color: 'red' }}>{error}</p>}</small>
        </div>
    );
};

export default ProductForm;
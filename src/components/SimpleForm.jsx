import React, { useState } from 'react';

const SimpleForm = () => {

    const [password, setPassword] = useState('secret');
    const [error, setError] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
    }

    const handlePasswordChange = (e) =>{
        console.log(e.target.value);
        setPassword(e.target.value);
        
        if(password.length < 6){
            setError('Password must be at least 6 characters long');
        }
        else{
            setError('');
        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder='Your Name'/>
                <br />
                <input type="email" name="email" placeholder='Your Email' required />
                <br />
                <input type="password" name="password" placeholder='Your Password'
                       defaultValue={password} onChange={handlePasswordChange} required />
                <br />
                <input className='btn btn-primary' type="submit" value="Submit" />
            </form>
            <p style={{color: 'red'}}>
                <small>{error}</small>
            </p>
        </div>
    );
};

export default SimpleForm;
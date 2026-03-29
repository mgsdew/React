import React from 'react';
import useInputFields from '../hooks/useInputFields';

const HookForm = () => {

    const [name, nameOnChange] = useInputFields('');
    const [email, emailOnChange] = useInputFields('');
    const [password, passwordOnChange] = useInputFields('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, password);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter your name' 
                       defaultValue={name} onChange={nameOnChange}/>
                <br />
                <input type="email" placeholder='Enter your email' required
                       defaultValue={email} onChange={emailOnChange}/>
                <br/>
                <input type="password" placeholder='Enter your password' required
                       defaultValue={password} onChange={passwordOnChange}/>
                <br />
                <input type="submit" value="Submit" /> 

            </form>
        </div>
    );
};

export default HookForm;
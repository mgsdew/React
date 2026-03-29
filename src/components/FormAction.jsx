import React, { useRef } from 'react';

const FormAction = () => {

    const emailRef = useRef();
    const passwordRef = useRef();

    const handleFormSubmit = (e) =>{
        e.preventDefault();
        // console.log(e.target.email.value);
        // console.log(e.target.password.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }

    // const handleFormData = (formData) => {
    //     console.log(formData.get('email'));
    //     console.log(formData.get('password'));
    // }

    return (
        <div>
            <form onSubmit = {handleFormSubmit}>
            {/* <form action = {handleFormData}> */}
            
                <input type="email" name="email" placeholder='Your Email' 
                       ref={emailRef} required/>
                <br /> 
                <input type="password" name="password" placeholder='Your Password' 
                       ref={passwordRef} required />
                <br />
                <input type="submit" value="Submit" />  
            </form>
        </div>
    ); 
};

export default FormAction;
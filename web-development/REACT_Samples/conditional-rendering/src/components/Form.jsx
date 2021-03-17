import React from 'react';
import Input from './Input.jsx';

function Login(props){
    return (
        <form className='form'>
            <h1>Welcome</h1>
            <Input
                inputType='text'
                placeholder='Username'
            />
            <Input
                inputType='password'
                placeholder='Password'
            />
            {!props.isRegistered &&
                <Input
                    inputtype='password'
                    placeholder='Confirm Password'
                />
            }
            <button type="submit">
                {props.isRegistered ? 'Login' : 'Register'}
            </button>
        </form>
    )
}

export default Login;

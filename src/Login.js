import React from 'react';
import './Login.css';
import {Link} from 'react-router-dom';

function Login() {
    return (
        <div className='login'>
            <Link to='/'>
                <img 
                className='login__logo' 
                src='http://pngimg.com/uploads/amazon/amazon_PNG21.png' 
                />
            </Link>     
            <div className='login__container'>
                <h1>Sign-in</h1>
                <form>
                    <h5>Email</h5>
                    <input type='text' />

                    <h5>Password</h5>
                    <input type='password' />

                    <button className='login__signInButton'>Sign in</button>
                </form>
                <p>
                    By signing-in you agree to our terms and conditions.
                </p>
                <button className='login__registerButton'>Create your Amazon account</button>

            </div>


        </div>
    )
}

export default Login

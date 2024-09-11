// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        let valid = true;

        if (email === '') {
            setEmailError('Email is required');
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError('Email is invalid');
            valid = false;
        } else {
            setEmailError('');
        }

        if (password === '') {
            setPasswordError('Password is required');
            valid = false;
        } else if (password.length < 8) {
            setPasswordError('Password must be at least 8 characters long');
            valid = false;
        } else {
            setPasswordError('');
        }

        if (valid) {
            console.log('Form is valid, proceed with submission');
        }
    };

    return (
        <div className='loginwrapper'>
            <div className="loginform">
                <form onSubmit={handleSubmit}>
                    <div className="top-header">
                        <span>فلسطين حرة بإذن الله</span>
                        <header>Login</header>
                    </div>
                    <div className="input-field">
                        <input
                            type="text"
                            className="input"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <i className="fas fa-envelope"></i>
                        <p className="error-message">{emailError}</p>
                    </div>
                    <div className="input-field">
                        <input
                            type="password"
                            className="input"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <i className="fas fa-unlock-alt"></i>
                        <p className="error-message">{passwordError}</p>
                    </div>
                    <div className="submit-field">
                        <input type="submit" className="submit" value="Login" />
                        <Link className="submit create-account" to="/register">Register</Link>
                    </div>
                </form>
                <div className="bottom">
                    <label><Link to="/resetpassword">? Forget Password </Link></label>
                </div>
            </div>
        </div>
    );
};

export default Login;

// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './resetpassword.css';

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === '') {
            setEmailError('Email is required');
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError('Email is invalid');
        } else {
            setEmailError('');
            navigate('/newpassword');
        }
    };

    return (
        <div className='resetwrapper'>
            <div className="loginform">
                <form onSubmit={handleSubmit} action='/newpassword'>
                    <div className="top-header">
                        <span>Forget Password</span>
                        <header>Recovery Account</header>
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

                    <div className="submit-field">
                        <input type="submit" className="submit" value="Recovery" />
                    </div>
                </form>
                
            </div>
        </div>
    );
};

export default ResetPassword;

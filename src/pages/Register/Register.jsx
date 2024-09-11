// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './register.css';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [dobError, setDobError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;

    if (firstName === '') {
      setFirstNameError('First name is required');
      valid = false;
    } else if (firstName.length < 4) {
      setFirstNameError('First name must be at least 4 characters');
      valid = false;
    } else {
      setFirstNameError('');
    }

    if (lastName === '') {
      setLastNameError('Last name is required');
      valid = false;
    } else if (lastName.length < 4) {
      setLastNameError('Last name must be at least 4 characters');
      valid = false;
    } else {
      setLastNameError('');
    }

    if (dob === '') {
      setDobError('Date of birth is required');
      valid = false;
    } else {
      setDobError('');
    }

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

    if (confirmPassword === '') {
      setConfirmPasswordError('Confirm password is required');
      valid = false;
    } else if (confirmPassword !== password) {
      setConfirmPasswordError('Passwords do not match');
      valid = false;
    } else {
      setConfirmPasswordError('');
    }

    if (valid) {
      setShowPopup(true);
    }
  };

  return (
    <div className="registerwrapper">
      <div className="loginform">
        <form onSubmit={handleSubmit}>
          <div className="top-header">
            <span>Join Us</span>
            <header>Create a New Account</header>
          </div>
          <div className="flex-fields">
            <div className="input-field">
              <input
                type="text"
                className="input"
                placeholder="Firstname"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <i className="fas fa-user"></i>
              <p className="error-message">{firstNameError}</p>
            </div>
            <div className="input-field">
              <input
                type="text"
                className="input"
                placeholder="Lastname"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <i className="fas fa-user"></i>
              <p className="error-message">{lastNameError}</p>
            </div>
          </div>
          <div className="input-field">
            <input
              type="date"
              className="input"
              placeholder="Birthday"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
            <i className="fas fa-calendar"></i>
            <p className="error-message">{dobError}</p>
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
          <div className="flex-fields">
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
            <div className="input-field">
              <input
                type="password"
                className="input"
                placeholder="Verify Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <i className="fas fa-unlock-alt"></i>
              <p className="error-message">{confirmPasswordError}</p>
            </div>
          </div>
          <div className="submit-field">
            <input type="submit" className="submit" value=" Register" />
            <Link className="submit create-account" to="/">
              Login
            </Link>
          </div>
        </form>
        {showPopup && (
  <div className="popup">
    <div className="popup-content">
      <div className="popup-header">
        <h2>Registration Successful!</h2>
        <button className="close-btn" onClick={() => setShowPopup(false)}>×</button>
      </div>
      <div className="popup-body">
        <p>! Welcome to our community</p>
      </div>
      <div className="popup-footer">
        <button onClick={() => setShowPopup(false)}>Close</button>
      </div>
    </div>
  </div>
)}
</div>
</div>
  );
};

export default Register;

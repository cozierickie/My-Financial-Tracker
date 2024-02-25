// src/components/Register.js

import React, { useState } from 'react';

const Register = ({ onRegister }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Simulate registration logic
    // In a real app, this would involve making an API request to your backend
    // to create a new user account
    if (name && email && password) {
      // Assuming a successful registration
      onRegister({ name, email }); // Pass the user information to the parent component
    } else {
      alert('Please enter valid registration details.');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;

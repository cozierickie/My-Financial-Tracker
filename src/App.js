// src/App.js

import React, { useState } from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

const App = () => {
  const [user, setUser] = useState(null); // User state to manage logged-in user

  // Function to handle login
  const handleLogin = async (userData) => {
    try {
      // Make API request to your backend for login
      // Replace 'http://localhost:3000' with your actual backend URL
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const user = await response.json();
        setUser(user);
      } else {
        console.error('Login failed');
        // Handle login failure (e.g., show an error message)
      }
    } catch (error) {
      console.error('Error during login', error);
    }
  };

  // Function to handle registration
  const handleRegister = async (userData) => {
    try {
      // Make API request to your backend for registration
      // Replace 'http://localhost:3000' with your actual backend URL
      const response = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const user = await response.json();
        setUser(user);
      } else {
        console.error('Registration failed');
        // Handle registration failure (e.g., show an error message)
      }
    } catch (error) {
      console.error('Error during registration', error);
    }
  };

  return (
    <div>
      {user ? (
        // If user is logged in, show the Dashboard
        <Dashboard user={user} />
      ) : (
        // If user is not logged in, show either the Login or Register component
        <>
          <Home />
          <Login onLogin={handleLogin} />
          <Register onRegister={handleRegister} />
        </>
      )}
    </div>
  );
};

export default App;

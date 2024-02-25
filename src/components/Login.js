// Login.js
import React, { useState } from 'react';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleLogin = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Other headers as needed
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        // Successful login
        // Redirect or perform other actions
      } else {
        // Handle unsuccessful login
        setError('Login failed. Please try again.'); // Set a meaningful error message
      }
    } catch (error) {
      setError('Login failed. Please try again.'); // Set a meaningful error message
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  return (
    <div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {/* Your login form */}
      <label>
        Username:
        <input type="text" name="username" value={credentials.username} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" name="password" value={credentials.password} onChange={handleInputChange} />
      </label>
      <br />
      <button onClick={handleLogin} disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
    </div>
  );
};

export default Login;

import React, { useState } from 'react';
import './LoginPage.css'; // Import your CSS file for styling
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate=useNavigate()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Dummy hardcoded username and password
    const dummyUsername = 'user';
    const dummyPassword = 'password';

    if (username === dummyUsername && password === dummyPassword) {
      // Successful login, you can redirect to another page or set authentication token here
    //   alert('Login successful!');
    navigate('/dash')
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container"> {/* Add a container class */}
      <h2>Login</h2>
      <div>
        <input
          type="text"
          className="login-input"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          className="login-input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin} className="login-button">Login</button>
      {error && <div className="error-message">{error}</div>} {/* Add a class for error message */}
    </div>
  );
};

export default LoginPage;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [employeeCode, setEmployeeCode] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ employeeCode, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Handle successful login
        alert('Login successful!');
        // Optionally store the token in local storage
        localStorage.setItem('token', data.token);
        // Navigate to the dashboard after successful login
        navigate('/');  // Redirecting to the dashboard
      } else {
        // Handle errors (like invalid credentials)
        alert(data.message || 'Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Failed to login. Please try again later.');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2 className="login-heading">Login</h2>

        <div className="form-group">
          <label>Employee Code:</label>
          <input
            type="text"
            name="employeeCode"
            value={employeeCode}
            onChange={(e) => setEmployeeCode(e.target.value)}
            required
          />
        </div>

        <div className="form-group password-container">
          <label>Password:</label>
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label className="show-password-label">
            <input
              type="checkbox"
              checked={showPassword}
              onChange={togglePasswordVisibility}
            />
            Show Password
          </label>
        </div>

        <div className="redirect-signup">
          <a href="/signup">Not yet registered?</a>
        </div>

        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default Login;

// LoginPage.js

import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link from react-router-dom
import './Loginpage.css';

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault(); // Prevent form submission
    navigate('/dashboard'); // Navigate to the dashboard route
  };

  const handleForgotPassword = () => {
    // Handle forgot password functionality here
    alert("Forgot Password functionality will be implemented soon!");
  };

  return (
    <div className="login-container">
      <img src="/logo1.png" alt="Logo" className="logo" />
      <h2>We are electric</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="E-mail" /><br />
        <input type="password" placeholder="Password" /><br />
        <button type="submit" className="login-button">Login</button>
      </form>
      <Link to="#" className="forgot-password-link" onClick={handleForgotPassword}>Forgot Password?</Link>
    </div>
  );
}

export default LoginPage;









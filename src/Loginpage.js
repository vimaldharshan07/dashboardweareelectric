

import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import './Loginpage.css';

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault(); 
    navigate('/dashboard');
  };

  const handleForgotPassword = () => {
    
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








